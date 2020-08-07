function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _components_builder_builder_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/builder/builder.component */
    "./src/app/components/builder/builder.component.ts");
    /* harmony import */


    var _components_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/preferences/preferences.component */
    "./src/app/components/preferences/preferences.component.ts");
    /* harmony import */


    var _components_report_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/report/report.component */
    "./src/app/components/report/report.component.ts");
    /* harmony import */


    var _components_start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/start/start.component */
    "./src/app/components/start/start.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/auth-guard */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
      return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["redirectUnauthorizedTo"])(['login']);
    };

    var rejectUnverified = function rejectUnverified() {
      return _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["emailVerified"];
    };

    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (user) {
      console.log(user);
    });
    var routes = [{
      path: 'report/:report-id/:page-number',
      component: _components_report_report_component__WEBPACK_IMPORTED_MODULE_2__["ReportComponent"],
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: rejectUnverified
      }
    }, {
      path: 'preferences',
      component: _components_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_1__["PreferencesComponent"],
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: rejectUnverified
      }
    }, {
      path: 'builder',
      component: _components_builder_builder_component__WEBPACK_IMPORTED_MODULE_0__["BuilderComponent"],
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: rejectUnverified
      }
    }, {
      path: '',
      component: _components_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"],
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectUnauthorizedToLogin
      }
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/template.service */
    "./src/app/services/template.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");

    function AppComponent_app_navbar_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, tserv) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.tserv = tserv;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.router.events.subscribe(function (url) {
            _this.navHidden = _this.router.url === '/login' ? true : false;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_template_service__WEBPACK_IMPORTED_MODULE_2__["TemplateService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 1,
      consts: [[1, "main-container"], [4, "ngIf"], [1, "content-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_navbar_1_Template, 1, 0, "app-navbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.navHidden);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
      styles: [".content-container[_ngcontent-%COMP%] {\r\n  overflow-x: hidden;\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jb250YWluZXIge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_template_service__WEBPACK_IMPORTED_MODULE_2__["TemplateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _services_constant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./services/constant.service */
    "./src/app/services/constant.service.ts");
    /* harmony import */


    var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/report.service */
    "./src/app/services/report.service.ts");
    /* harmony import */


    var _assets_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../assets/env */
    "./src/assets/env.ts");
    /* harmony import */


    var _services_template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/template.service */
    "./src/app/services/template.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_start_start_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/start/start.component */
    "./src/app/components/start/start.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_report_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/report/report.component */
    "./src/app/components/report/report.component.ts");
    /* harmony import */


    var _components_sections_abstract_section_abstract_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/sections/abstract-section/abstract-section.component */
    "./src/app/components/sections/abstract-section/abstract-section.component.ts");
    /* harmony import */


    var _components_sections_datagrid_section_datagrid_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/sections/datagrid-section/datagrid-section.component */
    "./src/app/components/sections/datagrid-section/datagrid-section.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_controls_division_select_division_select_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/controls/division-select/division-select.component */
    "./src/app/components/controls/division-select/division-select.component.ts");
    /* harmony import */


    var _components_sections_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/sections/simple-input/simple-input.component */
    "./src/app/components/sections/simple-input/simple-input.component.ts");
    /* harmony import */


    var _components_controls_month_select_month_select_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/controls/month-select/month-select.component */
    "./src/app/components/controls/month-select/month-select.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _components_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/preferences/preferences.component */
    "./src/app/components/preferences/preferences.component.ts");
    /* harmony import */


    var _components_builder_builder_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/builder/builder.component */
    "./src/app/components/builder/builder.component.ts");
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_template_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"], _services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_constant_service__WEBPACK_IMPORTED_MODULE_0__["ConstantService"], src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClarityModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_24__["ClipboardModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_assets_env__WEBPACK_IMPORTED_MODULE_2__["config"].firebase)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_start_start_component__WEBPACK_IMPORTED_MODULE_10__["StartComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _components_report_report_component__WEBPACK_IMPORTED_MODULE_13__["ReportComponent"], _components_sections_abstract_section_abstract_section_component__WEBPACK_IMPORTED_MODULE_14__["AbstractSection"], _components_sections_datagrid_section_datagrid_section_component__WEBPACK_IMPORTED_MODULE_15__["DatagridSection"], _components_controls_division_select_division_select_component__WEBPACK_IMPORTED_MODULE_17__["DivisionSelectComponent"], _components_sections_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_18__["SimpleInputSection"], _components_controls_month_select_month_select_component__WEBPACK_IMPORTED_MODULE_19__["MonthSelectComponent"], _components_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_22__["PreferencesComponent"], _components_builder_builder_component__WEBPACK_IMPORTED_MODULE_23__["BuilderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClarityModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_24__["ClipboardModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_start_start_component__WEBPACK_IMPORTED_MODULE_10__["StartComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _components_report_report_component__WEBPACK_IMPORTED_MODULE_13__["ReportComponent"], _components_sections_abstract_section_abstract_section_component__WEBPACK_IMPORTED_MODULE_14__["AbstractSection"], _components_sections_datagrid_section_datagrid_section_component__WEBPACK_IMPORTED_MODULE_15__["DatagridSection"], _components_controls_division_select_division_select_component__WEBPACK_IMPORTED_MODULE_17__["DivisionSelectComponent"], _components_sections_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_18__["SimpleInputSection"], _components_controls_month_select_month_select_component__WEBPACK_IMPORTED_MODULE_19__["MonthSelectComponent"], _components_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_22__["PreferencesComponent"], _components_builder_builder_component__WEBPACK_IMPORTED_MODULE_23__["BuilderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_8__["ClarityModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_24__["ClipboardModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_assets_env__WEBPACK_IMPORTED_MODULE_2__["config"].firebase)],
          providers: [_services_template_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"], _services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_constant_service__WEBPACK_IMPORTED_MODULE_0__["ConstantService"], src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/builder/builder.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/builder/builder.component.ts ***!
    \*********************************************************/

  /*! exports provided: BuilderComponent */

  /***/
  function srcAppComponentsBuilderBuilderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuilderComponent", function () {
      return BuilderComponent;
    });
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var emoji_picker_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! emoji-picker-element */
    "./node_modules/emoji-picker-element/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _services_constant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../services/constant.service */
    "./src/app/services/constant.service.ts");
    /* harmony import */


    var _services_template_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../services/template.service */
    "./src/app/services/template.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sections_datagrid_section_datagrid_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../sections/datagrid-section/datagrid-section.component */
    "./src/app/components/sections/datagrid-section/datagrid-section.component.ts");
    /* harmony import */


    var _sections_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../sections/simple-input/simple-input.component */
    "./src/app/components/sections/simple-input/simple-input.component.ts");

    function BuilderComponent_input_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BuilderComponent_input_4_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r5._template.templateID = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0._template.templateID);
      }
    }

    function BuilderComponent_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "clr-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No pages yet.");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function BuilderComponent_div_8_clr_tree_node_2_clr_tooltip_content_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tooltip-content", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Double click on a page or section below to open the properties pane. Use the \"+\" buttons to add content.");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function BuilderComponent_div_8_clr_tree_node_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tree-node");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Overview");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "clr-tooltip");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "clr-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BuilderComponent_div_8_clr_tree_node_2_clr_tooltip_content_5_Template, 3, 0, "clr-tooltip-content", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_8_clr_tree_node_2_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r10.addPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "clr-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function BuilderComponent_div_8_clr_tree_node_3_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_8_clr_tree_node_3_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);

          var i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r18.addMetaSection(i_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Add Meta Section ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "clr-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function BuilderComponent_div_8_clr_tree_node_3_clr_tree_node_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tree-node", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function BuilderComponent_div_8_clr_tree_node_3_clr_tree_node_8_Template_clr_tree_node_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);

          var section_r21 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          return ctx_r22.openEditSection(section_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "clr-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", section_r21.title, "");
      }
    }

    function BuilderComponent_div_8_clr_tree_node_3_clr_tree_node_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tree-node", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function BuilderComponent_div_8_clr_tree_node_3_clr_tree_node_14_Template_clr_tree_node_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);

          var section_r24 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          return ctx_r25.openEditSection(section_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "clr-icon", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](section_r24.title);
      }
    }

    function BuilderComponent_div_8_clr_tree_node_3_clr_tree_node_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tree-node", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function BuilderComponent_div_8_clr_tree_node_3_clr_tree_node_20_Template_clr_tree_node_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);

          var section_r27 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          return ctx_r28.openEditSection(section_r27);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "clr-icon", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", section_r27.title, " ");
      }
    }

    function BuilderComponent_div_8_clr_tree_node_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tree-node", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clrExpandedChange", function BuilderComponent_div_8_clr_tree_node_3_Template_clr_tree_node_clrExpandedChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);

          var i_r13 = ctx.index;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r30.pageExpansions[i_r13] = $event;
        })("click", function BuilderComponent_div_8_clr_tree_node_3_Template_clr_tree_node_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);

          var i_r13 = ctx.index;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r32.setCurrentPage(i_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function BuilderComponent_div_8_clr_tree_node_3_Template_div_dblclick_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);

          var i_r13 = ctx.index;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r33.openEditPage(i_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "clr-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "clr-tree-node");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BuilderComponent_div_8_clr_tree_node_3_button_7_Template, 3, 0, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, BuilderComponent_div_8_clr_tree_node_3_clr_tree_node_8_Template, 4, 1, "clr-tree-node", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "clr-tree-node");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Datagrids");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_8_clr_tree_node_3_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);

          var i_r13 = ctx.index;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r34.addDatagrid(i_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "clr-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, BuilderComponent_div_8_clr_tree_node_3_clr_tree_node_14_Template, 4, 1, "clr-tree-node", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "clr-tree-node");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "SimpleInputs");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_8_clr_tree_node_3_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);

          var i_r13 = ctx.index;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r35.addSimpleInput(i_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "clr-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, BuilderComponent_div_8_clr_tree_node_3_clr_tree_node_20_Template, 4, 1, "clr-tree-node", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r12 = ctx.$implicit;
        var i_r13 = ctx.index;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("clrExpanded", ctx_r8.pageExpansions[i_r13]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", page_r12.title, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r8.hasMetaSection);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.getSectionsByType(i_r13, "meta"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.getDatagrids(i_r13));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.getSimpleInputs(i_r13));
      }
    }

    function BuilderComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "clr-tree");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BuilderComponent_div_8_clr_tree_node_2_Template, 8, 0, "clr-tree-node", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BuilderComponent_div_8_clr_tree_node_3_Template, 21, 6, "clr-tree-node", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2._template.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2._template.pages);
      }
    }

    function BuilderComponent_div_9_div_10_datagrid_section_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "datagrid-section", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sectionChanged", function BuilderComponent_div_9_div_10_datagrid_section_6_Template_datagrid_section_sectionChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45);

          var section_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r43.setSection(section_r39, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("interface", section_r39);
      }
    }

    function BuilderComponent_div_9_div_10_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "simple-input", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sectionChanged", function BuilderComponent_div_9_div_10_ng_template_7_Template_simple_input_sectionChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);

          var section_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r47.setSection(section_r39, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("interface", section_r39);
      }
    }

    function BuilderComponent_div_9_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_div_10_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52);

          var section_r39 = ctx.$implicit;

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r51.openEditSection(section_r39);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "clr-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, BuilderComponent_div_9_div_10_datagrid_section_6_Template, 1, 1, "datagrid-section", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BuilderComponent_div_9_div_10_ng_template_7_Template, 1, 1, "ng-template", null, 64, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r39 = ctx.$implicit;

        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r36.isDatagrid(section_r39))("ngIfElse", _r41);
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_tooltip_content_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tooltip-content", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Datagrids");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " are tables, good for lots of data.");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "SimpleInputs");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " are basic forms, good for a few questions.");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Meta sections");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " are SimpleInputs that link to properties in the report-- i.e. coverage date.");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_tooltip_3_clr_tooltip_content_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tooltip-content", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Modifying this section might ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "clear existing prefill");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, ".");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_tooltip_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tooltip");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "clr-icon", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_tooltip_3_clr_tooltip_content_2_Template, 6, 0, "clr-tooltip-content", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r57.sectionInEdit["columns"].length, " columns");
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_div_18_clr_accordion_panel_5_clr_accordion_content_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-accordion-content", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Tag label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_div_18_clr_accordion_panel_5_clr_accordion_content_5_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69);

          var tag_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          return tag_r64["label"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Tag icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "emoji-picker", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("emoji-click", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_div_18_clr_accordion_panel_5_clr_accordion_content_5_Template_emoji_picker_emoji_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69);

          var i_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

          var col_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r70.editTagEmoji(col_r60, i_r65, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", tag_r64["label"]);
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_div_18_clr_accordion_panel_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-accordion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "clr-accordion-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_div_18_clr_accordion_panel_5_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r76);

          var i_r65 = ctx.index;

          var col_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r74.deleteTag(col_r60, i_r65);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "clr-icon", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_div_18_clr_accordion_panel_5_clr_accordion_content_5_Template, 7, 1, "clr-accordion-content", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r64 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", tag_r64["icon"], " ", tag_r64["label"], " ");
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tags");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "clr-accordion");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_div_18_clr_accordion_panel_5_Template, 6, 2, "clr-accordion-panel", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_div_18_Template_button_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r79);

          var col_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r77.addTag(col_r60, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Add tag ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", col_r60["tags"]);
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-stack-block");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "clr-stack-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r82);

          var i_r61 = ctx.index;

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r81.deleteColumn(i_r61);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "clr-icon", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "clr-stack-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r82);

          var i_r61 = ctx.index;

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r83.sectionInEdit["columns"][i_r61]["label"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "select", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_Template_select_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r82);

          var i_r61 = ctx.index;

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r84.sectionInEdit["columns"][i_r61]["type"] = $event;
        })("ngModelChange", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_Template_select_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r82);

          var col_r60 = ctx.$implicit;

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r85.typeChanged(col_r60, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "option", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Division Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "option", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Text");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "option", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Tag Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_div_18_Template, 9, 1, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r60 = ctx.$implicit;
        var i_r61 = ctx.index;

        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Column ", i_r61 + 1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r58.sectionInEdit["columns"][i_r61]["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r58.sectionInEdit["columns"][i_r61]["type"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r58.isEqual(col_r60["type"], "tag-select"));
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-stack-block");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "clr-stack-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Columns ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_tooltip_3_Template, 3, 0, "clr-tooltip", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "clr-stack-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_span_5_Template, 2, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_Template_button_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r87);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          return ctx_r86.addColumn($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "clr-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_clr_stack_block_8_Template, 19, 4, "clr-stack-block", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r54.hasPrefill(ctx_r54.sectionInEdit));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r54.sectionInEdit["columns"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r54.sectionInEdit["columns"]);
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_tooltip_3_clr_tooltip_content_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tooltip-content", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Modifying this section might ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "clear existing prefill");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, ".");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_tooltip_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tooltip");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "clr-icon", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_tooltip_3_clr_tooltip_content_2_Template, 6, 0, "clr-tooltip-content", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_content_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-stack-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_content_4_Template_button_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r93);

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r92.addInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "clr-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r89.sectionInEdit["inputs"].length, " inputs ");
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_dropdown_menu_6_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_dropdown_menu_6_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r104);

          var i_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;

          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r102.moveInArray(i_r95, i_r95 - 1, ctx_r102.sectionInEdit["inputs"]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Move up ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_dropdown_menu_6_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_dropdown_menu_6_div_4_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r107);

          var i_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r105.moveInArray(i_r95, i_r95 + 1, ctx_r105.sectionInEdit["inputs"]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Move down ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_dropdown_menu_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-dropdown-menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_dropdown_menu_6_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r110);

          var i_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r108.deleteInArray(i_r95, ctx_r108.sectionInEdit["inputs"]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Delete input ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_dropdown_menu_6_div_3_Template, 2, 0, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_dropdown_menu_6_div_4_Template, 2, 0, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

        var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r95 > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r95 < ctx_r96.sectionInEdit["inputs"].length - 1);
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_12_div_18_clr_accordion_panel_5_clr_accordion_content_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-accordion-content", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Tag label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_12_div_18_clr_accordion_panel_5_clr_accordion_content_5_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r119);

          var tag_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          return tag_r114["label"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Tag icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "emoji-picker", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("emoji-click", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_12_div_18_clr_accordion_panel_5_clr_accordion_content_5_Template_emoji_picker_emoji_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r119);

          var i_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

          var input_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;

          var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r120.editTagEmoji(input_r94, i_r115, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", tag_r114["label"]);
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_12_div_18_clr_accordion_panel_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-accordion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "clr-accordion-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_12_div_18_clr_accordion_panel_5_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r126);

          var i_r115 = ctx.index;

          var input_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;

          var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r124.deleteTag(input_r94, i_r115);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "clr-icon", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_12_div_18_clr_accordion_panel_5_clr_accordion_content_5_Template, 7, 1, "clr-accordion-content", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r114 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", tag_r114["icon"], " ", tag_r114["label"], " ");
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_12_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tags");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "clr-accordion");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_12_div_18_clr_accordion_panel_5_Template, 6, 2, "clr-accordion-panel", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_12_div_18_Template_button_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r129);

          var input_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r127.addTag(input_r94, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Add tag ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", input_r94["tags"]);
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-select-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "select", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_12_Template_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r133);

          var input_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          return input_r94["type"] = $event;
        })("ngModelChange", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_12_Template_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r133);

          var input_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r134.typeChanged(input_r94, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "option", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Division Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "option", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Text");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "option", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "option", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "option", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Tag Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Month");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Multiline text");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_12_div_18_Template, 9, 1, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", input_r94["type"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r97.isEqual(input_r94["type"], "tag-select"));
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-select-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "select", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_13_Template_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r139);

          var input_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          return input_r94["link"] = $event;
        })("ngModelChange", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_13_Template_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r139);

          var input_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r140.linkChanged(input_r94, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "option", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Report coverage date");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "option", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Additional info");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "option", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Report title");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "option", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Report subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "option", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Report tags");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", input_r94["link"]);
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_div_14_clr_accordion_panel_5_clr_accordion_content_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-accordion-content", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Tag label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_div_14_clr_accordion_panel_5_clr_accordion_content_5_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r149);

          var tag_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          return tag_r144["label"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Tag icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "emoji-picker", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("emoji-click", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_div_14_clr_accordion_panel_5_clr_accordion_content_5_Template_emoji_picker_emoji_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r149);

          var i_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

          var input_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r150.editTagEmoji(input_r94, i_r145, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", tag_r144["label"]);
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_div_14_clr_accordion_panel_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-accordion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "clr-accordion-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_div_14_clr_accordion_panel_5_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r156);

          var i_r145 = ctx.index;

          var input_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r154.deleteTag(input_r94, i_r145);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "clr-icon", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_div_14_clr_accordion_panel_5_clr_accordion_content_5_Template, 7, 1, "clr-accordion-content", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r144 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", tag_r144["icon"], " ", tag_r144["label"], " ");
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tags");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "clr-accordion");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_div_14_clr_accordion_panel_5_Template, 6, 2, "clr-accordion-panel", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_div_14_Template_button_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r159);

          var input_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r157.addTag(input_r94, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Add tag ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", input_r94["tags"]);
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-stack-block");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "clr-stack-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "clr-dropdown");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "clr-icon", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_dropdown_menu_6_Template, 5, 2, "clr-dropdown-menu", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "clr-stack-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r162);

          var input_r94 = ctx.$implicit;
          return input_r94["label"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_12_Template, 19, 2, "clr-select-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_clr_select_container_13_Template, 14, 1, "clr-select-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_div_14_Template, 9, 1, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r94 = ctx.$implicit;
        var i_r95 = ctx.index;

        var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Input ", i_r95 + 1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", input_r94["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r90.isSectionType(ctx_r90.sectionInEdit, "simple-input"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r90.isSectionType(ctx_r90.sectionInEdit, "meta"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r90.isEqual(input_r94["type"], "tag-select"));
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-stack-block");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "clr-stack-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Inputs ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_tooltip_3_Template, 3, 0, "clr-tooltip", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_content_4_Template, 4, 1, "clr-stack-content", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_clr_stack_block_5_Template, 15, 5, "clr-stack-block", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r55.hasPrefill(ctx_r55.sectionInEdit));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r55.sectionInEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r55.sectionInEdit["inputs"]);
      }
    }

    function BuilderComponent_div_9_clr_tab_content_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tab-content", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "clr-stack-view");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "clr-stack-block");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "clr-stack-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "clr-stack-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BuilderComponent_div_9_clr_tab_content_19_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r164);

          var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r163.sectionInEdit["title"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "clr-stack-block");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "clr-stack-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Subtitle (optional)");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "clr-stack-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BuilderComponent_div_9_clr_tab_content_19_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r164);

          var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r165.sectionInEdit["subtitle"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "clr-stack-block");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "clr-stack-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "clr-tooltip");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "clr-icon", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, BuilderComponent_div_9_clr_tab_content_19_clr_tooltip_content_17_Template, 13, 0, "clr-tooltip-content", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "clr-stack-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "select", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BuilderComponent_div_9_clr_tab_content_19_Template_select_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r164);

          var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r166.sectionInEdit["type"] = $event;
        })("ngModelChange", function BuilderComponent_div_9_clr_tab_content_19_Template_select_ngModelChange_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r164);

          var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r167.sectionTypeChanged(ctx_r167.sectionInEdit);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "option", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Datagrid");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "option", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "SimpleInput");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "option", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Meta");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "clr-stack-block");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "clr-stack-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "clr-stack-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_clr_tab_content_19_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r164);

          var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r168.sectionInEdit["index"] = ctx_r168.sectionInEdit["index"] - 1;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "clr-icon", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_clr_tab_content_19_Template_button_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r164);

          var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r169.sectionInEdit["index"] = ctx_r169.sectionInEdit["index"] + 1;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "clr-icon", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_35_Template, 9, 3, "clr-stack-block", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, BuilderComponent_div_9_clr_tab_content_19_clr_stack_block_36_Template, 6, 3, "clr-stack-block", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r37.sectionInEdit["title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r37.sectionInEdit["subtitle"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r37.sectionInEdit["type"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r37.sectionInEdit["index"] < 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r37.sectionInEdit["index"] + 1, "/", ctx_r37.currentPage.sections.length, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r37.sectionInEdit["index"] > ctx_r37.currentPage.sections.length - 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r37.isDatagrid(ctx_r37.sectionInEdit));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r37.isSimpleInput(ctx_r37.sectionInEdit) || ctx_r37.isSectionType(ctx_r37.sectionInEdit, "meta"));
      }
    }

    function BuilderComponent_div_9_clr_tab_content_23_simple_input_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "simple-input", 111);
      }

      if (rf & 2) {
        var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("interface", ctx_r170.sectionInEdit);
      }
    }

    function BuilderComponent_div_9_clr_tab_content_23_datagrid_section_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "datagrid-section", 111);
      }

      if (rf & 2) {
        var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("interface", ctx_r171.sectionInEdit);
      }
    }

    function BuilderComponent_div_9_clr_tab_content_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-tab-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "clr-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Prefill is the default information present in each section. You can use it to offer hints on how a form should be filled. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BuilderComponent_div_9_clr_tab_content_23_simple_input_4_Template, 1, 1, "simple-input", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BuilderComponent_div_9_clr_tab_content_23_datagrid_section_5_Template, 1, 1, "datagrid-section", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r38.isSimpleInput(ctx_r38.sectionInEdit) || ctx_r38.isSectionType(ctx_r38.sectionInEdit, "meta"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r38.isDatagrid(ctx_r38.sectionInEdit));
      }
    }

    function BuilderComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r173);

          var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r172.openEditPage(ctx_r172.currentPage);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "clr-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, BuilderComponent_div_9_div_10_Template, 10, 2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "clr-modal", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clrModalOpenChange", function BuilderComponent_div_9_Template_clr_modal_clrModalOpenChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r173);

          var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r174.editSectionOpened = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h3", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Section properties");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "clr-tabs");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "clr-tab");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Properties");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, BuilderComponent_div_9_clr_tab_content_19_Template, 37, 9, "clr-tab-content", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "clr-tab");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Preview & prefill");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, BuilderComponent_div_9_clr_tab_content_23_Template, 6, 2, "clr-tab-content", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r173);

          var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r175.cancelEditSection();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r173);

          var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r176.deleteSection(ctx_r176.sectionInEdit);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Delete section ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r173);

          var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r177.finishEditSection();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Apply changes ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "clr-modal", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clrModalOpenChange", function BuilderComponent_div_9_Template_clr_modal_clrModalOpenChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r173);

          var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r178.editPageOpened = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h3", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Page properties");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Page title");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BuilderComponent_div_9_Template_input_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r173);

          var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r179.currentPage.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Page order ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_Template_button_click_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r173);

          var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r180.movePageUp();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "clr-icon", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_Template_button_click_47_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r173);

          var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r181.movePageDown();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "clr-icon", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_Template_button_click_50_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r173);

          var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r182.deletePage(ctx_r182.currentPage.index);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Delete page ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_div_9_Template_button_click_52_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r173);

          var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r183.finishEditPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Finish ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.currentPage.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.currentPage.sections);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("clrModalOpen", ctx_r3.editSectionOpened)("clrModalSize", "xl");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("clrIfActive", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("clrModalOpen", ctx_r3.editPageOpened);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.currentPage.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.currentPage.index < 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r3.currentPage.index + 1, "/", ctx_r3._template.pages.length, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.currentPage.index > ctx_r3._template.pages.length - 2);
      }
    }

    function BuilderComponent_clr_modal_13_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Original title: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r184.originalTemplateName, " ");
      }
    }

    function BuilderComponent_clr_modal_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-modal", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clrModalOpenChange", function BuilderComponent_clr_modal_13_Template_clr_modal_clrModalOpenChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r186);

          var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r185.saveTemplateOpen = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Save template?");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Title: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, BuilderComponent_clr_modal_13_span_8_Template, 5, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Page count: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Magic text (for nerds):");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "pre", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_clr_modal_13_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r186);

          var ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r187.cancelSaveTemplate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_clr_modal_13_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r186);

          var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r188.saveTemplate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Save template ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("clrModalOpen", ctx_r4.saveTemplateOpen)("clrModalSize", "lg");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4._template.templateID, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.originalTemplateName);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4._template.pages.length, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.getMagicText());

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("clrLoading", ctx_r4.saveLoadingStatus);
      }
    }

    var BuilderComponent = /*#__PURE__*/function () {
      function BuilderComponent(_ActivatedRoute, _AngularFirestore, _ConstantService, _TS, _UserService, _Router) {
        _classCallCheck(this, BuilderComponent);

        this._ActivatedRoute = _ActivatedRoute;
        this._AngularFirestore = _AngularFirestore;
        this._ConstantService = _ConstantService;
        this._TS = _TS;
        this._UserService = _UserService;
        this._Router = _Router;
        this.editSectionOpened = false;
        this.editPageOpened = false;
        this.saveTemplateOpen = false;
        this.emojiPickerOpened = false;
        this.saveLoadingStatus = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].DEFAULT; // sectionPropsForm: FormGroup = new FormGroup({
        //   title: new FormControl(),
        //   subtitle: new FormControl(),
        //   type: new FormControl(),
        //   columns: new FormControl(),
        //   inputs: new FormControl(),
        //   tags: new FormControl(),
        // });

        this.inputsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          array: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
        });
        this.columnsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          array: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
        });
      }

      _createClass(BuilderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.constants$ = this._ConstantService.constants;

          this._UserService.getUserObservable().subscribe(function (user) {
            console.log(user);

            if (user && user.role !== 'admin') {
              console.error('The Builder is for admins only. Redirecting home.');

              _this2._Router.navigate(['']);
            }
          });

          this._ActivatedRoute.queryParamMap.subscribe(function (paramMap) {
            var openTitle = paramMap.get('open'); //if an existing template has been passed to the URL

            if (openTitle) {
              _this2.openTemplate(openTitle).then(function () {
                _this2.originalTemplateName = _this2._template.templateID;
                console.log(_this2._template);
              })["catch"](function () {});
            } else {
              _this2._template = {
                id: null,
                templateID: '',
                pageStatuses: [],
                pageCount: 0,
                completionStatus: 'incomplete',
                pages: []
              };

              _this2.templateChanged();
            }
          });

          this.tempPropsGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            templateTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
          this.tempPropsGroup.valueChanges.subscribe(function () {
            _this2.setTemplateTitle(_this2.tempPropsGroup.get('templateTitle').value);
          }); // this.pushTemplateObjectToDB(outlineReport, outlinePages);
        }
      }, {
        key: "openTemplate",
        value: function openTemplate(templateID) {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            console.log('[Builder] Opening ' + templateID + '...');

            var templateDoc = _this3._AngularFirestore.doc('/templates/' + templateID);

            templateDoc.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (docSnapshot) {
              if (docSnapshot.exists) {
                (function () {
                  var templateHeader = docSnapshot.data();
                  var promises = []; //get all pages stored in subcollection

                  var templatePages = [];

                  var _loop = function _loop(i) {
                    promises.push(new Promise(function (resolve, reject) {
                      var pageDoc = templateDoc.collection('pages').doc(i.toString());
                      pageDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (page) {
                        templatePages.push(page);
                        resolve();
                      }, reject);
                    }));
                  };

                  for (var i = 0; i < templateHeader.pageCount; i++) {
                    _loop(i);
                  }

                  Promise.all(promises).then(function () {
                    _this3._template = {
                      id: null,
                      templateID: templateHeader.templateID,
                      pageStatuses: templateHeader.pageStatuses,
                      pageCount: templateHeader.pageCount,
                      completionStatus: templateHeader.completionStatus,
                      pages: templatePages
                    };

                    _this3.templateChanged();

                    resolve();
                  }, function () {
                    reject();
                  });
                })();
              } else {
                console.warn('Template ' + templateID + ' does not exist. Setting to empty template instead.');

                _this3._TS.newTemplate();

                reject();
              }
            }, reject);
          });
        }
      }, {
        key: "pushTemplateObjectToDB",
        value: function pushTemplateObjectToDB(template, pages) {
          var templateDoc = this._AngularFirestore.doc('/templates/' + template.templateID);

          templateDoc.set(template).then(function () {
            var pageCollection = templateDoc.collection('pages');
            pages.forEach(function (page, index) {
              console.log(page);
              pageCollection.doc(index.toString()).set(page);
            });
          })["catch"](function (reason) {
            console.log(reason);
          })["finally"](function () {
            return console.log('Template ' + template.templateID + ' pushed');
          });
        }
      }, {
        key: "setTemplateTitle",
        value: function setTemplateTitle(newTitle) {
          if (this._template) {
            this._template.title = newTitle;
            console.log('[Builder] Template title is now ' + newTitle);
          }
        }
      }, {
        key: "templateChanged",
        value: function templateChanged() {
          this.updateSidebar();
        }
      }, {
        key: "updateSidebar",
        value: function updateSidebar() {
          var _this4 = this;

          if (this._template) {
            this.pageExpansions = [];
            this.pageHovers = [];
            this.sectionHovers = [[]];

            this._template.pages.forEach(function (page, index) {
              _this4.pageExpansions.push(false);

              _this4.pageHovers.push(false);

              var sections = [];
              page.sections.forEach(function () {
                sections.push(false);
              });

              _this4.sectionHovers.push(sections);
            });

            console.log(this.sectionHovers);
          }
        }
      }, {
        key: "addPage",
        value: function addPage() {
          this._template.pages.push({
            title: 'Untitled page',
            index: this._template.pages.length,
            sections: []
          });

          if (!this._template.pageStatuses) {
            this._template.pageStatuses = [];
          }

          this._template.pageStatuses.push('incomplete');

          this._template.pageCount++;
          console.log(this._template.pages.length);
        }
      }, {
        key: "setCurrentPage",
        value: function setCurrentPage(index) {
          this.currentPage = this._template.pages[index];
        }
      }, {
        key: "isDatagrid",
        value: function isDatagrid(section) {
          if (!section || section['type'] !== 'datagrid') {
            return false;
          } else return true;
        }
      }, {
        key: "isSimpleInput",
        value: function isSimpleInput(section) {
          if (!section || section['type'] !== 'simple-input') {
            return false;
          } else return true;
        }
      }, {
        key: "hasInputs",
        value: function hasInputs(section) {
          if (!section || section['type'] !== 'simple-input' || !section['inputs'] || section['inputs'].length < 1) {
            return false;
          } else return true;
        }
      }, {
        key: "getDatagrids",
        value: function getDatagrids(pageIndex) {
          var datagrids = [];

          if (this._template && this._template.pages) {
            this._template.pages[pageIndex].sections.forEach(function (section) {
              if (section['type'] === 'datagrid') {
                datagrids.push(section);
              }
            });
          }

          return datagrids;
        }
      }, {
        key: "addDatagrid",
        value: function addDatagrid(pageIndex) {
          if (this._template && this._template.pages) {
            var newSection = {
              title: 'Untitled',
              columns: [],
              value: [],
              type: 'datagrid',
              index: this._template.pages[pageIndex].sections.length
            };

            this._template.pages[pageIndex].sections.push(newSection);

            console.log('Datagrid added. Sections now: ' + this._template.pages[pageIndex].sections);
          }
        }
      }, {
        key: "getMagicText",
        value: function getMagicText() {
          if (!this._template) {
            return 'No template open';
          }

          return JSON.stringify(this._template, null, 4);
        }
      }, {
        key: "getSectionsByType",
        value: function getSectionsByType(pageIndex, type) {
          var sections = [];
          var page = this._template.pages[pageIndex];
          page.sections.forEach(function (section) {
            if (section['type'] === type) {
              sections.push(section);
            }
          });
          return sections;
        }
      }, {
        key: "addMetaSection",
        value: function addMetaSection(pageIndex) {
          if (this._template && this._template.pages) {
            var newSection = {
              title: 'Untitled',
              inputs: [],
              value: [],
              type: 'meta',
              index: this._template.pages[pageIndex].sections.length
            };

            this._template.pages[pageIndex].sections.push(newSection);

            this.metaSection = newSection;
            console.log('Meta added. Sections now: ' + this._template.pages[pageIndex].sections);
          }
        }
      }, {
        key: "getSimpleInputs",
        value: function getSimpleInputs(pageIndex) {
          var simpleInputs = [];

          if (this._template && this._template.pages) {
            this._template.pages[pageIndex].sections.forEach(function (section) {
              if (section['type'] === 'simple-input') {
                simpleInputs.push(section);
              }
            });
          }

          return simpleInputs;
        }
      }, {
        key: "addSimpleInput",
        value: function addSimpleInput(pageIndex) {
          if (this._template && this._template.pages) {
            var newSection = {
              title: 'Untitled',
              inputs: [],
              value: [],
              type: 'simple-input',
              index: this._template.pages[pageIndex].sections.length
            };

            this._template.pages[pageIndex].sections.push(newSection);

            console.log('SimpleInput added. Sections now: ' + this._template.pages[pageIndex].sections);
          }
        }
      }, {
        key: "sectionTypeChanged",
        value: function sectionTypeChanged(section) {
          if (section.type === 'simple-input') {
            if (!section['inputs']) {
              section['inputs'] = [];
            }
          } else if (section.type === 'datagrid') {
            if (!section['columns']) {
              section['columns'] = [];
            }
          } else {
            console.error('New section type unrecognized: ' + section.type);
          }
        }
      }, {
        key: "setSection",
        value: function setSection(section, data) {}
      }, {
        key: "cancelEditSection",
        value: function cancelEditSection() {
          this.editSectionOpened = false;
        }
      }, {
        key: "openSaveTemplate",
        value: function openSaveTemplate() {
          this.saveTemplateOpen = true;
        }
      }, {
        key: "cancelSaveTemplate",
        value: function cancelSaveTemplate() {
          this.saveTemplateOpen = false;
        }
      }, {
        key: "openEditSection",
        value: function openEditSection(section) {
          //deep copy the section
          this.sectionInEdit = JSON.parse(JSON.stringify(section));
          this.originalSectionIndex = this.sectionInEdit['index'];
          this.editSectionOpened = true;
        }
      }, {
        key: "openEditPage",
        value: function openEditPage(page) {
          this.editPageOpened = true;
          console.log('Opening page');
        }
      }, {
        key: "closeEditPage",
        value: function closeEditPage() {
          this.editPageOpened = false;
        }
      }, {
        key: "movePageUp",
        value: function movePageUp() {
          var currentIndex = this.currentPage.index;
          this.movePage(currentIndex, currentIndex - 1);
          this.resetPageIndices();
        }
      }, {
        key: "movePageDown",
        value: function movePageDown() {
          var currentIndex = this.currentPage.index;
          this.movePage(currentIndex, currentIndex + 1);
          this.resetPageIndices();
        }
      }, {
        key: "movePage",
        value: function movePage(fromIndex, toIndex) {
          console.log('Moving to ' + toIndex);

          if (toIndex >= 0 && toIndex < this._template.pages.length) {
            var arr = this._template.pages;
            arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
          } else console.error("Can't move page. Out of bounds.");
        }
      }, {
        key: "moveInArray",
        value: function moveInArray(fromIndex, toIndex, array) {
          console.log('Moving to ' + toIndex);

          if (toIndex >= 0 && toIndex < array.length) {
            array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
          } else console.error("Can't move page. Out of bounds.");
        }
      }, {
        key: "deleteInArray",
        value: function deleteInArray(index, array) {
          if (index >= 0 && index < array.length) {
            array.splice(index, 1);
          } else console.error("Can't delete element. Out of bounds.");
        }
      }, {
        key: "linkChanged",
        value: function linkChanged(input, event) {
          console.log('Link changed');

          if (input.link === 'title') {
            input.type = 'text';
          } else if (input.link === 'coverageDate') {
            input.type = 'month-select';
          } else if (input.link === 'additionalInfo') {
            input.type = 'textarea';
          } else if (input.link === 'subject') {
            input.type = 'text';
          } else if (input.link === 'tags') {
            input.type = 'tag-select';

            if (!input.tags) {
              input['tags'] = [];
            }
          }

          this.refreshValueFromFields();
        }
      }, {
        key: "resetPageIndices",
        value: function resetPageIndices() {
          this._template.pages.forEach(function (page, index) {
            page.index = index;
          });
        }
      }, {
        key: "resetSectionIndices",
        value: function resetSectionIndices() {
          this.currentPage.sections.forEach(function (section, index) {
            section.index = index;
          });
        }
      }, {
        key: "finishEditSection",
        value: function finishEditSection() {
          console.log(this.sectionInEdit);
          this.moveSection(this.originalSectionIndex, this.sectionInEdit['index']);
          this._template['pages'][this.currentPage.index]['sections'][this.sectionInEdit['index']] = this.sectionInEdit; //now reevaluate the 'index' section properties

          this.currentPage.sections.forEach(function (section, index) {
            section['index'] = index;
          }); //we reload the preview area after each successful push

          var refreshTemp = this.currentPage;
          this.editSectionOpened = false;
        }
      }, {
        key: "finishEditPage",
        value: function finishEditPage() {
          this.editPageOpened = false;
        }
      }, {
        key: "isDatatype",
        value: function isDatatype(colIndex, type) {
          if (this.sectionInEdit['columns'] && this.sectionInEdit['columns'][colIndex]['type'] === type) {
            return true;
          }

          if (this.sectionInEdit['inputs'] && this.sectionInEdit['inputs'][colIndex]['type'] === type) {
            return true;
          } else return false;
        }
      }, {
        key: "isEqual",
        value: function isEqual(a, b) {
          return a === b;
        }
      }, {
        key: "isSectionType",
        value: function isSectionType(section, type) {
          if (!section) {
            return false;
          }

          return section['type'] === type;
        }
      }, {
        key: "isPlainDt",
        value: function isPlainDt(colIndex) {
          var type = this.sectionInEdit['columns'][colIndex]['type'];

          if (!(type === 'tag-select' || type === 'date-select' || type === 'month-select')) {
            return true;
          } else return false;
        }
      }, {
        key: "toggleTag",
        value: function toggleTag(rowIndex, colIndex, toggled, tag) {
          var cellTags = this.sectionInEdit['value'][rowIndex]['row'][colIndex]['tags'];

          if (toggled === true) {
            //add the tag to the section value
            cellTags.push(tag);
          } else {
            //remove the tag
            cellTags.forEach(function (tagJ, index) {
              if (tag['label'] === tagJ['label']) {
                cellTags.splice(index, 1);
              }
            });
          }

          console.log(this.sectionInEdit);
        }
      }, {
        key: "renderDgCell",
        value: function renderDgCell(rowIndex, colIndex) {
          var cellVal = this.sectionInEdit['value'][rowIndex]['row'][colIndex];
          var type = this.sectionInEdit['columns'][colIndex]['type'];

          if (type === 'tag-select') {
            var emojis = '';
            cellVal['tags'].forEach(function (tagObj) {
              emojis = emojis + ' ' + tagObj['icon'];
            });
            return emojis;
          } else {
            return cellVal;
          }
        } // Array.prototype.move = function(from, to) {
        //   this.splice(to, 0, this.splice(from, 1)[0]);
        // };

      }, {
        key: "moveSection",
        value: function moveSection(fromIndex, toIndex) {
          console.log('Moving to ' + toIndex);

          if (toIndex >= 0 && toIndex < this.currentPage.sections.length) {
            var arr = this.currentPage.sections;
            arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
          } else console.error("Can't move section. Out of bounds.");
        }
      }, {
        key: "addColumn",
        value: function addColumn(event) {
          event.stopPropagation();

          if (!this.sectionInEdit['columns']) {
            this.sectionInEdit['columns'] = [{
              label: 'New column',
              type: 'text'
            }];
          } else {
            this.sectionInEdit['columns'].push({
              label: 'New column',
              type: 'text',
              tags: []
            }); //push an empty column to each row

            this.sectionInEdit['value'].forEach(function (row) {
              row['row'].push('');
            });
          }
        }
      }, {
        key: "clearPrefill",
        value: function clearPrefill() {
          if (this.sectionInEdit['value']) {
            this.sectionInEdit['value'] = [];
          }
        }
      }, {
        key: "deleteColumn",
        value: function deleteColumn(index) {
          //if prefill exists, clear it
          this.clearPrefill();
          console.log(this.sectionInEdit['columns']);
          this.sectionInEdit['columns'].splice(index, 1);
          console.log(this.sectionInEdit['columns']);
        }
      }, {
        key: "deleteInput",
        value: function deleteInput(index) {
          this.clearPrefill();
          this.sectionInEdit['inputs'].splice(index, 1);
        }
      }, {
        key: "deleteSection",
        value: function deleteSection(section) {
          if (confirm('Are you sure you want to delete "' + section['title'] + '"?')) {
            this.currentPage.sections.splice(section['index'], 1);
            this.resetSectionIndices();
            console.log('Section @ ' + section['index'] + ' deleted.');
            this.cancelEditSection();
          }
        }
      }, {
        key: "deletePage",
        value: function deletePage(pageIndex) {
          if (confirm('Delete page ' + (pageIndex + 1) + ' (' + this._template.pages[pageIndex].title + ')?')) {
            //close the current page if it's being deleted
            if (this.currentPage.index === pageIndex) {
              this.currentPage = null;
            }

            this._template.pages.splice(pageIndex, 1);

            this._template.pageCount--;
            this.closeEditPage();
          }
        }
      }, {
        key: "addInput",
        value: function addInput(event) {
          event.stopPropagation();
          var inputs = this.sectionInEdit['inputs'];

          if (!inputs) {
            inputs = [];
          }

          if (this.sectionInEdit['type'] === 'meta') {
            inputs.push({
              label: 'Untitled',
              type: 'month-select',
              link: 'coverageDate',
              tags: []
            });
          } else {
            inputs.push({
              label: 'Untitled',
              type: 'text',
              link: null,
              tags: []
            });
          }

          this.refreshValueFromFields();
        }
      }, {
        key: "hoverEnterPageSB",
        value: function hoverEnterPageSB(pageIndex) {
          this.pageHovers[pageIndex] = true;
        }
      }, {
        key: "hoverLeavePageSB",
        value: function hoverLeavePageSB(pageIndex) {
          this.pageHovers[pageIndex] = false;
        }
      }, {
        key: "hasTagSelect",
        value: function hasTagSelect(object) {
          var hastag = false;

          if (object['inputs']) {
            object['inputs'].forEach(function (input) {
              if (input['type'] === 'tag-select') {
                hastag = true;
              }
            });
          } else if (object['columns']) {
            object['columns'].forEach(function (col) {
              if (col['type'] === 'tag-select') {
                hastag = true;
              }
            });
          }

          return hastag;
        }
      }, {
        key: "hasTag",
        value: function hasTag(rowIndex, colIndex, tag) {
          var cellTags = this.sectionInEdit['value'][rowIndex]['row'][colIndex]['tags'];
          var cellIcons = [];
          cellTags.forEach(function (tag) {
            cellIcons.push(tag['icon']);
          });
          var searchIcon = tag['icon'];
          return cellIcons.includes(searchIcon);
        }
      }, {
        key: "hasPrefill",
        value: function hasPrefill(object) {
          if (object['value'] && object['value'].length > 0) {
            return true;
          } else return false;
        }
      }, {
        key: "addTag",
        value: function addTag(field, event) {
          event.stopPropagation();
          console.log(field);

          if (!field['tags']) {
            field['tags'] = [];
          }

          field['tags'].push({
            icon: '❓',
            label: 'Untitled'
          });
          console.log(field);
          this.refreshValueFromFields();
        }
      }, {
        key: "refreshValueFromFields",
        value: function refreshValueFromFields() {
          var value = [];

          if (this.sectionInEdit['inputs']) {
            this.sectionInEdit['inputs'].forEach(function (input) {
              if (input.type === 'tag-select') {
                value.push({
                  tags: []
                });
              } else value.push(null);
            });
            this.sectionInEdit['value'] = value;
            console.log('Value refreshed: ');
            console.log(this.sectionInEdit['value']);
          } else if (this.sectionInEdit['columns']) {
            this.sectionInEdit['columns'].forEach(function (col) {
              if (col.type === 'tag-select') {
                value.push({
                  tags: []
                });
              } else value.push(null);
            });
            this.sectionInEdit['value'] = [{
              row: value
            }];
            console.log('Value refreshed: ');
            console.log(this.sectionInEdit['value']);
          } else {
            console.error('Could not refresh value from fields: no columns or inputs were found.');
          }
        }
      }, {
        key: "typeChanged",
        value: function typeChanged(field, event) {
          this.refreshValueFromFields();
          console.log(this.sectionInEdit);
        }
      }, {
        key: "deleteTag",
        value: function deleteTag(input, index) {
          console.log(input.tags.splice(index, 1));
        }
      }, {
        key: "editTagEmoji",
        value: function editTagEmoji(field, tagIndex, eventData) {
          console.log(tagIndex, eventData.detail);
          field['tags'][tagIndex]['icon'] = eventData.detail['unicode'];
          console.log(this.sectionInEdit);
        }
      }, {
        key: "saveTemplate",
        value: function saveTemplate() {
          var _this5 = this;

          this.saveLoadingStatus = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].LOADING;

          this._TS.saveTemplate(this._template).then(function () {
            _this5.saveLoadingStatus = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].SUCCESS;
            setTimeout(function () {
              _this5.saveTemplateOpen = false;
            }, 500);

            _this5._TS.openTemplate(_this5._template.templateID);
          })["catch"](function (reason) {
            console.error('Save failed: ' + reason);
            alert('Save failed: ' + reason);
            _this5.saveLoadingStatus = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].ERROR;
          });
        }
      }, {
        key: "hasMetaSection",
        get: function get() {
          var _this6 = this;

          var hasMeta = false;

          this._template.pages.forEach(function (page) {
            page.sections.forEach(function (section) {
              if (section['type'] === 'meta') {
                _this6.metaSection = section;
                hasMeta = true;
              }
            });
          });

          return hasMeta;
        }
      }, {
        key: "templateValid",
        get: function get() {
          if (!this._template) {
            this.validMessage = 'Template is missing.';
            return false;
          } else if (!this._template.templateID || this._template.templateID.length < 1) {
            this.validMessage = 'Template title is missing.';
            return false;
          } else {
            this.validMessage = 'Ready to save.';
            return true;
          }
        }
      }, {
        key: "pagesEmpty",
        get: function get() {
          if (!this._template || !this._template.pages || this._template.pages.length < 1) {
            return true;
          } else return false;
        }
      }, {
        key: "tag",
        get: function get() {
          return 'Hello';
        }
      }]);

      return BuilderComponent;
    }();

    BuilderComponent.ɵfac = function BuilderComponent_Factory(t) {
      return new (t || BuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_constant_service__WEBPACK_IMPORTED_MODULE_7__["ConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_template_service__WEBPACK_IMPORTED_MODULE_8__["TemplateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    BuilderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BuilderComponent,
      selectors: [["app-builder"]],
      decls: 14,
      vars: 7,
      consts: [[1, "clr-row", "clr-justify-content-between", 2, "width", "100vw", "overflow", "hidden"], [1, "clr-col-3", "builder-sidebar", 2, "box-shadow", "0px 10px 18px #c7c6c6", "margin-left", "10px", "overflow-y", "auto"], [1, "clr-row", 2, "margin", "1rem 0 1rem 0"], [2, "margin-top", "3rem"], ["class", "templateTitle", "clrInput", "", "placeholder", "Untitled template", "name", "name", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "clr-row", 4, "ngIf"], ["class", "clr-col preview-area", 4, "ngIf"], [1, "btn", "btn-primary", "builder-save-button", 3, "disabled", "title", "click"], ["shape", "floppy"], [3, "clrModalOpen", "clrModalSize", "clrModalOpenChange", 4, "ngIf"], ["clrInput", "", "placeholder", "Untitled template", "name", "name", 1, "templateTitle", 3, "ngModel", "ngModelChange"], [1, "clr-row"], ["shape", "help-info"], [4, "ngIf"], [3, "clrExpanded", "clrExpandedChange", "click", 4, "ngFor", "ngForOf"], [2, "margin", "0"], ["clrTooltipTrigger", "", "shape", "help-info", "size", "16", "aria-label", "Uniq tooltip 3"], ["clrPosition", "bottom-right", "clrSize", "md", 4, "clrIfOpen"], ["title", "Add page", 1, "btn", "btn-sm", "btn-link", "btn-icon", 3, "click"], ["shape", "plus"], ["clrPosition", "bottom-right", "clrSize", "md"], [3, "clrExpanded", "clrExpandedChange", "click"], [1, "tree-text", "clr-row", 3, "dblclick"], ["shape", "file"], [1, "p4", 2, "margin", "0"], ["class", "btn btn-sm btn-link", "title", "Add Meta Section", 3, "click", 4, "ngIf"], ["style", "width: 100%;", 3, "dblclick", 4, "ngFor", "ngForOf"], ["title", "Add Datagrid", 1, "btn", "btn-sm", "btn-link", "btn-icon", 3, "click"], ["title", "Add Meta Section", 1, "btn", "btn-sm", "btn-link", 3, "click"], [2, "width", "100%", 3, "dblclick"], [1, "tree-text"], ["shape", "flag", "title", "Meta section", 1, "is-solid", "is-error"], ["shape", "table"], ["shape", "form"], [1, "clr-col", "preview-area"], [1, "clr-col-1", "clr-align-self-center", 2, "padding", "0"], [1, "clr-row", "clr-justify-content-end", "clr-align-items-end"], [1, "btn", "btn-link", "btn-icon", 2, "margin-right", "1rem", 3, "click"], ["shape", "pencil", 2, "color", "black"], [1, "clr-col-11", 2, "padding", "0"], ["class", "clr-row", 4, "ngFor", "ngForOf"], [3, "clrModalOpen", "clrModalSize", "clrModalOpenChange"], [1, "modal-title"], [1, "modal-body", 2, "overflow", "auto"], ["clrTabLink", "", "id", "link1"], ["id", "content1", 4, "clrIfActive"], ["clrTabLink", ""], [4, "clrIfActive"], [1, "modal-footer"], ["type", "button", 1, "btn", 3, "click"], [1, "btn", "btn-warning-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "clrModalOpen", "clrModalOpenChange"], [1, "clr-col-12"], ["clrInput", "", 3, "ngModel", "ngModelChange"], [1, "clr-row", 2, "padding-top", "1rem"], [1, "clr-control-label"], ["title", "Move up", 1, "btn", "btn-link", "btn-sm", 2, "margin", "0", 3, "disabled", "click"], ["shape", "angle", "dir", "up"], ["title", "Move down", 1, "btn", "btn-link", "btn-sm", 2, "margin", "0", 3, "disabled", "click"], ["shape", "angle", "dir", "down"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "clr-row", "clr-justify-content-end"], ["class", "grayout", 3, "interface", "sectionChanged", 4, "ngIf", "ngIfElse"], ["simpleInput", ""], [1, "grayout", 3, "interface", "sectionChanged"], ["id", "content1"], ["type", "text", 1, "clr-input", 3, "ngModel", "ngModelChange"], ["clrTooltipTrigger", "", "shape", "help-info", "size", "16"], ["clrPosition", "right", "clrSize", "lg", 4, "clrIfOpen"], [1, "clr-select", 3, "ngModel", "ngModelChange"], ["value", "datagrid"], ["value", "simple-input"], ["value", "meta"], ["clrPosition", "right", "clrSize", "lg"], ["title", "Add column", 1, "btn", "btn-sm", "btn-link", "btn-icon", 2, "margin", "0", 3, "click"], [4, "ngFor", "ngForOf"], ["clrTooltipTrigger", "", "shape", "warning-standard", "size", "16", 1, "is-warning", "is-solid"], ["clrPosition", "top-right", "clrSize", "md", 4, "clrIfOpen"], ["clrPosition", "top-right", "clrSize", "md"], [1, "btn", "btn-sm", "btn-link", "btn-icon", 3, "click"], ["shape", "trash"], ["type", "text", "placeholder", "Label", 1, "clr-input", 3, "ngModel", "ngModelChange"], ["value", "division-select"], ["value", "text"], ["value", "number"], ["value", "date-select"], ["value", "tag-select"], ["class", "clr-col", 4, "ngIf"], [1, "clr-col"], [1, "btn", "btn-link", "btn-sm", 3, "click"], [1, "btn", "btn-link", "btn-sm", "btn-icon", 2, "margin", "0", 3, "click"], ["shape", "trash", 1, "is-danger"], ["class", "tagAccordion", 4, "clrIfExpanded"], [1, "tagAccordion"], [3, "emoji-click"], ["title", "Add input", 1, "btn", "btn-sm", "btn-link", "btn-icon", 2, "margin", "0", 3, "click"], ["clrDropdownTrigger", ""], ["shape", "ellipsis-vertical", "size", "16"], [4, "clrIfOpen"], ["clrDropdownItem", "", 3, "click"], ["clrDropdownItem", "", 3, "click", 4, "ngIf"], ["clrSelect", "", 3, "ngModel", "ngModelChange"], ["value", "month-select"], ["value", "textarea"], ["value", "coverageDate"], ["value", "additionalInfo"], ["value", "title"], ["value", "subject"], ["value", "tags"], [3, "interface", 4, "ngIf"], [3, "interface"], [1, "modal-body", 2, "overflow-y", "auto"], [2, "overflow-y", "auto", "overflow-x", "hidden", "height", "75%"], [2, "max-height", "400px", "overflow-y", "auto"], ["type", "button", 1, "btn", "btn-success", 3, "clrLoading", "click"]],
      template: function BuilderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "clr-input-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BuilderComponent_input_4_Template, 1, 1, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "clr-control-helper");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Template title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BuilderComponent_span_7_Template, 4, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, BuilderComponent_div_8_Template, 4, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, BuilderComponent_div_9_Template, 54, 11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BuilderComponent_Template_button_click_10_listener() {
            return ctx.openSaveTemplate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "clr-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Save template ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BuilderComponent_clr_modal_13_Template, 24, 7, "clr-modal", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._template);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pagesEmpty);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._template);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.templateValid)("title", ctx.validMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.saveTemplateOpen);
        }
      },
      directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrInputContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrControlHelper"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrIconCustomTag"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrTree"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrTreeNode"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrTooltip"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrTooltipTrigger"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrIfOpen"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrTooltipContent"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrModal"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrModalBody"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrTabs"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ɵem"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrTab"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrTabLink"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ɵen"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrIfActive"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLabel"], _sections_datagrid_section_datagrid_section_component__WEBPACK_IMPORTED_MODULE_11__["DatagridSection"], _sections_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_12__["SimpleInputSection"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrTabContent"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrStackView"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrStackBlock"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrStackViewCustomTags"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrAccordion"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ɵfc"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrAccordionPanel"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ɵfb"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrAccordionTitle"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrIfExpanded"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrAccordionContent"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDropdown"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDropdownTrigger"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDropdownMenu"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDropdownItem"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrSelectContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrSelect"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingButton"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoading"]],
      styles: [".templateTitle[_ngcontent-%COMP%] {\r\n  font-size: 1rem !important;\r\n  width: 100% !important;\r\n}\r\n\r\n.builder-sidebar[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 61px);\r\n}\r\n\r\n.preview-area[_ngcontent-%COMP%] {\r\n  overflow-y: auto;\r\n  height: calc(100vh - 61px);\r\n}\r\n\r\n.builder-save-button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 1vw;\r\n  bottom: 1vh;\r\n}\r\n\r\n.tree-text[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\nemoji-picker[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-height: 15rem;\r\n  --emoji-size: 1.2rem;\r\n  --emoji-padding: 0.3rem;\r\n  --input-font-size: 0.67rem;\r\n  --input-line-height: 1rem;\r\n  --num-columns: 8;\r\n}\r\n\r\n.tagAccordion[_ngcontent-%COMP%] {\r\n  height: 20rem;\r\n}\r\n\r\n.clr-form-control[_ngcontent-%COMP%] {\r\n  margin: 0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idWlsZGVyL2J1aWxkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idWlsZGVyL2J1aWxkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZW1wbGF0ZVRpdGxlIHtcclxuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnVpbGRlci1zaWRlYmFyIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MXB4KTtcclxufVxyXG5cclxuLnByZXZpZXctYXJlYSB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MXB4KTtcclxufVxyXG5cclxuLmJ1aWxkZXItc2F2ZS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMXZ3O1xyXG4gIGJvdHRvbTogMXZoO1xyXG59XHJcblxyXG4udHJlZS10ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmVtb2ppLXBpY2tlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTVyZW07XHJcbiAgLS1lbW9qaS1zaXplOiAxLjJyZW07XHJcbiAgLS1lbW9qaS1wYWRkaW5nOiAwLjNyZW07XHJcbiAgLS1pbnB1dC1mb250LXNpemU6IDAuNjdyZW07XHJcbiAgLS1pbnB1dC1saW5lLWhlaWdodDogMXJlbTtcclxuICAtLW51bS1jb2x1bW5zOiA4O1xyXG59XHJcblxyXG4udGFnQWNjb3JkaW9uIHtcclxuICBoZWlnaHQ6IDIwcmVtO1xyXG59XHJcblxyXG4uY2xyLWZvcm0tY29udHJvbCB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BuilderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-builder',
          templateUrl: './builder.component.html',
          styleUrls: ['./builder.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
        }, {
          type: _services_constant_service__WEBPACK_IMPORTED_MODULE_7__["ConstantService"]
        }, {
          type: _services_template_service__WEBPACK_IMPORTED_MODULE_8__["TemplateService"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/controls/division-select/division-select.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/controls/division-select/division-select.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: DivisionSelectComponent */

  /***/
  function srcAppComponentsControlsDivisionSelectDivisionSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DivisionSelectComponent", function () {
      return DivisionSelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DivisionSelectComponent = /*#__PURE__*/function () {
      function DivisionSelectComponent() {
        _classCallCheck(this, DivisionSelectComponent);

        this.label = 'Divisions';
      }

      _createClass(DivisionSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DivisionSelectComponent;
    }();

    DivisionSelectComponent.ɵfac = function DivisionSelectComponent_Factory(t) {
      return new (t || DivisionSelectComponent)();
    };

    DivisionSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DivisionSelectComponent,
      selectors: [["app-division-select"]],
      inputs: {
        label: "label"
      },
      decls: 2,
      vars: 0,
      template: function DivisionSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "division-select works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbHMvZGl2aXNpb24tc2VsZWN0L2RpdmlzaW9uLXNlbGVjdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DivisionSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-division-select',
          templateUrl: './division-select.component.html',
          styleUrls: ['./division-select.component.css']
        }]
      }], function () {
        return [];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/controls/month-select/month-select.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/controls/month-select/month-select.component.ts ***!
    \****************************************************************************/

  /*! exports provided: MonthSelectComponent */

  /***/
  function srcAppComponentsControlsMonthSelectMonthSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthSelectComponent", function () {
      return MonthSelectComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MonthSelectComponent_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var month_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", month_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", month_r1, "");
      }
    }

    var MonthSelectComponent = /*#__PURE__*/function () {
      function MonthSelectComponent() {
        _classCallCheck(this, MonthSelectComponent);

        this.year = new Date().getFullYear();

        this.onChange = function (newDateString) {};

        this.onTouched = function () {};

        this._monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      }

      _createClass(MonthSelectComponent, [{
        key: "writeValue",
        value: function writeValue(date) {
          if (!date) {
            date = new Date().toISOString();
          }

          this.dateString = date;
          console.log(date);
          this.year = new Date(date).getFullYear();
          this.monthIndex = new Date(date).getMonth();
          console.log(this._monthNames[this.monthIndex]);
          this.formGroup.get('yearInput').setValue(this.year);
          this.formGroup.get('monthInput').setValue(this._monthNames[this.monthIndex]);
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          if (isDisabled) {
            this.formGroup.disable();
          } else this.formGroup.enable();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            monthInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            yearInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.year)
          });
          console.log('Initial is ', this.monthIndex);

          if (!this.monthIndex) {
            this.dateString;
          }

          this.formGroup.valueChanges.subscribe(function (newValue) {
            if (_this7.monthIndex !== _this7._monthNames.indexOf(newValue['monthInput'])) {
              console.log(_this7._monthNames.indexOf(newValue['monthInput']));

              var monthIndex = _this7._monthNames.indexOf(newValue['monthInput']);

              if (monthIndex > -1) _this7.monthIndex = _this7._monthNames.indexOf(newValue['monthInput']);
            }

            _this7.year = newValue['yearInput'];
            var date = new Date();
            date.setMonth(_this7.monthIndex);
            date.setFullYear(_this7.year);
            _this7.dateString = date.toISOString();
            _this7.value = _this7.dateString;
          });
        }
      }, {
        key: "value",
        set: function set(newDateString) {
          this.dateString = newDateString;
          this.onChange(newDateString);
          this.onTouched(newDateString);
        }
      }]);

      return MonthSelectComponent;
    }();

    MonthSelectComponent.ɵfac = function MonthSelectComponent_Factory(t) {
      return new (t || MonthSelectComponent)();
    };

    MonthSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MonthSelectComponent,
      selectors: [["month-select"]],
      inputs: {
        label: "label"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MonthSelectComponent;
        }),
        multi: true
      }])],
      decls: 10,
      vars: 3,
      consts: [[3, "formGroup"], ["for", "", 1, "p4"], [1, "clr-row", "clr-align-items-start", 2, "margin", "0"], ["clrSelect", "", "formControlName", "monthInput", 1, "clr-col"], [3, "value", 4, "ngFor", "ngForOf"], [1, "clr-col"], ["clrInput", "", "type", "number", "placeholder", "Year", "formControlName", "yearInput", 2, "margin-left", "0.5rem"], [3, "value"]],
      template: function MonthSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MonthSelectComponent_option_5_Template, 2, 2, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "clr-input-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "clr-control-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Does this year make sense?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._monthNames);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainer"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrInput"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrControlError"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbHMvbW9udGgtc2VsZWN0L21vbnRoLXNlbGVjdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MonthSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'month-select',
          templateUrl: './month-select.component.html',
          styleUrls: ['./month-select.component.css'],
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return MonthSelectComponent;
            }),
            multi: true
          }]
        }]
      }], function () {
        return [];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");

    function LoginComponent_form_2_h5_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Use your staff email to sign in, or create a new account now ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_2_clr_password_container_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-password-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "clr-control-helper");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Forgot your password? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_2_clr_password_container_11_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r8.showReset();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Reset it here.");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_2_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("className", ctx_r5.alertClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.alertMessage, " ");
      }
    }

    function LoginComponent_form_2_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_2_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r10.tryLogin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " LOG IN ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r6.loginGroup.invalid);
      }
    }

    function LoginComponent_form_2_a_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_2_a_14_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r12.showSignup();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Or create a new account");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Welcome to the");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Monthly Program Statistics tool ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, LoginComponent_form_2_h5_5_Template, 2, 0, "h5", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Staff email");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, LoginComponent_form_2_clr_password_container_11_Template, 8, 0, "clr-password-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, LoginComponent_form_2_div_12_Template, 5, 2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, LoginComponent_form_2_button_13_Template, 2, 1, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, LoginComponent_form_2_a_14_Template, 2, 0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.loginGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.resetVisible);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginVisible);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.alert);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginVisible);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginVisible);
      }
    }

    function LoginComponent_form_3_option_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branch_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", branch_r17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](branch_r17);
      }
    }

    function LoginComponent_form_3_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("className", ctx_r15.alertClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r15.alertMessage, " ");
      }
    }

    function LoginComponent_form_3_a_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_3_a_30_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r18.showLogin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Already have an account? Log in");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Welcome to the");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Monthly Program Statistics tool ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Use your staff email to sign in, or create a new account now ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Staff email");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "clr-select-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Which branch do you work for?");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "select", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, LoginComponent_form_3_option_16_Template, 2, 2, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "clr-control-helper");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Which branch do you work for?");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "clr-password-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "New password");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "clr-password-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Confirm password");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, LoginComponent_form_3_div_27_Template, 5, 2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_3_Template_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r20.createAccount();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Create account ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, LoginComponent_form_3_a_30_Template, 2, 0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.createAccountGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.getConstant("branches"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.alert);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.createAccountGroup.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.signupVisible);
      }
    }

    function LoginComponent_form_4_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("className", ctx_r22.alertClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r22.alertMessage, " ");
      }
    }

    function LoginComponent_form_4_button_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_4_button_14_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r24.sendResetEmail();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Send reset email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r23.forgotPasswordGroup.invalid);
      }
    }

    function LoginComponent_form_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Welcome to the");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Monthly Program Statistics tool ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Reset your password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Staff email");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, LoginComponent_form_4_div_13_Template, 5, 2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, LoginComponent_form_4_button_14_Template, 2, 1, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_4_Template_a_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r26.showLogin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Back to login");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.forgotPasswordGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.forgotPasswordGroup.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.resetVisible);
      }
    }

    function checkMatch(control) {
      var password1 = control.get('newPasswordInput').value;
      var password2 = control.get('confirmPasswordInput').value;

      if (password1 !== password2) {
        return {
          notMatching: true
        };
      } else return null;
    }

    function checkEmail(control) {
      var email = control.get('emailInput').value;
      var domain = email.split('@')[1];

      if (!(domain === 'ebrpl.com' || domain === 'brla.gov')) {
        return {
          outsideEmail: true
        };
      } else return null;
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(_Router, userv) {
        _classCallCheck(this, LoginComponent);

        this._Router = _Router;
        this.userv = userv;
        this.currentScreen = 'login';
        this.alert = null;
        this.alertMessage = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            emailInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            passwordInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.createAccountGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            emailInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            newPasswordInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            confirmPasswordInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            branchSelect: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Branch', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          }, [checkMatch, checkEmail]);
          this.forgotPasswordGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            emailInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "tryLogin",
        value: function tryLogin() {
          var _this8 = this;

          console.log('Logging in...');
          var email = this.loginGroup.get('emailInput').value;
          var password = this.loginGroup.get('passwordInput').value;
          console.log(this.loginGroup.get('emailInput').value);
          this.userv.logIn(email, password).then(function () {
            console.log('Login successful.');

            _this8._Router.navigate(['']);
          })["catch"](function (error) {
            console.log(error);

            _this8.showErrorAlert('Invalid username or password. Does this account exist?');
          });
        }
      }, {
        key: "createAccount",
        value: function createAccount() {
          var _this9 = this;

          var email = this.createAccountGroup.get('emailInput').value;
          var newPassword = this.createAccountGroup.get('newPasswordInput').value;
          var confirmPassword = this.createAccountGroup.get('confirmPasswordInput').value;
          var branch = this.createAccountGroup.get('branchSelect').value;

          if (!this.createAccountGroup.errors) {
            console.log('Creating account');
            this.hideAlert(); //pass a fresh User to createAccount, along with new password

            this.userv.createAccount({
              email: email,
              emailVerified: false,
              branch: branch,
              role: 'user'
            }, newPassword).then(function () {
              Object(firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"])().currentUser.sendEmailVerification();

              _this9.showSuccessAlert('Account successfully created. Please check your email to finish up. Redirecting...');

              setTimeout(function () {
                _this9._Router.navigate(['']);
              }, 5000);
            })["catch"](function (error) {
              console.error('ERROR' + error);

              _this9.showErrorAlert(error);

              _this9.createAccountGroup.setErrors({
                firebase: true
              });
            });
          } else if (this.createAccountGroup.getError('notMatching')) {
            console.error('Passwords do not match');
            this.showErrorAlert('Passwords do not match.');
          } else if (this.createAccountGroup.getError('outsideEmail')) {
            console.error('Employee email required.');
            this.showErrorAlert('Please use your employee email.');
          } else {
            console.error(this.createAccountGroup.errors);
          }
        }
      }, {
        key: "sendResetEmail",
        value: function sendResetEmail() {
          Object(firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"])().sendPasswordResetEmail(this.forgotPasswordGroup.get('emailInput').value)["catch"](function (error) {
            console.log(error.code);
          });
          this.showSuccessAlert('If that account exists, a reset email has been sent.');
          this.showLogin();
        }
      }, {
        key: "showErrorAlert",
        value: function showErrorAlert(error) {
          this.alert = 'danger';
          this.alertMessage = error;
        }
      }, {
        key: "showSuccessAlert",
        value: function showSuccessAlert(message) {
          this.alert = 'success';
          this.alertMessage = message;
        }
      }, {
        key: "hideAlert",
        value: function hideAlert() {
          this.alert = null;
          this.alertMessage = '';
        }
      }, {
        key: "showSignup",
        value: function showSignup() {
          this.currentScreen = 'signup';
          this.hideAlert();
        }
      }, {
        key: "showLogin",
        value: function showLogin() {
          this.currentScreen = 'login'; //this.hideAlert();
        }
      }, {
        key: "showReset",
        value: function showReset() {
          this.currentScreen = 'reset';
          this.hideAlert();
        }
      }, {
        key: "getConstant",
        value: function getConstant(constantName) {
          return ['Main Library', 'Baker Branch', 'Bluebonnet Regional Branch', 'Carver Branch', 'Central Branch', 'Delmont Gardens Branch', 'Eden Park Branch', 'Fairwood Branch', 'Greenwell Springs Rd. Regional Branch', 'Jones Creek Regional Branch', 'Pride-Chaneyville Branch', 'River Center Branch', 'Scotlandville Branch', 'Zachary Branch'];
        }
      }, {
        key: "alertClass",
        get: function get() {
          if (this.alert === 'danger') {
            return 'alert alert-danger';
          } else if (this.alert === 'warning') {
            return 'alert alert-warning';
          } else if (this.alert === 'info') {
            return 'alert alert-info';
          } else if (this.alert === 'success') {
            return 'alert alert-success';
          } else return null;
        }
      }, {
        key: "loginVisible",
        get: function get() {
          return this.currentScreen === 'login';
        }
      }, {
        key: "signupVisible",
        get: function get() {
          return this.currentScreen === 'signup';
        }
      }, {
        key: "resetVisible",
        get: function get() {
          return this.currentScreen === 'reset';
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 5,
      vars: 3,
      consts: [[1, "clr-row", "clr-justify-content-center", 2, "width", "95vw"], [1, "clr-col", "clr-offset-md-4", "login-wrapper"], ["class", "login", 3, "formGroup", 4, "ngIf"], [1, "login", 3, "formGroup"], [1, "title"], [1, "welcome"], ["class", "hint", 4, "ngIf"], [1, "login-group"], [1, "clr-sr-only"], ["type", "email", "formControlName", "emailInput", "clrInput", "", "placeholder", "Staff email"], [4, "ngIf"], ["role", "alert", 3, "className", 4, "ngIf"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["class", "signup", 3, "click", 4, "ngIf"], [1, "hint"], ["type", "password", "formControlName", "passwordInput", "clrPassword", "", "placeholder", "Password", "autocomplete", "current-password"], [3, "click"], ["role", "alert", 3, "className"], [1, "alert-items"], [1, "alert-item", "static"], [1, "alert-text"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "signup", 3, "click"], ["clrSelect", "", "name", "type", "formControlName", "branchSelect"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "password", "formControlName", "newPasswordInput", "clrPassword", "", "placeholder", "New password", "autocomplete", "new-password"], ["type", "password", "formControlName", "confirmPasswordInput", "clrPassword", "", "placeholder", "Confirm password"], [3, "value"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_form_2_Template, 15, 6, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, LoginComponent_form_3_Template, 31, 5, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LoginComponent_form_4_Template, 17, 3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signupVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.resetVisible);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrInput"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrPasswordContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrPassword"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrControlHelper"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAlertText"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrSelectContainer"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/report.service */
    "./src/app/services/report.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");

    function NavbarComponent_clr_alert_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-alert", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-alert-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " It looks like you aren't connected to the internet. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrAlertType", "warning")("clrAlertAppLevel", true)("clrAlertClosable", false);
      }
    }

    function NavbarComponent_img_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
      }
    }

    function NavbarComponent_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_div_8_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r5.report.templateID, ": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r5.report.coverageDate, "MMMM \u2019yy"), " ");
      }
    }

    function NavbarComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_div_8_p_1_Template, 3, 5, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.report.coverageDate);
      }
    }

    function NavbarComponent_div_9_clr_dropdown_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.email);
      }
    }

    var _c0 = function _c0() {
      return ["preferences"];
    };

    function NavbarComponent_div_9_clr_dropdown_1_clr_dropdown_menu_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dropdown-menu", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Preferences");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_9_clr_dropdown_1_clr_dropdown_menu_4_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r13.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function NavbarComponent_div_9_clr_dropdown_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dropdown");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "clr-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarComponent_div_9_clr_dropdown_1_span_3_Template, 2, 1, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_div_9_clr_dropdown_1_clr_dropdown_menu_4_Template, 5, 2, "clr-dropdown-menu", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("shape", ctx_r6.userShape);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.vw > 769);
      }
    }

    function NavbarComponent_div_9_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_9_ng_template_3_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LOGIN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_div_9_clr_dropdown_1_Template, 5, 2, "clr-dropdown", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarComponent_div_9_ng_template_3_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r4.auth.user))("ngIfElse", _r7);
      }
    }

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(_ReportService, auth, _Router, userv) {
        _classCallCheck(this, NavbarComponent);

        this._ReportService = _ReportService;
        this.auth = auth;
        this._Router = _Router;
        this.userv = userv;
        this.vw = 0;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this._ReportService.getReportObservable().subscribe(function (observer) {
            _this10.report = observer;
          });

          this.vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

          window.onresize = function (event) {
            _this10.vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
          };

          onoffline = function onoffline() {
            _this10.offline = !navigator.onLine;
          };

          ononline = function ononline() {
            _this10.offline = !navigator.onLine;
          };
        }
      }, {
        key: "login",
        value: function login() {
          this._Router.navigate(['login']);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.userv.logOut();

          this._Router.navigate(['login']);
        }
      }, {
        key: "userShape",
        get: function get() {
          if (this.userv.getUserSnapshot() && this.userv.getUserSnapshot().role === 'admin') {
            return 'administrator';
          } else return 'user';
        }
      }, {
        key: "isAdmin",
        get: function get() {
          var user = this.userv.getUserSnapshot();

          if (user && user.role === 'admin') {
            return true;
          } else return false;
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 10,
      vars: 5,
      consts: [[3, "clrAlertType", "clrAlertAppLevel", "clrAlertClosable", 4, "ngIf"], [1, "header", "header-7"], [1, "branding", "app-title", 2, "z-index", "1000"], ["routerLink", "", 1, "nav-link"], ["src", "assets/logo.svg", 4, "ngIf"], [1, "title"], ["class", "badge badge-light-blue", 4, "ngIf"], ["class", "reportTitle", 4, "ngIf"], ["class", "header-actions navbar-links", 4, "ngIf"], [3, "clrAlertType", "clrAlertAppLevel", "clrAlertClosable"], [1, "alert-text"], ["src", "assets/logo.svg"], [1, "badge", "badge-light-blue"], [1, "reportTitle"], ["class", "titleText", 4, "ngIf"], [1, "titleText"], [1, "header-actions", "navbar-links"], [4, "ngIf", "ngIfElse"], ["logIn", ""], ["clrDropdownTrigger", "", "aria-label", "open user profile", 1, "nav-text"], [4, "ngIf"], ["clrPosition", "bottom-right", 4, "clrIfOpen"], ["clrPosition", "bottom-right"], ["clrDropdownItem", "", 3, "routerLink"], ["clrDropdownItem", "", 3, "click"], [1, "nav-link", "nav-text", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarComponent_clr_alert_0_Template, 4, 3, "clr-alert", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_img_4_Template, 1, 0, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Monthly Program Statistics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_span_7_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_div_8_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarComponent_div_9_Template, 5, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.offline);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vw > 600);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.report);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.offline);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAlert"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAlertItem"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAlertText"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDropdown"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDropdownTrigger"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIfOpen"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDropdownMenu"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDropdownItem"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["img[_ngcontent-%COMP%] {\r\n  max-height: 2rem;\r\n  padding-right: 0.5rem;\r\n}\r\n.reportTitle[_ngcontent-%COMP%] {\r\n  max-width: 30vw;\r\n  height: 60px;\r\n  left: 35vw;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.app-title[_ngcontent-%COMP%] {\r\n  min-width: 40vw !important;\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.navbar-links[_ngcontent-%COMP%] {\r\n  max-width: 30vw !important;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n.titleText[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  text-align: center;\r\n  color: gray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0FBQ1Q7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7QUFDVjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LWhlaWdodDogMnJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuLnJlcG9ydFRpdGxlIHtcclxuICBtYXgtd2lkdGg6IDMwdnc7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGxlZnQ6IDM1dnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYXBwLXRpdGxlIHtcclxuICBtaW4td2lkdGg6IDQwdncgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlua3Mge1xyXG4gIG1heC13aWR0aDogMzB2dyAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi50aXRsZVRleHQge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/preferences/preferences.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/preferences/preferences.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PreferencesComponent */

  /***/
  function srcAppComponentsPreferencesPreferencesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesComponent", function () {
      return PreferencesComponent;
    });
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/constant.service */
    "./src/app/services/constant.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PreferencesComponent_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branch_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", branch_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](branch_r1);
      }
    }

    var PreferencesComponent = /*#__PURE__*/function () {
      function PreferencesComponent(_ConstantService, _UserService, _Router) {
        _classCallCheck(this, PreferencesComponent);

        this._ConstantService = _ConstantService;
        this._UserService = _UserService;
        this._Router = _Router;
        this.saveBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].DEFAULT;
      }

      _createClass(PreferencesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            branchSelect: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
          this.constants = this._ConstantService.constants;

          this._UserService.getUserObservable().subscribe(function (user) {
            if (user) _this11.formGroup.get('branchSelect').setValue(user.branch);
          });
        }
      }, {
        key: "saveChanges",
        value: function saveChanges() {
          var _this12 = this;

          this.saveBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].LOADING;

          this._UserService.setBranch(this.formGroup.get('branchSelect').value).then(function () {
            _this12.saveBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].SUCCESS;
            console.log('[Preferences Component] Changes saved. Redirecting to home.');

            _this12._Router.navigate(['']);
          })["catch"](function () {
            _this12.saveBtnState = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].ERROR;
          });
        }
      }]);

      return PreferencesComponent;
    }();

    PreferencesComponent.ɵfac = function PreferencesComponent_Factory(t) {
      return new (t || PreferencesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_constant_service__WEBPACK_IMPORTED_MODULE_3__["ConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    PreferencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PreferencesComponent,
      selectors: [["app-preferences"]],
      decls: 20,
      vars: 5,
      consts: [[1, "clr-row", "clr-justify-content-center", 2, "width", "100vw", "margin-left", "1rem"], [1, "clr-col", "clr-col-md-6", "clr-col-xl-6"], [1, "clr-row", "clr-justify-content-between", "clr-align-items-end"], [1, "clr-row"], ["clrForm", "", 3, "formGroup"], [1, "clr-sr-only"], ["clrSelect", "", "name", "type", "formControlName", "branchSelect"], [3, "value", 4, "ngFor", "ngForOf"], [1, "clr-row", 2, "margin-top", "3rem"], [1, "btn", "btn-primary", 3, "clrLoading", "click"], [3, "value"]],
      template: function PreferencesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "User preferences");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Change your branch affiliation");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "clr-select-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Which branch do you work for?");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PreferencesComponent_option_13_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "clr-control-helper");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Which branch do you work for?");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreferencesComponent_Template_button_click_18_listener() {
            return ctx.saveChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Save changes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tmp_1_0 = null;
          var currVal_1 = (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 3, ctx.constants)) == null ? null : tmp_1_0.branches;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", currVal_1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("clrLoading", ctx.saveBtnState);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrSelectContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrControlHelper"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingButton"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoading"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PreferencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-preferences',
          templateUrl: './preferences.component.html',
          styleUrls: ['./preferences.component.css']
        }]
      }], function () {
        return [{
          type: _services_constant_service__WEBPACK_IMPORTED_MODULE_3__["ConstantService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/report/report.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/report/report.component.ts ***!
    \*******************************************************/

  /*! exports provided: ReportComponent */

  /***/
  function srcAppComponentsReportReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
      return ReportComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/report.service */
    "./src/app/services/report.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sections_datagrid_section_datagrid_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../sections/datagrid-section/datagrid-section.component */
    "./src/app/components/sections/datagrid-section/datagrid-section.component.ts");
    /* harmony import */


    var _sections_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sections/simple-input/simple-input.component */
    "./src/app/components/sections/simple-input/simple-input.component.ts");

    function ReportComponent_clr_alert_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "clr-alert", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "clr-alert-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " This report has been marked complete. You can still edit it, but consider creating a duplicate instead. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "clr-dropdown");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "clr-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "clr-dropdown-menu", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportComponent_clr_alert_3_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.duplicateCurrentReport();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Duplicate this report");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrAlertClosable", false)("clrAlertType", "warning")("clrAlertIcon", "warning-standard");
      }
    }

    function ReportComponent_div_8_datagrid_section_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datagrid-section", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sectionChanged", function ReportComponent_div_8_datagrid_section_1_Template_datagrid_section_sectionChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var section_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.setSection(section_r10, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interface", section_r10);
      }
    }

    function ReportComponent_div_8_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "simple-input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sectionChanged", function ReportComponent_div_8_ng_template_2_Template_simple_input_sectionChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var section_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r18.setSection(section_r10, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interface", section_r10);
      }
    }

    function ReportComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportComponent_div_8_datagrid_section_1_Template, 1, 1, "datagrid-section", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReportComponent_div_8_ng_template_2_Template, 1, 1, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r10 = ctx.$implicit;

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isDatagrid(section_r10))("ngIfElse", _r12);
      }
    }

    function ReportComponent_clr_alert_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "clr-alert", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "clr-alert-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Heads up: not all pages have been marked as complete. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrAlertType", "warning")("clrAlertClosable", false);
      }
    }

    function ReportComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "clr-icon", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Page saved");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ReportComponent_button_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportComponent_button_32_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r22.savePage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "clr-icon", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btn-primary", ctx_r4.saveStale)("btn-link", !ctx_r4.saveStale);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrLoading", ctx_r4.saveButtonState);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-alert", ctx_r4.saveStale);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.saveTimeElapsed, " ");
      }
    }

    function ReportComponent_clr_button_group_35_clr_button_1_clr_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "clr-icon", 50);
      }
    }

    function ReportComponent_clr_button_group_35_clr_button_1_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r26, " ");
      }
    }

    function ReportComponent_clr_button_group_35_clr_button_1_clr_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "clr-icon", 51);
      }
    }

    function ReportComponent_clr_button_group_35_clr_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "clr-button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportComponent_clr_button_group_35_clr_button_1_Template_clr_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

          var i_r26 = ctx.index;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r32.goToPage(i_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportComponent_clr_button_group_35_clr_button_1_clr_icon_1_Template, 1, 0, "clr-icon", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReportComponent_clr_button_group_35_clr_button_1_ng_template_2_Template, 1, 1, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ReportComponent_clr_button_group_35_clr_button_1_clr_icon_4_Template, 1, 0, "clr-icon", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r26 = ctx.index;

        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r24.getPageButtonClass(i_r26));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r26 < 1)("ngIfElse", _r28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r24.pageComplete(i_r26));
      }
    }

    function ReportComponent_clr_button_group_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "clr-button-group");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportComponent_clr_button_group_35_clr_button_1_Template, 5, 5, "clr-button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var tmp_0_0 = null;
        var currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r5.report$)) == null ? null : tmp_0_0.pageStatuses;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", currVal_0);
      }
    }

    function ReportComponent_button_40_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportComponent_button_40_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r34.confirmSubmitReport();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Mark complete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "clr-icon", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btn-success", ctx_r6.reportFullyComplete);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrLoading", ctx_r6.submitButtonState);
      }
    }

    function ReportComponent_div_41_label_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Complete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ReportComponent_div_41_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Incomplete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ReportComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "clr-toggle-container", null, 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Mark this page:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "clr-toggle-wrapper");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ReportComponent_div_41_label_7_Template, 2, 0, "label", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ReportComponent_div_41_ng_template_8_Template, 2, 0, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r7.markCompleteControl);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.pageComplete(ctx_r7.currentPageIndex))("ngIfElse", _r38);
      }
    }

    var ReportComponent = /*#__PURE__*/function () {
      function ReportComponent(activeRoute, _Router, _ReportService, _UserService) {
        _classCallCheck(this, ReportComponent);

        this.activeRoute = activeRoute;
        this._Router = _Router;
        this._ReportService = _ReportService;
        this._UserService = _UserService;
        this.datagrids = [];
        this.simpleInputs = [];
        this.markCompleteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.submitButtonState = _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLoadingState"].DEFAULT;
        this.saveButtonState = _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLoadingState"].DEFAULT;
        this.saveSuccessful = false;
        this.submitConfirmationVisible = false;
      }

      _createClass(ReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.report$ = this._ReportService.getReportObservable();
          this.page$ = this._ReportService.getPageObservable();
          this.activeRoute.paramMap.subscribe(function (params) {
            _this13.urlPageNumber = +params.get('page-number');

            if (_this13.urlPageNumber !== null && _this13.urlPageNumber !== undefined && _this13.urlPageNumber !== _this13.currentPageIndex && _this13._ReportService.report) {
              _this13._ReportService.openPage(_this13.urlPageNumber);
            }
          });
          this.markCompleteControl.valueChanges.subscribe(function (newState) {
            if (newState === true) {
              _this13._ReportService.setPageStatus(_this13.currentPageIndex, 'complete');
            } else {
              _this13._ReportService.setPageStatus(_this13.currentPageIndex, 'incomplete');
            }

            _this13._ReportService.saveReportOnline();
          });
          this.report$.subscribe(function (report) {
            if (!report) {
              var reportID = _this13.activeRoute.snapshot.paramMap.get('report-id');

              var pageNumber = _this13.activeRoute.snapshot.paramMap.get('page-number');

              _this13._ReportService.openReport(reportID, +pageNumber);
            }
          }); //if requested page isn't open, open it

          this.page$.subscribe(function (page) {
            if (page) {
              _this13.datagrids = [];
              _this13.simpleInputs = []; //process new sections

              page.sections.forEach(function (section) {
                if (section['type'] == 'datagrid') {
                  _this13.datagrids.push(section);
                } else if (section['type'] === 'simple-input' || section['type'] === 'meta') {
                  _this13.simpleInputs.push(section);
                }
              });

              _this13.markCompleteControl.setValue(_this13._ReportService.report.pageStatuses[page.index] === 'complete' ? true : false);
            }
          });
        }
      }, {
        key: "getPageButtonClass",
        value: function getPageButtonClass(pageIndex) {
          if (pageIndex == this.currentPageIndex) return 'btn btn-primary';else return 'btn';
        }
      }, {
        key: "pageComplete",
        value: function pageComplete(pageIndex) {
          if (!this._ReportService.report) return false;
          return this._ReportService.report.pageStatuses[pageIndex] === 'complete' ? true : false;
        }
      }, {
        key: "isDatagrid",
        value: function isDatagrid(section) {
          if (!section || section['type'] !== 'datagrid') {
            return false;
          } else return true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._ReportService.closeReport();
        }
      }, {
        key: "savePage",
        value: function savePage() {
          var _this14 = this;

          this.saveButtonState = _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLoadingState"].LOADING; //save report properties if a meta section is present

          this._ReportService.page.sections.forEach(function (section) {
            if (section['type'] === 'meta') {
              _this14._ReportService.saveReportOnline();
            }
          });

          this._ReportService.savePageOnline().then(function () {
            _this14.saveButtonState = _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLoadingState"].DEFAULT;
            _this14.saveSuccessful = true;
            _this14.saveTime = Date.now();
            setTimeout(function () {
              return _this14.saveSuccessful = false;
            }, 2500);
          })["catch"](function () {
            _this14.saveButtonState = _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLoadingState"].ERROR;
          });
        }
      }, {
        key: "goToPage",
        value: function goToPage(pageNumber) {
          //no point saving a page if it hasn't been edited
          if (this.editable) this.savePage();

          this._Router.navigate(['report', this._ReportService.report.id, pageNumber]);
        }
      }, {
        key: "confirmSubmitReport",
        value: function confirmSubmitReport() {
          this.submitConfirmationVisible = true;
        }
      }, {
        key: "cancelSubmitReport",
        value: function cancelSubmitReport() {
          this.submitConfirmationVisible = false;
        }
      }, {
        key: "submitReport",
        value: function submitReport() {
          var _this15 = this;

          console.log('[R Comp] Submitting report...');
          this.submitButtonState = _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLoadingState"].LOADING;

          this._ReportService.submitReport().then(function () {
            _this15.submitButtonState = _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLoadingState"].SUCCESS;

            _this15._Router.navigate(['']);
          });
        }
      }, {
        key: "setSection",
        value: function setSection(section, eventData) {
          this._ReportService.setSectionValue(this.currentPageIndex, section.order, eventData); //sections interact with Report properties directly,
          //but it's up to the ReportComponent to save the changes
          //to the database afterwards.


          if (section['meta']) {
            this._ReportService.saveReportOnline();
          }
        }
      }, {
        key: "duplicateCurrentReport",
        value: function duplicateCurrentReport() {
          var _this16 = this;

          var report = this._ReportService.report;
          console.log(report.id);

          this._ReportService.duplicateReport(report.id).then(function (newID) {
            alert('Report successfully duplicated. Moving to new report...');

            _this16._ReportService.openReport(newID).then(function () {
              _this16._Router.navigate(['report', newID, 0]);
            })["catch"](function (reason) {
              console.error('Error opening new report with ID ' + newID + ': ' + reason);
            });
          }, function () {
            console.error('Error duplicating report ' + report.id);
          });
        }
      }, {
        key: "reportFullyComplete",
        get: function get() {
          var fullyComplete = true;

          if (this._ReportService.report) {
            this._ReportService.report.pageStatuses.forEach(function (elem) {
              //if one page is incomplete, the whole report is too!
              if (elem !== 'complete') {
                fullyComplete = false;
              }
            });
          }

          return fullyComplete;
        }
      }, {
        key: "currentPageIndex",
        get: function get() {
          if (this._ReportService.page) {
            return this._ReportService.page.index;
          } else return null;
        }
      }, {
        key: "currentSections",
        get: function get() {
          return this._ReportService.page.sections;
        } //return minutes since last save

      }, {
        key: "saveTimeElapsed",
        get: function get() {
          if (!this.saveTime) {
            return null;
          } else {
            return ((Date.now() - this.saveTime) / (1000 * 60)).toFixed() + ' min since save';
          }
        }
      }, {
        key: "saveStale",
        get: function get() {
          //if unsaved or ten minutes have passed
          if (!this.saveTime || (Date.now() - this.saveTime) / (1000 * 60) > 10) {
            return true;
          } else return false;
        }
      }, {
        key: "editable",
        get: function get() {
          //if the report's been submitted and the user isn't an admin,
          //make the report uneditable
          if (this._ReportService.report && this._UserService.getUserSnapshot().role !== 'admin' && this._ReportService.report.completionStatus === 'complete') {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "adminSubmitted",
        get: function get() {
          if (this._UserService.getUserSnapshot() && this._UserService.getUserSnapshot().role === 'admin' && this._ReportService.report && this._ReportService.report.completionStatus === 'complete') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "submitted",
        get: function get() {
          if (this._ReportService.report && this._ReportService.report.completionStatus === 'complete') {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return ReportComponent;
    }();

    ReportComponent.ɵfac = function ReportComponent_Factory(t) {
      return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
    };

    ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ReportComponent,
      selectors: [["app-report"]],
      decls: 42,
      vars: 21,
      consts: [[1, "topDiv", "clr-col"], [1, "clr-row", "clr-justify-content-center"], [1, "clr-col", "clr-col-lg-10", "clr-col-xl-8", "sectionCol"], [3, "clrAlertClosable", "clrAlertType", "clrAlertIcon", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "clr-col-md-6", "clr-offset-md-3", "clr-align-self-end"], ["shape", "help-info"], [2, "height", "48px"], [3, "clrModalOpen", "clrModalOpenChange"], [1, "modal-title"], [1, "modal-body"], [3, "clrAlertType", "clrAlertClosable", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "clrLoading", "click"], ["class", "alert alert-success", "role", "alert", "style", "\n      position: fixed;\n      bottom: 54px;\n      left: 6px;\n      width: 10rem;\n      z-index: 1000;\n    ", 4, "ngIf"], [1, "stickybar", "clr-row"], [1, "clr-col-8", "clr-col-md-10"], [1, "clr-row", "clr-justify-content-center", "clr-align-items-center"], ["type", "button", "class", "btn", "aria-label", "save page", "title", "Save current page", 3, "btn-primary", "btn-link", "clrLoading", "click", 4, "ngIf"], ["type", "button", "aria-label", "previous page", 1, "btn", "btn-icon", "btn-link", 3, "disabled", "click"], ["shape", "angle", "dir", "left"], [4, "ngIf"], ["type", "button", "aria-label", "next page", 1, "btn", "btn-icon", "btn-link", 3, "disabled", "click"], ["shape", "angle", "dir", "right"], ["type", "button", "class", "btn", "aria-label", "next page", 3, "btn-success", "clrLoading", "click", 4, "ngIf"], ["class", "clr-col-4 clr-col-md-2", 4, "ngIf"], [3, "clrAlertClosable", "clrAlertType", "clrAlertIcon"], [1, "alert-text"], [1, "alert-actions"], ["clrDropdownTrigger", "", 1, "dropdown-toggle"], ["shape", "caret down"], ["clrPosition", "bottom-right"], ["clrDropdownItem", "", 1, "dropdown-item", 3, "click"], [3, "interface", "sectionChanged", 4, "ngIf", "ngIfElse"], ["simpleInput", ""], [3, "interface", "sectionChanged"], [3, "clrAlertType", "clrAlertClosable"], ["role", "alert", 1, "alert", "alert-success", 2, "position", "fixed", "bottom", "54px", "left", "6px", "width", "10rem", "z-index", "1000"], [1, "alert-items"], [1, "alert-item", "static"], [1, "alert-icon-wrapper"], ["shape", "check-circle", 1, "alert-icon"], ["type", "button", "aria-label", "save page", "title", "Save current page", 1, "btn", 3, "clrLoading", "click"], ["shape", "floppy"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["shape", "home", 4, "ngIf", "ngIfElse"], ["showPageNumber", ""], ["shape", "check", "title", "Marked complete", 4, "ngIf"], ["shape", "home"], ["shape", "check", "title", "Marked complete"], ["type", "button", "aria-label", "next page", 1, "btn", 3, "clrLoading", "click"], ["shape", "step-forward-2"], [1, "clr-col-4", "clr-col-md-2"], ["markCompleteToggle", ""], [1, "p6", 2, "margin-top", "0.3rem"], ["type", "checkbox", "clrToggle", "", "value", "option1", "name", "options", 3, "formControl"], [4, "ngIf", "ngIfElse"], ["incompleteLabel", ""]],
      template: function ReportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ReportComponent_clr_alert_3_Template, 12, 3, "clr-alert", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ReportComponent_div_8_Template, 4, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "clr-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Try the buttons below to continue the report.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "clr-modal", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clrModalOpenChange", function ReportComponent_Template_clr_modal_clrModalOpenChange_14_listener($event) {
            return ctx.submitConfirmationVisible = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "All finished?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ReportComponent_clr_alert_18_Template, 4, 2, "clr-alert", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Marking a report as complete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " indicates that all data inside should be considered final. You can still edit the report after it's been marked complete. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportComponent_Template_button_click_24_listener() {
            return ctx.cancelSubmitReport();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportComponent_Template_button_click_26_listener() {
            return ctx.submitReport();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Mark as complete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ReportComponent_div_28_Template, 7, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ReportComponent_button_32_Template, 3, 8, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportComponent_Template_button_click_33_listener() {
            return ctx.goToPage(ctx.currentPageIndex - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "clr-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ReportComponent_clr_button_group_35_Template, 3, 3, "clr-button-group", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportComponent_Template_button_click_37_listener() {
            return ctx.goToPage(ctx.currentPageIndex + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "clr-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ReportComponent_button_40_Template, 3, 3, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ReportComponent_div_41_Template, 10, 3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tmp_2_0 = null;
          var tmp_10_0 = null;
          var currVal_10 = (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 17, ctx.report$)) == null ? null : tmp_10_0.id;
          var tmp_11_0 = null;
          var currVal_11 = ctx.currentPageIndex > ((tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 19, ctx.report$)) == null ? null : tmp_11_0.pageCount) - 2;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("block-clicks", !ctx.editable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 15, ctx.page$)) == null ? null : tmp_2_0.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currentSections);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrModalOpen", ctx.submitConfirmationVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.reportFullyComplete);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrLoading", ctx.submitButtonState);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.saveSuccessful);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.currentPageIndex < 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", currVal_10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", currVal_11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editable);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrModal"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrModalBody"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLoadingButton"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLoading"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrAlert"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrAlertItem"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrAlertText"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdown"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownTrigger"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownMenu"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrDropdownItem"], _sections_datagrid_section_datagrid_section_component__WEBPACK_IMPORTED_MODULE_7__["DatagridSection"], _sections_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_8__["SimpleInputSection"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrButtonGroup"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrButton"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCheckboxWrapper"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: [".topDiv[_ngcontent-%COMP%] {\r\n  width: 100vw !important;\r\n  height: 100%;\r\n  margin: 0 !important;\r\n  padding: 0 !important;\r\n}\r\n\r\n.startSection[_ngcontent-%COMP%] {\r\n  height: calc(100% - 48px);\r\n}\r\n\r\n.sectionCol[_ngcontent-%COMP%] {\r\n  width: 100% !important;\r\n  padding: 0 48px !important;\r\n}\r\n\r\n.stickybar[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  margin: 0;\r\n  z-index: 1000;\r\n  width: 100%;\r\n  height: 48px;\r\n  background-color: whitesmoke;\r\n  border-top: 1px solid rgb(168, 159, 159);\r\n}\r\n\r\nclr-toggle-container[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.save-success[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 54;\r\n  left: 6;\r\n}\r\n\r\n.block-clicks[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsU0FBUztFQUNULGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BEaXYge1xyXG4gIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGFydFNlY3Rpb24ge1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDhweCk7XHJcbn1cclxuXHJcbi5zZWN0aW9uQ29sIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgNDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RpY2t5YmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxNjgsIDE1OSwgMTU5KTtcclxufVxyXG5cclxuY2xyLXRvZ2dsZS1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnNhdmUtc3VjY2VzcyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNTQ7XHJcbiAgbGVmdDogNjtcclxufVxyXG5cclxuLmJsb2NrLWNsaWNrcyB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-report',
          templateUrl: './report.component.html',
          styleUrls: ['./report.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/sections/abstract-section/abstract-section.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/components/sections/abstract-section/abstract-section.component.ts ***!
    \************************************************************************************/

  /*! exports provided: AbstractSection */

  /***/
  function srcAppComponentsSectionsAbstractSectionAbstractSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractSection", function () {
      return AbstractSection;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AbstractSection = /*#__PURE__*/function () {
      function AbstractSection() {
        _classCallCheck(this, AbstractSection);

        this.title = 'error';
        this.subtitle = null;
        this.data = null;
        this.constants = {};
      }

      _createClass(AbstractSection, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "checkTitle",
        value: function checkTitle() {
          if (this.title == 'Regular programs') return true;else return false;
        }
      }, {
        key: "getTitle",
        value: function getTitle() {
          return this.title;
        }
      }, {
        key: "isType",
        value: function isType(obj, type) {
          if (obj['type'] == type) {
            return true;
          } else false;
        }
      }, {
        key: "getCheckboxControl",
        value: function getCheckboxControl(arrayIndex, subarrayIndex, array) {
          if (!array || !array.controls) {
            console.error('[Abstract Section] Form array is empty. Has it been built?');
            return [];
          }

          var checkboxArray = array.controls[arrayIndex];
          return checkboxArray.controls[subarrayIndex];
        }
      }]);

      return AbstractSection;
    }();

    AbstractSection.ɵfac = function AbstractSection_Factory(t) {
      return new (t || AbstractSection)();
    };

    AbstractSection.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AbstractSection,
      selectors: [["abstract-section"]],
      inputs: {
        title: "title",
        subtitle: "subtitle",
        data: "data",
        "interface": "interface",
        constants: "constants",
        order: "order"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "subtitle"]],
      template: function AbstractSection_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);
        }
      },
      styles: [".subtitle[_ngcontent-%COMP%] {\r\n  margin-top: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9hYnN0cmFjdC1zZWN0aW9uL2Fic3RyYWN0LXNlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlY3Rpb25zL2Fic3RyYWN0LXNlY3Rpb24vYWJzdHJhY3Qtc2VjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractSection, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'abstract-section',
          templateUrl: './abstract-section.component.html',
          styleUrls: ['./abstract-section.component.css'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
        }]
      }], function () {
        return [];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "interface": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        constants: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/sections/datagrid-section/datagrid-section.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/components/sections/datagrid-section/datagrid-section.component.ts ***!
    \************************************************************************************/

  /*! exports provided: DatagridSection */

  /***/
  function srcAppComponentsSectionsDatagridSectionDatagridSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatagridSection", function () {
      return DatagridSection;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_section_abstract_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-section/abstract-section.component */
    "./src/app/components/sections/abstract-section/abstract-section.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/constant.service */
    "./src/app/services/constant.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");

    function DatagridSection_h5_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0["interface"].subtitle);
      }
    }

    function DatagridSection_clr_dg_column_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-column");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r5.label);
      }
    }

    function DatagridSection_clr_dg_row_7_clr_dg_cell_6_span_1_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, cell_r9, "MM/dd/yyyy"));
      }
    }

    function DatagridSection_clr_dg_row_7_clr_dg_cell_6_span_1_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cell_r9, " ");
      }
    }

    function DatagridSection_clr_dg_row_7_clr_dg_cell_6_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatagridSection_clr_dg_row_7_clr_dg_cell_6_span_1_span_1_Template, 3, 4, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatagridSection_clr_dg_row_7_clr_dg_cell_6_span_1_ng_template_2_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.isDate(i_r10))("ngIfElse", _r15);
      }
    }

    function DatagridSection_clr_dg_row_7_clr_dg_cell_6_ng_template_2_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", tag_r21.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r21.icon);
      }
    }

    function DatagridSection_clr_dg_row_7_clr_dg_cell_6_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatagridSection_clr_dg_row_7_clr_dg_cell_6_ng_template_2_span_0_Template, 3, 2, "span", 2);
      }

      if (rf & 2) {
        var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cell_r9.tags);
      }
    }

    function DatagridSection_clr_dg_row_7_clr_dg_cell_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatagridSection_clr_dg_row_7_clr_dg_cell_6_span_1_Template, 4, 2, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatagridSection_clr_dg_row_7_clr_dg_cell_6_ng_template_2_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cell_r9 = ctx.$implicit;

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.isTagObj(cell_r9))("ngIfElse", _r12);
      }
    }

    function DatagridSection_clr_dg_row_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-action-overflow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatagridSection_clr_dg_row_7_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var i_r7 = ctx.index;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.openEditModal(i_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatagridSection_clr_dg_row_7_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var i_r7 = ctx.index;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.deleteRow(i_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatagridSection_clr_dg_row_7_clr_dg_cell_6_Template, 4, 2, "clr-dg-cell", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r6.row);
      }
    }

    function DatagridSection_clr_modal_12_form_9_clr_date_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-date-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var column_r28 = ctx_r35.$implicit;
        var i_r29 = ctx_r35.index;

        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r28["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r30.formArray.controls[i_r29]);
      }
    }

    function DatagridSection_clr_modal_12_form_9_clr_select_container_2_select_3_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var division_r38 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", division_r38.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", division_r38.label, "");
      }
    }

    function DatagridSection_clr_modal_12_form_9_clr_select_container_2_select_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatagridSection_clr_modal_12_form_9_clr_select_container_2_select_3_option_1_Template, 2, 2, "option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r36.formArray.controls[i_r29]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r36.constants["divisions"]);
      }
    }

    function DatagridSection_clr_modal_12_form_9_clr_select_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-select-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatagridSection_clr_modal_12_form_9_clr_select_container_2_select_3_Template, 2, 2, "select", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r28["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.constants);
      }
    }

    function DatagridSection_clr_modal_12_form_9_clr_input_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var column_r28 = ctx_r41.$implicit;
        var i_r29 = ctx_r41.index;

        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r28["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r32.formArray.controls[i_r29]);
      }
    }

    function DatagridSection_clr_modal_12_form_9_clr_input_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var column_r28 = ctx_r42.$implicit;
        var i_r29 = ctx_r42.index;

        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r28["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r33.formArray.controls[i_r29]);
      }
    }

    function DatagridSection_clr_modal_12_form_9_clr_checkbox_container_5_clr_checkbox_wrapper_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-checkbox-wrapper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r44 = ctx.$implicit;
        var j_r45 = ctx.index;

        var i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r43.getCheckboxControl(i_r29, j_r45, ctx_r43.formArray));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", tag_r44.icon, " ", tag_r44.label, "");
      }
    }

    function DatagridSection_clr_modal_12_form_9_clr_checkbox_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-checkbox-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatagridSection_clr_modal_12_form_9_clr_checkbox_container_5_clr_checkbox_wrapper_3_Template, 4, 3, "clr-checkbox-wrapper", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r28["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r28.tags);
      }
    }

    function DatagridSection_clr_modal_12_form_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatagridSection_clr_modal_12_form_9_clr_date_container_1_Template, 4, 2, "clr-date-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatagridSection_clr_modal_12_form_9_clr_select_container_2_Template, 4, 2, "clr-select-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatagridSection_clr_modal_12_form_9_clr_input_container_3_Template, 4, 2, "clr-input-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatagridSection_clr_modal_12_form_9_clr_input_container_4_Template, 4, 2, "clr-input-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatagridSection_clr_modal_12_form_9_clr_checkbox_container_5_Template, 4, 2, "clr-checkbox-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r28 = ctx.$implicit;

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r27.formGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.isType(column_r28, "date-select"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.isType(column_r28, "division-select"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.isType(column_r28, "text"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.isType(column_r28, "number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.isType(column_r28, "tag-select"));
      }
    }

    function DatagridSection_clr_modal_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-modal", 12, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrModalOpenChange", function DatagridSection_clr_modal_12_Template_clr_modal_clrModalOpenChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.addModalOpened = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-alert", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrAlertClosedChange", function DatagridSection_clr_modal_12_Template_clr_alert_clrAlertClosedChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return !(ctx_r50.showItemAddConfirmation = $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-alert-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Item successfully added.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DatagridSection_clr_modal_12_form_9_Template, 6, 6, "form", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatagridSection_clr_modal_12_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.addModalCancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatagridSection_clr_modal_12_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.addAnother();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add another ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatagridSection_clr_modal_12_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.finishAddModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Add and finish ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrModalOpen", ctx_r3.addModalOpened);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrAlertType", "success")("clrAlertClosed", !ctx_r3.showItemAddConfirmation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3["interface"].columns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.formArray.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.formArray.invalid);
      }
    }

    function DatagridSection_clr_modal_13_form_5_clr_date_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-date-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var column_r56 = ctx_r63.$implicit;
        var i_r57 = ctx_r63.index;

        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r56["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r58.formArray.controls[i_r57]);
      }
    }

    function DatagridSection_clr_modal_13_form_5_clr_select_container_2_select_3_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var division_r66 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", division_r66.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", division_r66.label, "");
      }
    }

    function DatagridSection_clr_modal_13_form_5_clr_select_container_2_select_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatagridSection_clr_modal_13_form_5_clr_select_container_2_select_3_option_1_Template, 2, 2, "option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r64.formArray.controls[i_r57]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r64.constants["divisions"]);
      }
    }

    function DatagridSection_clr_modal_13_form_5_clr_select_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-select-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatagridSection_clr_modal_13_form_5_clr_select_container_2_select_3_Template, 2, 2, "select", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r56["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r59.constants);
      }
    }

    function DatagridSection_clr_modal_13_form_5_clr_input_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var column_r56 = ctx_r69.$implicit;
        var i_r57 = ctx_r69.index;

        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r56["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r60.formArray.controls[i_r57]);
      }
    }

    function DatagridSection_clr_modal_13_form_5_clr_input_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var column_r56 = ctx_r70.$implicit;
        var i_r57 = ctx_r70.index;

        var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r56["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r61.formArray.controls[i_r57]);
      }
    }

    function DatagridSection_clr_modal_13_form_5_clr_checkbox_container_5_clr_checkbox_wrapper_3_input_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 33);
      }

      if (rf & 2) {
        var j_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var i_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r74.getCheckboxControl(i_r57, j_r73, ctx_r74.formArray));
      }
    }

    function DatagridSection_clr_modal_13_form_5_clr_checkbox_container_5_clr_checkbox_wrapper_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-checkbox-wrapper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatagridSection_clr_modal_13_form_5_clr_checkbox_container_5_clr_checkbox_wrapper_3_input_1_Template, 1, 1, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r72 = ctx.$implicit;

        var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r71.editModalOpened);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", tag_r72.icon, " ", tag_r72.label, "");
      }
    }

    function DatagridSection_clr_modal_13_form_5_clr_checkbox_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-checkbox-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatagridSection_clr_modal_13_form_5_clr_checkbox_container_5_clr_checkbox_wrapper_3_Template, 4, 3, "clr-checkbox-wrapper", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r56["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r56.tags);
      }
    }

    function DatagridSection_clr_modal_13_form_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatagridSection_clr_modal_13_form_5_clr_date_container_1_Template, 4, 2, "clr-date-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatagridSection_clr_modal_13_form_5_clr_select_container_2_Template, 4, 2, "clr-select-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatagridSection_clr_modal_13_form_5_clr_input_container_3_Template, 4, 2, "clr-input-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatagridSection_clr_modal_13_form_5_clr_input_container_4_Template, 4, 2, "clr-input-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatagridSection_clr_modal_13_form_5_clr_checkbox_container_5_Template, 4, 2, "clr-checkbox-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r56 = ctx.$implicit;

        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r55.formGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r55.isType(column_r56, "date-select"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r55.isType(column_r56, "division-select"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r55.isType(column_r56, "text"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r55.isType(column_r56, "number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r55.isType(column_r56, "tag-select"));
      }
    }

    function DatagridSection_clr_modal_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-modal", 12, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrModalOpenChange", function DatagridSection_clr_modal_13_Template_clr_modal_clrModalOpenChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r78.editModalOpened = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatagridSection_clr_modal_13_form_5_Template, 6, 6, "form", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatagridSection_clr_modal_13_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r80.editModalCancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatagridSection_clr_modal_13_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r81.finishEdits();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Apply ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrModalOpen", ctx_r4.editModalOpened);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4["interface"].columns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.formArray.invalid);
      }
    }

    var DatagridSection = /*#__PURE__*/function (_abstract_section_abs) {
      _inherits(DatagridSection, _abstract_section_abs);

      var _super = _createSuper(DatagridSection);

      function DatagridSection(constantService) {
        var _this17;

        _classCallCheck(this, DatagridSection);

        _this17 = _super.call(this);
        _this17.constantService = constantService;
        _this17.formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        _this17.formLabels = [];
        _this17.sectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this17.addModalOpened = false;
        _this17.editModalOpened = false;
        _this17.showItemAddConfirmation = false;
        return _this17;
      }

      _createClass(DatagridSection, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.constantService.constants.subscribe(function (obj) {
            _this18.constants = obj;
          });

          if (!this["interface"].value) {
            this["interface"].value = [];
            console.warn('No value supplied for datagrid ' + this["interface"].title);
          }

          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            array: this.formArray
          });
        }
      }, {
        key: "hasTag",
        value: function hasTag(tagArray, tagObj) {
          var tagLabels = [];
          tagArray.forEach(function (tag) {
            tagLabels.push(tag['label']);
          });
          return tagLabels.includes(tagObj['label']);
        }
      }, {
        key: "convertISOtoTraditional",
        value: function convertISOtoTraditional(isoString) {
          if (!isoString) {
            return null;
          }

          var date = new Date(isoString);
          var year = date.getFullYear();
          var month = (date.getMonth() + 1).toString();
          var dt = date.getDate().toString();

          if (date.getDate() < 10) {
            dt = '0' + dt.toString();
          }

          if (date.getMonth() < 10) {
            month = '0' + month;
          }

          var result = month + '/' + dt + '/' + year;
          console.log('Converting: ' + isoString + ' to ' + result);
          return result;
        }
      }, {
        key: "convertTraditionalToISO",
        value: function convertTraditionalToISO(inputString) {
          if (!inputString) {
            return null;
          }

          var stringPieces = inputString.split('/');

          if (stringPieces.length !== 3) {
            console.warn('Invalid date: ' + inputString);
            return null;
          }

          var monthNum = +stringPieces[0] - 1;
          var dateNum = +stringPieces[1];
          var yearNum = +stringPieces[2];
          var date = new Date();
          date.setMonth(monthNum);
          date.setDate(dateNum);
          date.setFullYear(yearNum);
          var result = date.toISOString();
          console.log('Converting: ' + inputString + ' to ' + result);
          return result;
        }
      }, {
        key: "buildFormFromInterface",
        value: function buildFormFromInterface(editData) {
          var _this19 = this;

          console.log(editData);
          var cols = this["interface"].columns;
          this.formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
          this.formLabels = [];

          if (cols) {
            cols.forEach(function (column, colIndex) {
              //push a form control  and label for each column in the datagrid
              _this19.formLabels.push(column.label); //if the column is a tag-select, push a FormArray


              if (column.type === 'tag-select') {
                var tagArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);

                if (column.tags) {
                  //push a checkbox for each tag
                  column.tags.forEach(function (tag, tagIndex) {
                    var tagControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false); //initalize the checkboxes

                    if (editData && editData[colIndex] && editData[colIndex]['tags']) {
                      tagControl.setValue(_this19.hasTag(editData[colIndex]['tags'], tag));
                      console.log(tag, _this19.hasTag(column['tags'], tag));
                    }

                    tagArray.push(tagControl);
                  });
                  console.log(tagArray.value);

                  _this19.formArray.push(tagArray);
                }
              } else {
                if (editData && editData[colIndex]) {
                  console.log('Pushing ' + editData[colIndex]);

                  if (column.type === 'date-select') {
                    _this19.formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this19.convertISOtoTraditional(editData[colIndex])));
                  } else {
                    _this19.formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](editData[colIndex]));
                  }
                } else {
                  _this19.formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
                }
              }
            });
            console.log(this.formArray.value);
          } else {
            // just keep the formArray empty if no columns supplied.
            console.warn('[Datagrid] Cannot build form. No columns could be found.');
            return;
          } // let cols = (this.interface as DatagridInterface).columns;
          // this.formArray.clear();
          // if (!cols) {
          //   console.error(this.interface);
          //   console.error(
          //     'No column values were supplied to ' + this.interface.title
          //   );
          //   return;
          // }
          // cols.forEach((column) => {
          //   this.formLabels.push(column['label']);
          //   if (column['type'] === 'tag-select') {
          //     let checkboxArray = new FormArray([]);
          //     //check if column has attached 'tags' property
          //     if (column['tags']) {
          //       column['tags'].forEach((tag) => {
          //         checkboxArray.push(new FormControl());
          //       });
          //     }
          //     this.formArray.push(checkboxArray);
          //   } else {
          //     this.formArray.push(new FormControl(''));
          //   }
          // });

        }
      }, {
        key: "addRowFromFormArray",
        value: function addRowFromFormArray() {
          var _this20 = this;

          var row = [];
          this["interface"].columns.forEach(function (col, index) {
            if (col['type'] === 'tag-select') {
              var tags = [];
              col.tags.forEach(function (tag, j) {
                if (_this20.formArray.at(index).at(j).value === true) tags.push(tag);
              });
              row.push({
                tags: tags
              });
            } else if (col.type === 'date-select') {
              row.push(_this20.convertTraditionalToISO(_this20.formArray.at(index).value));
            } else {
              row.push(_this20.formArray.at(index).value);
            }
          });
          console.log(this["interface"]);
          this["interface"].value.push({
            row: row
          });
          this.sectionChanged.emit(this["interface"]);
        }
      }, {
        key: "deleteRow",
        value: function deleteRow(index) {
          this["interface"].value.splice(index, 1);
          this.sectionChanged.emit(this["interface"]);
        }
      }, {
        key: "finishAddModal",
        value: function finishAddModal() {
          this.addModalOpened = false;
          this.addRowFromFormArray();
          this.formArray.reset();
        }
      }, {
        key: "openEditModal",
        value: function openEditModal(rowIndex) {
          this.selectedRow = rowIndex;
          var editData = this["interface"].value[rowIndex];
          this.buildFormFromInterface(editData['row']);
          this.editModalOpened = true;
        } // convertToFormValues(dataRow): any[] {
        //   let formVals: any[] = [];
        //   //check if any column contains tags
        //   dataRow.row.forEach((col, index) => {
        //     if (
        //       (this.interface as DatagridInterface).columns[index]['type'] ===
        //       'tag-select'
        //     ) {
        //       let colTags: Object[] = [];
        //       if (this.interface['columns'][index]['tags']) {
        //         let colTags: Object[] = this.interface['columns'][index]['tags'];
        //       }
        //       let rowTags: Object[] = col.tags;
        //       let tagVals: boolean[] = [];
        //       let templateLabels: string[] = [];
        //       colTags.forEach((tag: Object) => {
        //         templateLabels.push(tag['label']);
        //       });
        //       let rowLabels: string[] = [];
        //       rowTags.forEach((tag: Object) => {
        //         rowLabels.push(tag['label']);
        //       });
        //       templateLabels.forEach((templateLabel) => {
        //         if (rowLabels.includes(templateLabel)) {
        //           tagVals.push(true);
        //         } else tagVals.push(false);
        //       });
        //       formVals.push(tagVals);
        //     } else {
        //       formVals.push(col);
        //     }
        //   });
        //   console.log(formVals);
        //   return formVals;
        // }

      }, {
        key: "finishEdits",
        value: function finishEdits() {
          this.editModalOpened = false;
          this.editRow(this.selectedRow);
          this.formArray.reset();
        }
      }, {
        key: "editRow",
        value: function editRow(rowIndex) {
          var _this21 = this;

          var row = [];
          this["interface"].columns.forEach(function (col, index) {
            if (col['type'] === 'tag-select') {
              var tags = [];
              col.tags.forEach(function (tag, j) {
                if (_this21.formArray.at(index).at(j).value === true) tags.push(tag);
              });
              row.push({
                tags: tags
              });
            } else if (col.type === 'date-select') {
              row.push(_this21.convertTraditionalToISO(_this21.formArray.at(index).value));
            } else {
              row.push(_this21.formArray.at(index).value);
            }
          });
          console.log('Finished edits: ' + row);
          this["interface"].value[rowIndex] = {
            row: row
          };
          this.sectionChanged.emit(this["interface"]);
        }
      }, {
        key: "isDate",
        value: function isDate(colIndex) {
          var type = this["interface"].columns[colIndex].type;

          if (type === 'date-select' || type === 'month-select') {
            return true;
          } else return false;
        }
      }, {
        key: "openAddModal",
        value: function openAddModal() {
          this.buildFormFromInterface();
          this.addModalOpened = true;
        }
      }, {
        key: "addAnother",
        value: function addAnother() {
          var _this22 = this;

          this.addRowFromFormArray();
          this.buildFormFromInterface();
          console.log(this["interface"].value); //show a confirmation banner, then hide after 3 seconds

          this.showItemAddConfirmation = true;
          setTimeout(function () {
            _this22.showItemAddConfirmation = false;
          }, 3000);
        }
      }, {
        key: "addModalCancel",
        value: function addModalCancel() {
          this.addModalOpened = false;
          this.formArray.reset();
        }
      }, {
        key: "editModalCancel",
        value: function editModalCancel() {
          this.editModalOpened = false;
          this.formArray.reset();
        }
      }, {
        key: "isTagObj",
        value: function isTagObj(obj) {
          if (obj !== null && obj !== undefined && obj['tags']) return true;else return false;
        }
      }, {
        key: "checkArrayValidity",
        value: function checkArrayValidity() {
          this.formArray.controls.forEach(function (control) {
            console.log(control.value + ' | ' + control.status);
          });
          console.log(this.formArray.status);
          console.log(this.formArray.valid);
        }
      }]);

      return DatagridSection;
    }(_abstract_section_abstract_section_component__WEBPACK_IMPORTED_MODULE_1__["AbstractSection"]);

    DatagridSection.ɵfac = function DatagridSection_Factory(t) {
      return new (t || DatagridSection)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_constant_service__WEBPACK_IMPORTED_MODULE_3__["ConstantService"]));
    };

    DatagridSection.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DatagridSection,
      selectors: [["datagrid-section"]],
      inputs: {
        "interface": "interface"
      },
      outputs: {
        sectionChanged: "sectionChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 14,
      vars: 6,
      consts: [["class", "subtitle", 4, "ngIf"], [4, "clrDgItems", "clrDgItemsOf"], [4, "ngFor", "ngForOf"], [1, "btn-group", "btn-link", "btn-sm"], [1, "btn", 3, "click"], [3, "clrModalOpen", "clrModalOpenChange", 4, "ngIf"], [1, "subtitle"], [1, "action-item", 3, "click"], [4, "ngIf", "ngIfElse"], ["tagRenderer", ""], ["plainCell", ""], [3, "title"], [3, "clrModalOpen", "clrModalOpenChange"], ["addModal", ""], [1, "modal-title"], [1, "modal-body"], [3, "clrAlertType", "clrAlertClosed", "clrAlertClosedChange"], [1, "alert-text"], ["clrForm", "", "clrLayout", "vertical", 3, "formGroup", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], ["clrForm", "", "clrLayout", "vertical", 3, "formGroup"], [4, "ngIf"], ["for", ""], ["type", "date", "clrDate", "", 3, "formControl"], ["clrSelect", "", 3, "formControl", 4, "ngIf"], ["clrSelect", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["clrInput", "", "type", "text", 3, "formControl"], ["clrInput", "", "type", "number", 3, "formControl"], ["type", "checkbox", "clrCheckbox", "", 3, "formControl"], ["editModal", ""], ["type", "checkbox", "clrCheckbox", "", 3, "formControl", 4, "ngIf"]],
      template: function DatagridSection_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatagridSection_h5_2_Template, 2, 1, "h5", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-datagrid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-placeholder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nothing to see here. Try adding more content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatagridSection_clr_dg_column_6_Template, 2, 1, "clr-dg-column", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DatagridSection_clr_dg_row_7_Template, 7, 1, "clr-dg-row", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatagridSection_Template_button_click_10_listener() {
            return ctx.openAddModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DatagridSection_clr_modal_12_Template, 17, 6, "clr-modal", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DatagridSection_clr_modal_13_Template, 11, 3, "clr-modal", 5);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx["interface"].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx["interface"].subtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", ctx["interface"].columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx["interface"].value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addModalOpened);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editModalOpened);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdn"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridPlaceholder"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridItems"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridFooter"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdk"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdl"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridActionOverflow"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdm"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrModal"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrModalBody"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlert"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlertItem"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrAlertText"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrForm"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLayout"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDateContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDateInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrSelectContainer"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCheckboxContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCheckboxWrapper"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCheckbox"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".subtitle[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9kYXRhZ3JpZC1zZWN0aW9uL2RhdGFncmlkLXNlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbnMvZGF0YWdyaWQtc2VjdGlvbi9kYXRhZ3JpZC1zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VidGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatagridSection, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'datagrid-section',
          templateUrl: './datagrid-section.component.html',
          styleUrls: ['./datagrid-section.component.css']
        }]
      }], function () {
        return [{
          type: _services_constant_service__WEBPACK_IMPORTED_MODULE_3__["ConstantService"]
        }];
      }, {
        sectionChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        "interface": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/sections/simple-input/simple-input.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/sections/simple-input/simple-input.component.ts ***!
    \****************************************************************************/

  /*! exports provided: SimpleInputSection */

  /***/
  function srcAppComponentsSectionsSimpleInputSimpleInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleInputSection", function () {
      return SimpleInputSection;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_section_abstract_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-section/abstract-section.component */
    "./src/app/components/sections/abstract-section/abstract-section.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/report.service */
    "./src/app/services/report.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _controls_month_select_month_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../controls/month-select/month-select.component */
    "./src/app/components/controls/month-select/month-select.component.ts");

    function SimpleInputSection_h5_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0["interface"].subtitle);
      }
    }

    function SimpleInputSection_form_3_clr_date_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-date-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var input_r2 = ctx_r11.$implicit;
        var i_r3 = ctx_r11.index;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](input_r2["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r4.formArray.controls[i_r3]);
      }
    }

    function SimpleInputSection_form_3_clr_select_container_2_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var division_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", division_r13.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", division_r13.label, "");
      }
    }

    function SimpleInputSection_form_3_clr_select_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-select-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SimpleInputSection_form_3_clr_select_container_2_option_4_Template, 2, 2, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var input_r2 = ctx_r14.$implicit;
        var i_r3 = ctx_r14.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](input_r2["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.formArray.controls[i_r3]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.getConstant("divisions"));
      }
    }

    function SimpleInputSection_form_3_month_select_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "month-select", 11);
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var input_r2 = ctx_r15.$implicit;
        var i_r3 = ctx_r15.index;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", input_r2["label"])("formControl", ctx_r6.formArray.controls[i_r3]);
      }
    }

    function SimpleInputSection_form_3_clr_input_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var input_r2 = ctx_r16.$implicit;
        var i_r3 = ctx_r16.index;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](input_r2["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r7.formArray.controls[i_r3]);
      }
    }

    function SimpleInputSection_form_3_clr_input_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var input_r2 = ctx_r17.$implicit;
        var i_r3 = ctx_r17.index;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](input_r2["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r8.formArray.controls[i_r3]);
      }
    }

    function SimpleInputSection_form_3_clr_checkbox_container_6_clr_checkbox_wrapper_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-checkbox-wrapper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r19 = ctx.$implicit;
        var j_r20 = ctx.index;

        var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r18.getCheckboxControl(i_r3, j_r20, ctx_r18.formArray));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", tag_r19.icon, " ", tag_r19.label, "");
      }
    }

    function SimpleInputSection_form_3_clr_checkbox_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-checkbox-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SimpleInputSection_form_3_clr_checkbox_container_6_clr_checkbox_wrapper_3_Template, 4, 3, "clr-checkbox-wrapper", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](input_r2["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", input_r2.tags);
      }
    }

    function SimpleInputSection_form_3_clr_textarea_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-textarea-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var input_r2 = ctx_r23.$implicit;
        var i_r3 = ctx_r23.index;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](input_r2["label"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r10.formArray.controls[i_r3]);
      }
    }

    function SimpleInputSection_form_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleInputSection_form_3_clr_date_container_1_Template, 4, 2, "clr-date-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimpleInputSection_form_3_clr_select_container_2_Template, 5, 3, "clr-select-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SimpleInputSection_form_3_month_select_3_Template, 1, 2, "month-select", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SimpleInputSection_form_3_clr_input_container_4_Template, 4, 2, "clr-input-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SimpleInputSection_form_3_clr_input_container_5_Template, 4, 2, "clr-input-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SimpleInputSection_form_3_clr_checkbox_container_6_Template, 4, 2, "clr-checkbox-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SimpleInputSection_form_3_clr_textarea_container_7_Template, 4, 2, "clr-textarea-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.formGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isType(input_r2, "date-select"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isType(input_r2, "division-select"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isType(input_r2, "month-select"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isType(input_r2, "text"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isType(input_r2, "number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isType(input_r2, "tag-select"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isType(input_r2, "textarea"));
      }
    }

    var SimpleInputSection = /*#__PURE__*/function (_abstract_section_abs2) {
      _inherits(SimpleInputSection, _abstract_section_abs2);

      var _super2 = _createSuper(SimpleInputSection);

      function SimpleInputSection(_ReportService) {
        var _this23;

        _classCallCheck(this, SimpleInputSection);

        _this23 = _super2.call(this);
        _this23._ReportService = _ReportService;
        _this23.formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([], {
          updateOn: 'blur'
        });
        _this23.formLabels = [];
        _this23.sectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this23;
      }

      _createClass(SimpleInputSection, [{
        key: "hasTag",
        value: function hasTag(tagArray, tagObj) {
          var tagLabels = [];

          if (tagArray) {
            tagArray.forEach(function (tag) {
              tagLabels.push(tag['label']);
            });
          }

          return tagLabels.includes(tagObj['label']);
        }
      }, {
        key: "convertISOtoTraditional",
        value: function convertISOtoTraditional(isoString) {
          var date = new Date(isoString);
          var year = date.getFullYear();
          var month = (date.getMonth() + 1).toString();
          var dt = date.getDate().toString();

          if (date.getDate() < 10) {
            dt = '0' + dt.toString();
          }

          if (date.getMonth() < 10) {
            month = '0' + month;
          }

          var result = month + '/' + dt + '/' + year;
          console.log('Converting: ' + isoString + ' to ' + result);
          return result;
        }
      }, {
        key: "convertTraditionalToISO",
        value: function convertTraditionalToISO(inputString) {
          var stringPieces = inputString.split('/');
          var monthNum = +stringPieces[0] - 1;
          var dateNum = +stringPieces[1];
          var yearNum = +stringPieces[2];
          var date = new Date();
          date.setMonth(monthNum);
          date.setDate(dateNum);
          date.setFullYear(yearNum);
          var result = date.toISOString();
          console.log('Converting: ' + inputString + ' to ' + result);
          return result;
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          var _this24 = this;

          if (!this.inputs) {
            console.error('No inputs were found for ' + this.title);
            return;
          }

          this.inputs.forEach(function (input, index) {
            _this24.formLabels.push(input['label']); //if saved data exists, fill the form with that to start


            if (_this24["interface"].value) {
              var savedData = _this24["interface"].value;

              if (input['type'] === 'tag-select') {
                var checkboxArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
                console.log(savedData);
                input.tags.forEach(function (tag) {
                  checkboxArray.push(savedData[index] ? new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this24.hasTag(savedData[index]['tags'], tag)) : new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
                });

                _this24.formArray.push(checkboxArray);
              } else if (input['type'] === 'month-select') {
                _this24.formArray.push( //push the current date
                new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](savedData[index]));
              } else if (input['typle'] === 'date-select') {
                _this24.formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this24.convertISOtoTraditional(savedData[index])));
              } else {
                _this24.formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](savedData[index]));
              }
            } else {
              if (input['type'] === 'tag-select') {
                var _checkboxArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);

                input.tags.forEach(function (tag) {
                  _checkboxArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null));
                });

                _this24.formArray.push(_checkboxArray);
              } else if (input['type'] === 'month-select') {
                var currentDate = new Date();

                _this24.formArray.push( //push the current date
                new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](currentDate.toISOString()));
              } else {
                _this24.formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null));
              }
            }
          });
          console.log(this.formArray);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.inputs = this["interface"].inputs;
          this.buildForm();
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            array: this.formArray
          }, {
            updateOn: 'blur'
          });
          this.formArray.valueChanges.subscribe(function (rawFormData) {
            if (_this25["interface"].type === 'meta' && _this25._ReportService.report) {
              _this25["interface"].inputs.forEach(function (inputObj, index) {
                var link = inputObj.link;
                console.log(link);

                if (link === 'coverageDate') {
                  _this25._ReportService.setCoverageDate(_this25.formArray.value[index]);
                } else if (link === 'additionalInfo') {
                  _this25._ReportService.setAdditionalInfo(_this25.formArray.value[index]);
                } else if (link === 'title') {
                  _this25._ReportService.setTitle(_this25.formArray.value[index]);
                } else if (link === 'subject') {
                  _this25._ReportService.setSubject(_this25.formArray.value[index]);
                } else if (link === 'tags') {
                  _this25._ReportService.setTags(_this25.formArray.value[index]);
                }
              });
            } //properly add tags from newData


            console.log(rawFormData);
            var processedVals = [];
            rawFormData.forEach(function (obj, index) {
              var type = _this25["interface"].inputs[index].type;

              if (type === 'tag-select') {
                var checkTags = [];
                var tags = _this25["interface"].inputs[index].tags;
                obj.forEach(function (checked, tagIndex) {
                  if (checked) {
                    checkTags.push(tags[tagIndex]);
                  }
                });
                processedVals.push({
                  tags: checkTags
                });
              } else if (type === 'date-select') {
                processedVals.push(_this25.convertTraditionalToISO(rawFormData[index]));
              } else {
                processedVals.push(rawFormData[index]);
              }
            });
            console.log(processedVals);
            _this25["interface"].value = processedVals;

            _this25.sectionChanged.emit(_this25["interface"]);
          });
        }
      }, {
        key: "getConstant",
        value: function getConstant(constantName) {
          return ['a', 'b', 'c'];
        }
      }]);

      return SimpleInputSection;
    }(_abstract_section_abstract_section_component__WEBPACK_IMPORTED_MODULE_1__["AbstractSection"]);

    SimpleInputSection.ɵfac = function SimpleInputSection_Factory(t) {
      return new (t || SimpleInputSection)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]));
    };

    SimpleInputSection.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SimpleInputSection,
      selectors: [["simple-input"]],
      inputs: {
        "interface": "interface",
        meta: "meta",
        constants: "constants"
      },
      outputs: {
        sectionChanged: "sectionChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 3,
      consts: [["class", "subtitle", 4, "ngIf"], ["clrForm", "", "clrLayout", "vertical", 3, "formGroup", 4, "ngFor", "ngForOf"], [1, "subtitle"], ["clrForm", "", "clrLayout", "vertical", 3, "formGroup"], [4, "ngIf"], [3, "label", "formControl", 4, "ngIf"], ["for", ""], ["type", "date", "clrDate", "", 3, "formControl"], ["clrSelect", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "label", "formControl"], ["clrInput", "", "type", "text", 3, "formControl"], ["clrInput", "", "type", "number", 3, "formControl"], [4, "ngFor", "ngForOf"], ["type", "checkbox", "clrCheckbox", "", 3, "formControl"], ["clrTextarea", "", "name", "description", 3, "formControl"]],
      template: function SimpleInputSection_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimpleInputSection_h5_2_Template, 2, 1, "h5", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SimpleInputSection_form_3_Template, 8, 8, "form", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx["interface"].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx["interface"].subtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrForm"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLayout"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDateContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDateInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrSelectContainer"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _controls_month_select_month_select_component__WEBPACK_IMPORTED_MODULE_6__["MonthSelectComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCheckboxContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCheckboxWrapper"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrCheckbox"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTextarea"]],
      styles: [".clr-textarea-wrapper[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9ucy9zaW1wbGUtaW5wdXQvc2ltcGxlLWlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlY3Rpb25zL3NpbXBsZS1pbnB1dC9zaW1wbGUtaW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbHItdGV4dGFyZWEtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleInputSection, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'simple-input',
          templateUrl: './simple-input.component.html',
          styleUrls: ['./simple-input.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]
        }];
      }, {
        "interface": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        meta: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        constants: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sectionChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/start/start.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/start/start.component.ts ***!
    \*****************************************************/

  /*! exports provided: StartComponent */

  /***/
  function srcAppComponentsStartStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
      return StartComponent;
    });
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/template.service */
    "./src/app/services/template.service.ts");
    /* harmony import */


    var src_app_services_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/report.service */
    "./src/app/services/report.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_constant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../services/constant.service */
    "./src/app/services/constant.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StartComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "clr-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " In order to continue, please verify your account using the link emailed to you, then refresh this page. If you don't receive a verification email (check your spam), ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_1_Template_a_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r3.resendVerification();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "click here to resend one");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function StartComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "clr-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " A new email has been sent to you. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function StartComponent_div_3_h1_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var tmp_0_0 = null;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Reports for ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r5.user)) == null ? null : tmp_0_0.branch, "");
      }
    }

    function StartComponent_div_3_h1_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Reports for all branches");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function StartComponent_div_3_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r16.showTemplateModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "clr-icon", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Templates ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function StartComponent_div_3_clr_dropdown_menu_9_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_clr_dropdown_menu_9_ng_container_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var template_r20 = ctx.$implicit;
          var i_r21 = ctx.index;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r22.createReport(template_r20.templateID, i_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var template_r20 = ctx.$implicit;
        var i_r21 = ctx.index;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrLoading", ctx_r18.templateLoadStatuses[i_r21]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", template_r20.templateID, " ");
      }
    }

    function StartComponent_div_3_clr_dropdown_menu_9_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "clr-icon", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No templates are available right now.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function StartComponent_div_3_clr_dropdown_menu_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "clr-dropdown-menu", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StartComponent_div_3_clr_dropdown_menu_9_ng_container_1_Template, 3, 2, "ng-container", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StartComponent_div_3_clr_dropdown_menu_9_ng_container_2_Template, 3, 0, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8._TemplateService.visibleTemplates);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8._TemplateService.visibleTemplates.length < 1);
      }
    }

    function StartComponent_div_3_button_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_button_28_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r24.copyMagic(ctx_r24.selectedReports);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "clr-icon", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrLoading", ctx_r9.magicLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Copy magic for ", ctx_r9.selectedReports.length, " reports ");
      }
    }

    function StartComponent_div_3_clr_dg_row_29_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_clr_dg_row_29_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);

          var report_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r32.showDelete(report_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "clr-icon", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Delete report ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function StartComponent_div_3_clr_dg_row_29_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_clr_dg_row_29_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

          var report_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r35.showDelete(report_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "clr-icon", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Delete draft ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function StartComponent_div_3_clr_dg_row_29_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Unsubmitted");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function StartComponent_div_3_clr_dg_row_29_span_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Draft");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function StartComponent_div_3_clr_dg_row_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "clr-dg-row", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "clr-dg-action-overflow");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_clr_dg_row_29_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

          var report_r26 = ctx.$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r38.navigate(report_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "clr-icon", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Open report ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_clr_dg_row_29_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

          var report_r26 = ctx.$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r40.showCopy(report_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "clr-icon", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Duplicate to new report ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, StartComponent_div_3_clr_dg_row_29_button_8_Template, 5, 0, "button", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, StartComponent_div_3_clr_dg_row_29_button_9_Template, 3, 0, "button", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_clr_dg_row_29_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

          var report_r26 = ctx.$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r41.copyMagic([report_r26]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "clr-icon", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Copy magic text ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "clr-dg-cell", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_clr_dg_row_29_Template_clr_dg_cell_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

          var report_r26 = ctx.$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r42.navigate(report_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "clr-dg-cell", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_clr_dg_row_29_Template_clr_dg_cell_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

          var report_r26 = ctx.$implicit;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r43.navigate(report_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, StartComponent_div_3_clr_dg_row_29_span_18_Template, 3, 0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "clr-dg-cell", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_clr_dg_row_29_Template_clr_dg_cell_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

          var report_r26 = ctx.$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r44.navigate(report_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, StartComponent_div_3_clr_dg_row_29_span_21_Template, 2, 0, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "clr-dg-cell", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_clr_dg_row_29_Template_clr_dg_cell_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

          var report_r26 = ctx.$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r45.navigate(report_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "clr-dg-cell", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_clr_dg_row_29_Template_clr_dg_cell_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

          var report_r26 = ctx.$implicit;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r46.navigate(report_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var report_r26 = ctx.$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrDgItem", report_r26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r10.isUnfinished(report_r26) && ctx_r10.isAdmin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.isUnfinished(report_r26));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r26.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 10, report_r26.submitDate, "shortDate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !report_r26.submitDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", report_r26.templateID, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.isUnfinished(report_r26));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r26.author);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](26, 13, report_r26.coverageDate, "MMMM \u2019yy"));
      }
    }

    function StartComponent_div_3_clr_dg_detail_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "clr-dg-detail");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "clr-dg-detail-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Report details");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "clr-dg-detail-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "ID: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Coverage date: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Submitted: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Author: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Branch: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Page count: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Completion: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Additional info: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var report_r47 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", report_r47.id, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 8, report_r47.coverageDate, "MMMM \u2019yy"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 11, report_r47.submitDate, "longDate"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", report_r47.author, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", report_r47.branch, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", report_r47.pageCount, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", report_r47.completionStatus, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", report_r47.additionalInfo, " ");
      }
    }

    function StartComponent_div_3_div_46_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Draft");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function StartComponent_div_3_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Template: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, StartComponent_div_3_div_46_span_5_Template, 2, 0, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Coverage date: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Author: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.selectedReport.templateID);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.isUnfinished(ctx_r12.selectedReport));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r12.selectedReport.coverageDate, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.selectedReport.author);
      }
    }

    function StartComponent_div_3_clr_modal_52_clr_select_container_33_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var templateID_r52 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", templateID_r52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](templateID_r52);
      }
    }

    function StartComponent_div_3_clr_modal_52_clr_select_container_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "clr-select-container", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Template");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "All");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, StartComponent_div_3_clr_modal_52_clr_select_container_33_option_6_Template, 2, 2, "option", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r49._TemplateService.templateNames);
      }
    }

    function StartComponent_div_3_clr_modal_52_clr_select_container_34_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branch_r55 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", branch_r55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](branch_r55);
      }
    }

    function StartComponent_div_3_clr_modal_52_clr_select_container_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "clr-select-container", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Branch");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "All");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, StartComponent_div_3_clr_modal_52_clr_select_container_34_option_6_Template, 2, 2, "option", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r50._constants["branches"]);
      }
    }

    function StartComponent_div_3_clr_modal_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "clr-modal", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clrModalOpenChange", function StartComponent_div_3_clr_modal_52_Template_clr_modal_clrModalOpenChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r57.filterVisible = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Filter reports ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Note: all fields are optional. Empty filters are not applied. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Report ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Author");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "clr-date-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Coverage date from");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "clr-date-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Coverage date to");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "clr-select-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Completion status");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "select", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "All");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Complete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Incomplete (draft)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, StartComponent_div_3_clr_modal_52_clr_select_container_33_Template, 7, 1, "clr-select-container", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, StartComponent_div_3_clr_modal_52_clr_select_container_34_Template, 7, 1, "clr-select-container", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_clr_modal_52_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r59.clearFilters();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Clear filters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_clr_modal_52_Template_button_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r60.finishFilterModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Finish ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrModalSize", "lg")("clrModalOpen", ctx_r13.filterVisible);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r13.filterGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.filterVisible);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.isAdmin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrLoading", ctx_r13.filterLoading);
      }
    }

    function StartComponent_div_3_div_56_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Draft");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function StartComponent_div_3_div_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "This will open the new report in the editor.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Template: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "ID: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Submitted: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, StartComponent_div_3_div_56_span_16_Template, 2, 0, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.selectedReport.templateID);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.selectedReport.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 4, ctx_r14.selectedReport.submitDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.isUnfinished(ctx_r14.selectedReport));
      }
    }

    function StartComponent_div_3_div_66_clr_dropdown_menu_5_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_div_66_clr_dropdown_menu_5_div_9_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70);

          var templateID_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r68._TemplateService.markHidden(templateID_r62);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "clr-icon", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Hide from users ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function StartComponent_div_3_div_66_clr_dropdown_menu_5_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_div_66_clr_dropdown_menu_5_ng_template_10_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73);

          var templateID_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r71._TemplateService.markVisible(templateID_r62);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "clr-icon", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Show to users ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function StartComponent_div_3_div_66_clr_dropdown_menu_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "clr-dropdown-menu", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Template actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_div_66_clr_dropdown_menu_5_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76);

          var templateID_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r74._TemplateService.openTemplate(templateID_r62);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "clr-icon", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_div_66_clr_dropdown_menu_5_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76);

          var templateID_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r77.showDuplicateTemplate(templateID_r62);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "clr-icon", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Duplicate as... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, StartComponent_div_3_div_66_clr_dropdown_menu_5_div_9_Template, 3, 0, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, StartComponent_div_3_div_66_clr_dropdown_menu_5_ng_template_10_Template, 3, 0, "ng-template", null, 91, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_div_66_clr_dropdown_menu_5_Template_div_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76);

          var templateID_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r79.deleteTemplate(templateID_r62);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "clr-icon", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

        var templateID_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r64.isHidden(templateID_r62))("ngIfElse", _r66);
      }
    }

    function StartComponent_div_3_div_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "clr-dropdown");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "clr-icon", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, StartComponent_div_3_div_66_clr_dropdown_menu_5_Template, 15, 2, "clr-dropdown-menu", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var templateID_r62 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", templateID_r62, " ");
      }
    }

    function StartComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StartComponent_div_3_h1_2_Template, 3, 3, "h1", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, StartComponent_div_3_h1_3_Template, 2, 0, "h1", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, StartComponent_div_3_button_4_Template, 3, 0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "clr-dropdown", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "clr-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " New report ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, StartComponent_div_3_clr_dropdown_menu_9_Template, 3, 2, "clr-dropdown-menu", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "clr-datagrid", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clrDgSelectedChange", function StartComponent_div_3_Template_clr_datagrid_clrDgSelectedChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r82.selectedReports = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "clr-dg-placeholder");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "No reports found.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "clr-dg-column");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "clr-dg-column");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Submitted");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "clr-dg-column");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Template");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "clr-dg-column");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Author");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "clr-dg-column");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Coverage date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "clr-dg-action-bar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r84.showFilterModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "clr-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Filter reports ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, StartComponent_div_3_button_28_Template, 3, 2, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, StartComponent_div_3_clr_dg_row_29_Template, 27, 16, "clr-dg-row", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, StartComponent_div_3_clr_dg_detail_30_Template, 38, 14, "clr-dg-detail", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "clr-dg-footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Show ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "select", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StartComponent_div_3_Template_select_ngModelChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r85.sizeLimit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "10");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "30");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "100");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "all");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "clr-modal", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clrModalOpenChange", function StartComponent_div_3_Template_clr_modal_clrModalOpenChange_43_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r86.deleteVisible = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h3", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Are you sure you want to delete this report? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, StartComponent_div_3_div_46_Template, 14, 4, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_Template_button_click_48_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r87.hideDelete();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_Template_button_click_50_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r88.deleteReport(ctx_r88.selectedReport);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, StartComponent_div_3_clr_modal_52_Template, 40, 6, "clr-modal", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "clr-modal", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clrModalOpenChange", function StartComponent_div_3_Template_clr_modal_clrModalOpenChange_53_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r89.copyVisible = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h3", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Create a deplicate report?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, StartComponent_div_3_div_56_Template, 17, 6, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_Template_button_click_58_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r90.hideCopy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_Template_button_click_60_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r91.duplicateReport(ctx_r91.selectedReport);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Duplicate ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "clr-modal", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clrModalOpenChange", function StartComponent_div_3_Template_clr_modal_clrModalOpenChange_62_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r92.templateModalVisible = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "h3", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, StartComponent_div_3_div_66_Template, 6, 1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_Template_button_click_68_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r93._TemplateService.newTemplate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Create new ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "clr-icon", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_Template_button_click_72_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r94.hideTemplateModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " Close ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "clr-modal", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clrModalOpenChange", function StartComponent_div_3_Template_clr_modal_clrModalOpenChange_74_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r95.tempDuplicateVisible = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h3", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "New template name");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StartComponent_div_3_Template_input_ngModelChange_81_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r96.newTemplateName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "clr-control-helper");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "What should the new template be named?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_Template_button_click_85_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r97.hideTemplateModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StartComponent_div_3_Template_button_click_87_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r98.duplicateTemplate(ctx_r98.selectedTemplateName, ctx_r98.newTemplateName);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Duplicate ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.isAdmin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isAdmin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isAdmin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrCloseMenuOnItemClick", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrDgSelected", ctx_r2.selectedReports);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selectedReports.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrDgItemsOf", ctx_r2.reports);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.sizeLimit);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" reports | ", ctx_r2.reports.length, " of ", ctx_r2.reportCount, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrModalSize", "sm")("clrModalOpen", ctx_r2.deleteVisible);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selectedReport);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrLoading", ctx_r2.deleteLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.filterVisible);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrModalSize", "sm")("clrModalOpen", ctx_r2.copyVisible);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selectedReport);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrLoading", ctx_r2.templateDupStatus);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrModalOpen", ctx_r2.templateModalVisible);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2._TemplateService.templateNames.length, " templates ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2._TemplateService.templateNames);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clrModalSize", "sm")("clrModalOpen", ctx_r2.tempDuplicateVisible);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Duplicate ", ctx_r2.selectedTemplateName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.newTemplateName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.newTemplateName.length < 1);
      }
    }

    var StartComponent = /*#__PURE__*/function () {
      function StartComponent(_TemplateService, _ReportService, _UserService, _Router, _clipboardService, fb, constantService) {
        _classCallCheck(this, StartComponent);

        this._TemplateService = _TemplateService;
        this._ReportService = _ReportService;
        this._UserService = _UserService;
        this._Router = _Router;
        this._clipboardService = _clipboardService;
        this.fb = fb;
        this.constantService = constantService;
        this.detailState = false; //modal booleans

        this.editVisible = false;
        this.copyVisible = false;
        this.deleteVisible = false;
        this.exportVisible = false;
        this.filterVisible = false;
        this.newTemplateName = ''; //alert booleans

        this.emailSent = false; //from UserService

        this.user = this._UserService.getUserObservable();
        this.reports = [];
        this.templateModalVisible = false;
        this.tempDuplicateVisible = false;
        this.reportCount = -1;
        this.selectedReports = [];
        this._sizeLimit = '10';
        this.selectedTemplates = [];
        this.selectedBranches = [];
        this.filterLoading = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].DEFAULT;
        this.magicLoading = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].DEFAULT;
        this.templateDupStatus = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].DEFAULT;
      }

      _createClass(StartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.user.subscribe(function (user) {
            if (user) {
              _this26.showUnverifiedAlert = !user.emailVerified;

              if (user.role === 'admin') {
                //then load all reports, within quantity limit
                if (_this26._sizeLimit !== 'all') {
                  _this26._ReportService.fetchAllReportsWithLimit(+_this26._sizeLimit).then(function (reports) {
                    _this26.reports = reports;
                    console.log(reports);
                  })["catch"](function () {
                    console.error('Could not fetch reports for ' + user.email);
                  });
                } else {
                  _this26._ReportService.fetchAllReports().then(function (reports) {
                    _this26.reports = reports;
                    console.log(reports);
                  })["catch"](function () {
                    console.error('Could not fetch reports for ' + user.email);
                  });
                }
              } else {
                if (_this26._sizeLimit !== 'all') {
                  _this26._ReportService.fetchReportsByBranchWithLimit(user.branch, +_this26._sizeLimit).then(function (reports) {
                    _this26.reports = reports;
                    console.log(reports);
                  })["catch"](function () {
                    console.error('Could not fetch reports for ' + user.email);
                  });
                } else {
                  _this26._ReportService.fetchReportsByBranch(user.branch).then(function (reports) {
                    _this26.reports = reports;
                    console.log(reports);
                  })["catch"](function () {
                    console.error('Could not fetch reports for ' + user.email);
                  });
                }
              }

              _this26.getReportCount().then(function (count) {
                _this26.reportCount = count;
              });
            }
          });
          this.templates = this._TemplateService.templateObservable; //attach loading statuses to the templates in the 'new report' dropdown

          this.templateLoadStatuses = [];

          this._TemplateService.templateNames.forEach(function () {
            _this26.templateLoadStatuses.push(_clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].DEFAULT);
          }); //subscribe to constants


          this.constantService.constants.subscribe(function (constObj) {
            _this26._constants = constObj;
          });
          this.filterGroup = this.fb.group({
            idSearch: [''],
            completionStatus: ['All'],
            template: ['All'],
            authorSearch: [''],
            coverageFrom: [''],
            coverageTo: [''],
            branch: ['All']
          });
        }
      }, {
        key: "getReportCount",
        value: function getReportCount() {
          if (this._UserService.getUserSnapshot().role === 'admin') {
            return this._ReportService.getFullReportCount();
          } else {
            return this._ReportService.getReportCountByBranch(this._UserService.getUserSnapshot().branch);
          }
        }
      }, {
        key: "showExport",
        value: function showExport(report) {
          this.selectedReport = report;
          this.exportVisible = true;
        }
      }, {
        key: "hideExport",
        value: function hideExport() {
          this.exportVisible = false;
        }
      }, {
        key: "isHidden",
        value: function isHidden(templateID) {
          var templates = this._TemplateService.templateSnapshot;

          if (templates && templates.get(templateID)) {
            return templates.get(templateID).hidden;
          } else return false;
        }
      }, {
        key: "duplicateReport",
        value: function duplicateReport(report) {
          var _this27 = this;

          console.log(report.id);

          this._ReportService.duplicateReport(report.id).then(function (newID) {
            _this27._ReportService.openReport(newID).then(function () {
              _this27._Router.navigate(['report', newID, 0]);
            })["catch"](function (reason) {
              console.error('Error opening new report with ID ' + newID + ': ' + reason);
            });
          }, function () {
            console.error('Error duplicating report ' + report.id);
          });
        }
      }, {
        key: "showCopy",
        value: function showCopy(report) {
          this.selectedReport = report;
          this.copyVisible = true;
        }
      }, {
        key: "hideCopy",
        value: function hideCopy() {
          this.copyVisible = false;
        }
      }, {
        key: "showFilterModal",
        value: function showFilterModal() {
          console.log('Showing filter modal');
          this.filterVisible = true;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          var _this28 = this;

          return new Promise(function (resolve, reject) {
            _this28.refreshReports().then(function () {
              var result = _this28.reports;
              var filters = _this28.filterGroup.value;

              if (filters.idSearch && filters.idSearch.length > 0) {
                result = result.filter(function (report) {
                  return report.id.includes(filters.idSearch);
                });
              }

              if (filters.completionStatus && filters.completionStatus !== 'All') {
                result = result.filter(function (report) {
                  return report.completionStatus === filters.completionStatus;
                });
              }

              if (filters.template && filters.template !== 'All') {
                result = result.filter(function (report) {
                  return report.templateID === filters.template;
                });
              }

              if (filters.authorSearch && filters.authorSearch.length > 0) {
                result = result.filter(function (report) {
                  return report.author && report.author.includes(filters.authorSearch);
                });
              }

              if (filters.branch && filters.branch !== 'All') {
                result = result.filter(function (report) {
                  return report.branch && report.branch === filters.branch;
                });
              }

              if (filters.completionStatus && filters.completionStatus !== 'All') {
                result = result.filter(function (report) {
                  return report.completionStatus && report.completionStatus === filters.completionStatus;
                });
              }

              if (filters.coverageFrom && filters.coverageFrom.length > 0) {
                result = result.filter(function (report) {
                  return report.coverageDate && report.coverageDate >= _this28.convertTraditionalToISO(filters.coverageFrom);
                });
              }

              if (filters.coverageTo && filters.coverageTo.length > 0) {
                result = result.filter(function (report) {
                  return report.coverageDate && report.coverageDate <= _this28.convertTraditionalToISO(filters.coverageTo);
                });
              }

              _this28.reports = result;
              console.log(result);
              resolve();
            });
          });
        }
      }, {
        key: "refreshReports",
        value: function refreshReports() {
          var _this29 = this;

          return new Promise(function (resolve, reject) {
            if (_this29._UserService.getUserSnapshot().role === 'admin') {
              //then load all reports, within quantity limit
              if (_this29._sizeLimit !== 'all') {
                _this29._ReportService.fetchAllReportsWithLimit(+_this29._sizeLimit).then(function (reports) {
                  _this29.reports = reports;
                  console.log(reports);
                  resolve();
                })["catch"](function () {
                  console.error('Could not fetch reports for ' + _this29._UserService.getUserSnapshot().email);
                  reject();
                });
              } else {
                _this29._ReportService.fetchAllReports().then(function (reports) {
                  _this29.reports = reports;
                  console.log(reports);
                  resolve();
                })["catch"](function () {
                  console.error('Could not fetch reports for ' + _this29._UserService.getUserSnapshot().email);
                  reject();
                });
              }
            }
          });
        }
      }, {
        key: "convertTraditionalToISO",
        value: function convertTraditionalToISO(inputString) {
          if (!inputString) {
            return null;
          }

          var stringPieces = inputString.split('/');

          if (stringPieces.length !== 3) {
            console.warn('Invalid date: ' + inputString);
            return null;
          }

          var monthNum = +stringPieces[0] - 1;
          var dateNum = +stringPieces[1];
          var yearNum = +stringPieces[2];
          var date = new Date();
          date.setMonth(monthNum);
          date.setDate(dateNum);
          date.setFullYear(yearNum);
          var result = date.toISOString();
          console.log('Converting: ' + inputString + ' to ' + result);
          return result;
        }
      }, {
        key: "getTemplateCBArray",
        value: function getTemplateCBArray(index) {
          if (!this.filterGroup.get('templateCBs')) {
            return null;
          }

          return this.filterGroup.get('templatesCBs').controls[index];
        }
      }, {
        key: "getBranchCBArray",
        value: function getBranchCBArray(index) {
          if (!this.filterGroup.get('branchCBs')) {
            return null;
          }

          return this.filterGroup.get('branchCBs').controls[index];
        }
      }, {
        key: "clearFilters",
        value: function clearFilters() {
          this.filterGroup = this.fb.group({
            idSearch: [''],
            completionStatus: ['All'],
            template: ['All'],
            authorSearch: [''],
            coverageFrom: [''],
            coverageTo: [''],
            branch: ['All']
          });
        }
      }, {
        key: "finishFilterModal",
        value: function finishFilterModal() {
          var _this30 = this;

          this.filterLoading = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].LOADING;
          console.log(this.filterGroup.value);
          this.applyFilter().then(function () {
            _this30.filterLoading = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].SUCCESS;

            _this30.hideFilterModal();
          })["catch"](function (reason) {
            console.error('Filter application failed: ' + reason);
            _this30.filterLoading = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].ERROR;
          });
        }
      }, {
        key: "hideFilterModal",
        value: function hideFilterModal() {
          this.filterVisible = false;
        }
      }, {
        key: "deleteReport",
        value: function deleteReport(report) {
          var _this31 = this;

          this.deleteLoading = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].LOADING;

          this._ReportService.deleteReport(report).then(function () {
            var user = _this31._UserService.getUserSnapshot();

            if (user.role === 'admin') {
              //then load all reports, within quantity limit
              if (_this31._sizeLimit !== 'all') {
                _this31._ReportService.fetchAllReportsWithLimit(+_this31._sizeLimit).then(function (reports) {
                  _this31.reports = reports;
                  console.log(reports);
                })["catch"](function () {
                  console.error('Could not fetch reports for ' + user.email);
                });
              } else {
                _this31._ReportService.fetchAllReports().then(function (reports) {
                  _this31.reports = reports;
                  console.log(reports);
                })["catch"](function () {
                  console.error('Could not fetch reports for ' + user.email);
                });
              }
            } else {
              if (_this31._sizeLimit !== 'all') {
                _this31._ReportService.fetchReportsByBranchWithLimit(user.branch, +_this31._sizeLimit).then(function (reports) {
                  _this31.reports = reports;
                  console.log(reports);
                })["catch"](function () {
                  console.error('Could not fetch reports for ' + user.email);
                });
              } else {
                _this31._ReportService.fetchReportsByBranch(user.branch).then(function (reports) {
                  _this31.reports = reports;
                  console.log(reports);
                })["catch"](function () {
                  console.error('Could not fetch reports for ' + user.email);
                });
              }
            }

            _this31.deleteLoading = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].SUCCESS;
            _this31.deleteVisible = false;
          });
        }
      }, {
        key: "showDelete",
        value: function showDelete(report) {
          this.selectedReport = report;
          this.deleteVisible = true;
        }
      }, {
        key: "copyMagic",
        value: function copyMagic(reportList) {
          var _this32 = this;

          this.magicLoading = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].LOADING;

          this._ReportService.getMagicString(reportList).then(function (stringResult) {
            console.log(stringResult);

            _this32._clipboardService.copyFromContent(stringResult);

            _this32.magicLoading = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].SUCCESS;
            alert('🔮 Magic string copied to clipboard.');
          });
        }
      }, {
        key: "hideDelete",
        value: function hideDelete() {
          this.deleteVisible = false;
        }
      }, {
        key: "isUnfinished",
        value: function isUnfinished(report) {
          if (report) return report.completionStatus === 'incomplete' ? true : false;else return false;
        }
      }, {
        key: "resendVerification",
        value: function resendVerification() {
          var _this33 = this;

          this._UserService.sendVerificationEmail().then(function () {
            _this33.emailSent = true;
            _this33.showUnverifiedAlert = false;
          });
        }
      }, {
        key: "createReport",
        value: function createReport(templateName, dropdownIndex) {
          var _this34 = this;

          this.templateLoadStatuses[dropdownIndex] = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].LOADING;

          this._ReportService.createNewReport(templateName).then(function (newID) {
            _this34._ReportService.openReport(newID).then(function () {
              console.log('Created report: ');
              console.log(_this34._ReportService.report);

              _this34._Router.navigate(['report', newID, 0]);
            })["catch"](function (reason) {
              console.error('Error opening new report with ID ' + newID + ': ' + reason);
            });
          }, function () {
            console.error('Error creating new report with template ' + templateName);
          });
        }
      }, {
        key: "navigate",
        value: function navigate(report) {
          console.log('Opening: ' + report.id);

          this._Router.navigate(['report', report.id, 0]);
        }
      }, {
        key: "json",
        value: function json(obj) {
          return JSON.stringify(obj);
        }
      }, {
        key: "showTemplateModal",
        value: function showTemplateModal() {
          console.log(this._TemplateService.templateNames);
          this.templateModalVisible = true;
        }
      }, {
        key: "hideTemplateModal",
        value: function hideTemplateModal() {
          this.templateModalVisible = false;
        }
      }, {
        key: "showDuplicateTemplate",
        value: function showDuplicateTemplate(selectedTemplate) {
          this.selectedTemplateName = selectedTemplate;
          this.tempDuplicateVisible = true;
        }
      }, {
        key: "hideDuplicateTemplate",
        value: function hideDuplicateTemplate() {
          this.tempDuplicateVisible = false;
        }
      }, {
        key: "duplicateTemplate",
        value: function duplicateTemplate(selectedTemplateName, newTemplateName) {
          var _this35 = this;

          this.templateDupStatus = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].LOADING;

          this._TemplateService.duplicateTemplate(selectedTemplateName, newTemplateName).then(function () {
            _this35.templateDupStatus = _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingState"].SUCCESS;
            _this35.tempDuplicateVisible = false;
          });
        }
      }, {
        key: "deleteTemplate",
        value: function deleteTemplate(templateID) {
          var _this36 = this;

          this._TemplateService.deleteTemplate(templateID).then(function () {
            console.log('Success');
            console.log(_this36._TemplateService.templateNames);
          }, function (reason) {
            console.log('Error ' + reason);
          });
        }
      }, {
        key: "sizeLimit",
        get: function get() {
          return this._sizeLimit;
        },
        set: function set(newLimit) {
          var _this37 = this;

          this._sizeLimit = newLimit;

          var user = this._UserService.getUserSnapshot();

          this.showUnverifiedAlert = !user.emailVerified;

          if (user.role === 'admin') {
            //then load all reports, within quantity limit
            if (this._sizeLimit !== 'all') {
              this._ReportService.fetchAllReportsWithLimit(+this._sizeLimit).then(function (reports) {
                _this37.reports = reports;
                console.log(reports);
              })["catch"](function () {
                console.error('Could not fetch reports for ' + user.email);
              });
            } else {
              this._ReportService.fetchAllReports().then(function (reports) {
                _this37.reports = reports;
                console.log(reports);
              })["catch"](function () {
                console.error('Could not fetch reports for ' + user.email);
              });
            }
          } else {
            if (this._sizeLimit !== 'all') {
              this._ReportService.fetchReportsByBranchWithLimit(user.branch, +this._sizeLimit).then(function (reports) {
                _this37.reports = reports;
                console.log(reports);
              })["catch"](function () {
                console.error('Could not fetch reports for ' + user.email);
              });
            } else {
              this._ReportService.fetchReportsByBranch(user.branch).then(function (reports) {
                _this37.reports = reports;
                console.log(reports);
              })["catch"](function () {
                console.error('Could not fetch reports for ' + user.email);
              });
            }
          }
        }
      }, {
        key: "isAdmin",
        get: function get() {
          var user = this._UserService.getUserSnapshot();

          if (user && user.role === 'admin') {
            return true;
          } else return false;
        }
      }]);

      return StartComponent;
    }();

    StartComponent.ɵfac = function StartComponent_Factory(t) {
      return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_template_service__WEBPACK_IMPORTED_MODULE_2__["TemplateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_constant_service__WEBPACK_IMPORTED_MODULE_8__["ConstantService"]));
    };

    StartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StartComponent,
      selectors: [["app-start"]],
      decls: 5,
      vars: 5,
      consts: [[1, "clr-row", "clr-justify-content-center", 2, "width", "100vw"], ["class", "clr-col-md-6 alert alert-warning", 4, "ngIf"], ["class", "clr-col-md-6 alert", 4, "ngIf"], ["class", "clr-col clr-col-md-10 clr-col-xl-8", 4, "ngIf"], [1, "clr-col-md-6", "alert", "alert-warning"], [1, "alert-items"], ["role", "alert", 1, "alert-item", "static"], [1, "alert-icon-wrapper"], ["shape", "exclamation-circle", 1, "alert-icon"], [1, "alert-text"], ["href", "javascript://", 3, "click"], [1, "clr-col-md-6", "alert"], [1, "clr-col", "clr-col-md-10", "clr-col-xl-8"], [1, "clr-row", "clr-justify-content-between", "clr-align-items-end"], [4, "ngIf"], ["class", "btn", 3, "click", 4, "ngIf"], [3, "clrCloseMenuOnItemClick"], ["clrDropdownTrigger", "", 1, "btn", "btn-primary"], ["shape", "plus"], ["clrPosition", "bottom-right", 4, "clrIfOpen"], [1, "clr-row"], [2, "width", "100%", 3, "clrDgSelected", "clrDgSelectedChange"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["shape", "filter"], ["type", "button", "class", "btn btn-sm btn-magic", 3, "clrLoading", "click", 4, "ngIf"], [3, "clrDgItem", 4, "clrDgItems", "clrDgItemsOf"], [4, "clrIfDetail"], ["name", "options", 3, "ngModel", "ngModelChange"], ["value", "10"], ["value", "30"], ["value", "100"], ["value", "all"], [3, "clrModalSize", "clrModalOpen", "clrModalOpenChange"], [1, "modal-title"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "clrLoading", "click"], [3, "clrModalSize", "clrModalOpen", "clrModalOpenChange", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "clrLoading", "click"], [3, "clrModalOpen", "clrModalOpenChange"], [1, "modal-body"], ["class", "clr-row clr-align-items-center template-row", "style", "padding-left: 12px;", 4, "ngFor", "ngForOf"], [1, "clr-row", "clr-justify-content-end"], [1, "btn", "btn-sm", "btn-link", "btn-icon", 2, "margin", "24px 0 0 0", 3, "click"], ["shape", "plus", "dir", "right", "title", "This will open a blank template in the builder."], ["clrInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "btn", 3, "click"], ["shape", "scroll"], ["clrPosition", "bottom-right"], [4, "ngFor", "ngForOf"], ["clrDropdownItem", "", 3, "clrLoading", "click"], ["shape", "exclamation-triangle"], ["type", "button", 1, "btn", "btn-sm", "btn-magic", 3, "clrLoading", "click"], ["shape", "wand"], [3, "clrDgItem"], [1, "action-item", 3, "click"], ["shape", "login"], ["shape", "copy"], ["class", "action-item", 3, "click", 4, "ngIf"], [1, "clickable", 3, "click"], ["class", "label label-warning", 4, "ngIf"], ["shape", "trash", 1, "is-danger"], [1, "badge", "badge-light-blue"], [1, "label", "label-warning"], [1, "p5"], ["clrForm", "", "clrLayout", "compact", 3, "formGroup"], ["clrInput", "", "type", "text", "placeholder", "All", "formControlName", "idSearch"], ["clrInput", "", "type", "text", "placeholder", "All", "formControlName", "authorSearch"], ["type", "date", "name", "date", "formControlName", "coverageFrom", "clrDate", ""], ["type", "date", "name", "date", "formControlName", "coverageTo", "clrDate", ""], ["clrSelect", "", "name", "options", "formControlName", "completionStatus"], ["value", "All", "selected", "selected"], ["value", "complete"], ["value", "incomplete"], ["clrInline", "", 4, "ngIf"], ["clrInline", ""], ["clrSelect", "", "formControlName", "template"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["clrSelect", "", "formControlName", "branch"], [1, "clr-row", "clr-align-items-center", "template-row", 2, "padding-left", "12px"], ["clrDropdownTrigger", "", 1, "btn", "btn-link", "btn-sm", "btn-icon", 2, "padding", "0 12px 0 12px"], ["shape", "angle", "dir", "down"], ["clrPosition", "top-left", 4, "clrIfOpen"], ["clrPosition", "top-left"], ["aria-hidden", "true", 1, "dropdown-header"], ["clrDropdownItem", "", 3, "click"], ["shape", "angle-double", "dir", "right", 1, "is-highlight"], ["clrDropdownItem", "", 3, "click", 4, "ngIf", "ngIfElse"], ["showTempl", ""], ["shape", "eye-hide"], ["shape", "eye"]],
      template: function StartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StartComponent_div_1_Template, 10, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StartComponent_div_2_Template, 7, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, StartComponent_div_3_Template, 89, 27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tmp_2_0 = null;
          var currVal_2 = (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, ctx.user)) == null ? null : tmp_2_0.emailVerified;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showUnverifiedAlert);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailSent);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", currVal_2);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrAlertText"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDropdown"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDropdownTrigger"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrIfOpen"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ɵdj"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ɵdn"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ɵdr"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagridPlaceholder"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ɵdk"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagridActionBar"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrIfDetail"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagridFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrModal"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoadingButton"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLoading"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrModalBody"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrControlHelper"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDropdownMenu"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDropdownItem"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ɵdl"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagridActionOverflow"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ɵdm"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagridDetail"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagridDetailHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDatagridDetailBody"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrForm"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrLayout"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDateContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrDateInput"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrSelectContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_0__["ClrSelect"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
      styles: ["clr-dropdown[_ngcontent-%COMP%] {\r\n  margin: 6px 0px 6px;\r\n}\r\n\r\n.template-row[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  border: 1px solid gray;\r\n}\r\n\r\n.btn-magic[_ngcontent-%COMP%] {\r\n  border-color: purple;\r\n  color: white;\r\n  background-color: purple;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFydC9zdGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdGFydC9zdGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2xyLWRyb3Bkb3duIHtcclxuICBtYXJnaW46IDZweCAwcHggNnB4O1xyXG59XHJcblxyXG4udGVtcGxhdGUtcm93IHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxufVxyXG5cclxuLmJ0bi1tYWdpYyB7XHJcbiAgYm9yZGVyLWNvbG9yOiBwdXJwbGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-start',
          templateUrl: './start.component.html',
          styleUrls: ['./start.component.css']
        }]
      }], function () {
        return [{
          type: _services_template_service__WEBPACK_IMPORTED_MODULE_2__["TemplateService"]
        }, {
          type: src_app_services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ngx_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _services_constant_service__WEBPACK_IMPORTED_MODULE_8__["ConstantService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/constant.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/constant.service.ts ***!
    \**********************************************/

  /*! exports provided: ConstantService */

  /***/
  function srcAppServicesConstantServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConstantService", function () {
      return ConstantService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var ConstantService = /*#__PURE__*/function () {
      function ConstantService(_AngularFirestore) {
        var _this38 = this;

        _classCallCheck(this, ConstantService);

        this._AngularFirestore = _AngularFirestore;
        this._constants = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);

        var constDoc = this._AngularFirestore.doc('constants/constants');

        constDoc.valueChanges();
        constDoc.valueChanges().subscribe(function (constants) {
          console.log(constants);

          _this38._constants.next(constants);
        });
      }

      _createClass(ConstantService, [{
        key: "constants",
        get: function get() {
          return this._constants.asObservable();
        }
      }]);

      return ConstantService;
    }();

    ConstantService.ɵfac = function ConstantService_Factory(t) {
      return new (t || ConstantService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]));
    };

    ConstantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConstantService,
      factory: ConstantService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConstantService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/report.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/report.service.ts ***!
    \********************************************/

  /*! exports provided: ReportService */

  /***/
  function srcAppServicesReportServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportService", function () {
      return ReportService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var ReportService = /*#__PURE__*/function () {
      function ReportService(_AngularFirestore, _Router, _UserService) {
        _classCallCheck(this, ReportService);

        this._AngularFirestore = _AngularFirestore;
        this._Router = _Router;
        this._UserService = _UserService;
        this.report$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this._report); //undefined

        this.page$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this._page); //undefined
      }

      _createClass(ReportService, [{
        key: "openReport",
        value: function openReport(reportID) {
          var _this39 = this;

          var startPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return new Promise(function (resolve, reject) {
            var reportDoc = _this39._AngularFirestore.doc('/reports/' + reportID); //grab the requested


            reportDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (report) {
              _this39._report = report;

              _this39.report$.next(report);

              if (_this39._report === undefined) {
                console.error('[Report Serv] Report ' + reportID + ' does not exist.');
                reject();
              } else {
                reportDoc.collection('pages').doc(startPage.toString()).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (page) {
                  _this39._page = page;

                  _this39.page$.next(page);

                  console.log(_this39._page);
                  console.log('[Report Serv] Report and page successfully opened.');
                  resolve();
                });
              }
            });
          });
        }
      }, {
        key: "generateReportID",
        value: function generateReportID() {
          var _this40 = this;

          var checkUniqueness = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
          var override = arguments.length > 2 ? arguments[2] : undefined;
          return new Promise(function (resolve, reject) {
            var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
            var result = ''; //randomly generate a string if one isn't provided

            if (!navigator.onLine) {
              reject('offline');
            } else if (override) {
              result = override;
            } else {
              for (var i = length; i > 0; --i) {
                result += chars[Math.floor(Math.random() * chars.length)];
              }
            } //if enabled, check the uniqueness with the remote database


            if (checkUniqueness) {
              var reportCollection = _this40._AngularFirestore.collection('/reports', function (ref) {
                return ref.where('id', '==', result);
              });

              reportCollection.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (observer) {
                if (observer.length > 0) {
                  console.warn('[Report Serv] Generated ID is not unique. Retrying...');

                  _this40.generateReportID().then(function (result) {
                    return resolve(result);
                  });
                } else resolve(result);
              });
            } else resolve(result);
          });
        }
      }, {
        key: "createNewReport",
        value: function createNewReport(templateID) {
          var _this41 = this;

          return new Promise(function (resolve, reject) {
            if (!navigator.onLine) {
              reject();
            } else {
              var templateReport;

              var templateDoc = _this41._AngularFirestore.doc('/templates/' + templateID);

              templateDoc.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (report) {
                templateReport = report.data();

                _this41.generateReportID().then(function (newReportID) {
                  var reportDoc = _this41._AngularFirestore.doc('/reports/' + newReportID);

                  templateReport.id = newReportID;
                  templateReport.author = _this41._UserService.getUserSnapshot().email;
                  templateReport.branch = _this41._UserService.getUserSnapshot().branch;
                  reportDoc.set(templateReport).then( //create the pages in a collection
                  function () {
                    var pageCopyPromises = [];
                    templateReport.pageStatuses.forEach(function (status, index) {
                      var copyPromise = new Promise(function (resolve, reject) {
                        var fromDoc = templateDoc.collection('pages').doc(index.toString());
                        fromDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (page) {
                          var toDoc = reportDoc.collection('pages').doc(index.toString());
                          console.log(page);
                          toDoc.set(page).then(resolve)["catch"](reject);
                        }, reject);
                      });
                      pageCopyPromises.push(copyPromise);
                    }); //once all pages are copied, resolve with the new ID.

                    Promise.all(pageCopyPromises).then(function () {
                      return resolve(newReportID);
                    });
                  });
                });
              }, function (error) {
                console.error(error);
                reject();
              });
            }
          });
        }
      }, {
        key: "duplicateReport",
        value: function duplicateReport(reportID) {
          var _this42 = this;

          console.log('[Report Serv] Duplicating ' + reportID);
          return new Promise(function (resolve, reject) {
            //grab old template from database
            _this42._AngularFirestore.doc('/reports/' + reportID).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (originalReport) {
              var newReport = originalReport;
              console.log(newReport); //reset templateID, id

              _this42.generateReportID().then(function (newReportID) {
                newReport.templateID = originalReport.templateID;
                newReport.id = newReportID;
                newReport.completionStatus = 'incomplete'; //save new template to database

                _this42._AngularFirestore.doc('/reports/' + newReportID).set(newReport).then(function () {
                  var pagePromises = [];

                  var _loop2 = function _loop2(i) {
                    _this42._AngularFirestore.doc('/reports/' + reportID + '/pages/' + i.toString()).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (oldPage) {
                      pagePromises.push(_this42._AngularFirestore.doc('/reports/' + newReportID + '/pages/' + i.toString()).set(oldPage));
                    });
                  };

                  for (var i = 0; i < newReport.pageCount; i++) {
                    _loop2(i);
                  }

                  Promise.all(pagePromises).then(function () {
                    console.log('Report duplicated successfully.');
                    resolve(newReportID);
                  }, reject);
                }, reject);
              });
            }, reject);
          });
        } //this returns the full JSON string of a report with all its pages

      }, {
        key: "getMagicString",
        value: function getMagicString(reports) {
          var _this43 = this;

          return new Promise(function (resolve, reject) {
            var promiseList = [];
            reports.forEach(function (report) {
              promiseList.push(new Promise(function (resolve, reject) {
                var fullReport;
                var reportHeader;
                var pages = [];
                var pagePromises = [];

                _this43._AngularFirestore.doc('/reports/' + report.id).get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (docSnap) {
                  reportHeader = docSnap.data();

                  var _loop3 = function _loop3(i) {
                    pagePromises.push(new Promise(function (resolve, reject) {
                      _this43._AngularFirestore.doc('/reports/' + report.id + '/pages/' + i.toString()).get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (pageSnap) {
                        pages.push(pageSnap.data());
                        resolve();
                      }, reject);
                    }));
                  };

                  for (var i = 0; i < reportHeader.pageCount; i++) {
                    _loop3(i);
                  } //once all pages are finished loading


                  Promise.all(pagePromises).then(function () {
                    fullReport = {
                      id: reportHeader.id,
                      templateID: reportHeader.templateID,
                      title: reportHeader.title || null,
                      coverageDate: reportHeader.coverageDate || null,
                      submitDate: reportHeader.submitDate || null,
                      author: reportHeader.author || null,
                      branch: reportHeader.branch || null,
                      additionalInfo: reportHeader.additionalInfo || null,
                      pageStatuses: reportHeader.pageStatuses || null,
                      pageCount: reportHeader.pageCount,
                      completionStatus: reportHeader.completionStatus,
                      pages: pages
                    };
                    resolve(fullReport);
                  });
                });
              }));
            });
            Promise.all(promiseList).then(function (fullReports) {
              var resultString = JSON.stringify({
                reports: fullReports
              });
              resolve(resultString);
            }, reject);
          });
        }
      }, {
        key: "closeReport",
        value: function closeReport() {
          var redirectToHome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this._report = null;
          this.report$.next(null);

          if (redirectToHome) {
            //go to the home page when closed
            this._Router.navigate(['']);
          }

          console.log('[Report Serv] The report has been successfully closed.');
        }
      }, {
        key: "deleteReport",
        value: function deleteReport(report) {
          var _this44 = this;

          return new Promise(function (resolve, reject) {
            var reportDoc = _this44._AngularFirestore.doc('/reports/' + report.id); //delete all pages


            for (var i = 0; i < report.pageCount; i++) {
              var pageDoc = reportDoc.collection('pages').doc(i.toString());
              pageDoc["delete"]();
            }

            reportDoc["delete"]().then(function () {
              console.log('Report deleted');
              resolve();
            }, function (reason) {
              console.error('Deletion failed: ' + reason);
              reject();
            });
          });
        }
      }, {
        key: "openPage",
        value: function openPage(pageNumber) {
          var _this45 = this;

          console.log('[Report Serv] Opening page ' + pageNumber + '...');
          return new Promise(function (resolve, reject) {
            if (!_this45._report || !navigator.onLine) {
              console.error('[Report Serv] Cannot open page. No report is open or device offline.');
              reject();
            }

            var pageDoc = _this45._AngularFirestore.doc('/reports/' + _this45._report.id + '/pages/' + pageNumber.toString());

            pageDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (page) {
              _this45._page = page;

              _this45.page$.next(page);

              resolve();
            }, reject);
          });
        } //this marks the report as 'complete' and grants visibility to admins

      }, {
        key: "submitReport",
        value: function submitReport() {
          var _this46 = this;

          return new Promise(function (resolve, reject) {
            if (navigator.onLine === false) {
              console.error('[Report Serv] Cannot submit report. Device offline.');
              reject(); //reject if no report is open.
            }

            if (!_this46._report) {
              console.error('[Report Serv] Cannot submit report. None is open.');
              reject(); //reject if no report is open.
            }

            _this46._report.completionStatus = 'complete';
            _this46._report.submitDate = new Date().toISOString();
            _this46._report.author = _this46._UserService.getUserSnapshot().email;

            _this46.report$.next(_this46._report);

            _this46.saveReportOnline().then(function () {
              _this46.closeReport();

              resolve();
            }, reject);
          });
        }
      }, {
        key: "attachToBranch",
        value: function attachToBranch() {
          var updateOnline = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this._report.branch = this._UserService.getUserSnapshot().branch;
          this.report$.next(this._report);

          if (updateOnline) {
            this.saveReportOnline();
          }
        }
      }, {
        key: "getReportObservable",
        value: function getReportObservable() {
          return this.report$.asObservable();
        }
      }, {
        key: "getPageObservable",
        value: function getPageObservable() {
          return this.page$.asObservable();
        }
      }, {
        key: "saveReportOnline",
        value: function saveReportOnline() {
          var _this47 = this;

          return new Promise(function (resolve, reject) {
            if (!navigator.onLine) {
              console.error('[Report Serv] Cannot save report online. Device offline');
              reject();
            }

            if (_this47._report) {
              var reportDoc = _this47._AngularFirestore.doc('reports/' + _this47._report.id);

              reportDoc.set(_this47._report).then(function () {
                console.log('[Report Serv] Successfully saved report to server.');
                resolve();
              }, reject);
            } else {
              console.error('[Report Serv] Cannot save report online. None is open.');
              reject();
            }
          });
        }
      }, {
        key: "savePageOnline",
        value: function savePageOnline() {
          var _this48 = this;

          return new Promise(function (resolve, reject) {
            if (!navigator.onLine) {
              console.error('[Report Serv] Cannot save page online. Device offline');
              reject();
            }

            if (_this48._page) {
              var pageDoc = _this48._AngularFirestore.doc('reports/' + _this48._report.id + '/pages/' + _this48._page.index);

              pageDoc.set(_this48._page).then(function () {
                console.log('[Report Serv] Successfully saved page ' + _this48._page.index + ' to server.');
                resolve();
              }, reject);
            } else {
              console.error('[Report Serv] Cannot save page online. None is open.');
              reject();
            }
          });
        }
      }, {
        key: "setSectionValue",
        value: function setSectionValue(pageIndex, sectionIndex, value) {
          console.log(value);
        }
      }, {
        key: "setCoverageDate",
        value: function setCoverageDate(isoDate) {
          if (!isoDate || isNaN(new Date(isoDate).getTime())) {
            console.warn('[Report Serv] Cannot set coverage date. Invalid date.');
            return;
          }

          console.log('[Report Serv] Setting coverage date to ' + isoDate);
          this._report.coverageDate = isoDate;
          this.report$.next(this._report);
        }
      }, {
        key: "setSubmitDate",
        value: function setSubmitDate(isoDate) {
          if (isNaN(new Date(isoDate).getTime())) {
            console.error('[Report Serv] Cannot set coverage date. Invalid date.');
            return;
          }

          console.log('[Report Serv] Setting submit date to ' + isoDate);
          this._report.submitDate = isoDate;
          this.report$.next(this._report);
        }
      }, {
        key: "setAuthor",
        value: function setAuthor() {
          this._report.author = this._UserService.getUserSnapshot().email;
          this.report$.next(this._report);
        }
      }, {
        key: "setAdditionalInfo",
        value: function setAdditionalInfo(info) {
          console.log('[Report Serv] Setting additional info to ' + info);
          this._report.additionalInfo = info;
          this.report$.next(this._report);
        }
      }, {
        key: "setTitle",
        value: function setTitle(title) {
          console.log('[Report Serv] Setting title to ' + title);
          this._report.title = title;
        }
      }, {
        key: "setSubject",
        value: function setSubject(subject) {
          console.log('[Report Serv] Setting subject to ' + subject);
          this._report.title = subject;
        }
      }, {
        key: "setTags",
        value: function setTags(tags) {
          console.log('[Report Serv] Setting tags to ' + tags);
          this._report.tags = tags;
        }
      }, {
        key: "setPageStatus",
        value: function setPageStatus(pageIndex, status) {
          if (!(status === 'complete' || status === 'incomplete')) {
            console.warn('Is ' + status + ' a valid status?');
          }

          this._report.pageStatuses[pageIndex] = status;
          this.report$.next(this._report);
        }
      }, {
        key: "setCompletionStatus",
        value: function setCompletionStatus(status) {
          if (!(status === 'complete' || status === 'incomplete')) {
            console.warn('Is ' + status + ' a valid status?');
          }

          this._report.completionStatus = status;
        }
      }, {
        key: "fetchReports",
        value: function fetchReports(reportIDs) {
          var _this49 = this;

          var fetchPromises = [];
          reportIDs.forEach(function (reportID) {
            var reportDoc = _this49._AngularFirestore.doc('reports/' + reportID);

            var fetchPromise = new Promise(function (resolve, reject) {
              reportDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (report) {
                resolve(report);
              }, reject);
            });
            fetchPromises.push(fetchPromise);
          });
          return Promise.all(fetchPromises);
        }
      }, {
        key: "fetchAllReports",
        value: function fetchAllReports() {
          var _this50 = this;

          if (confirm('This will read all reports from the database, and may take a while. Are you sure?')) {
            return new Promise(function (resolve, reject) {
              var queryCollection = _this50._AngularFirestore.collection('/reports', function (ref) {
                return ref.orderBy('id');
              });

              queryCollection.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (reports) {
                resolve(reports);
              }, reject);
            });
          } else {
            return this.fetchAllReportsWithLimit(10);
          }
        }
      }, {
        key: "fetchAllReportsWithLimit",
        value: function fetchAllReportsWithLimit(sizeLimit) {
          var _this51 = this;

          return new Promise(function (resolve, reject) {
            var queryCollection = _this51._AngularFirestore.collection('/reports', function (ref) {
              return ref.limit(sizeLimit).orderBy('id');
            });

            queryCollection.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (reports) {
              resolve(reports);
            }, reject);
          });
        }
      }, {
        key: "fetchReportsByBranchWithLimit",
        value: function fetchReportsByBranchWithLimit(branch, sizeLimit) {
          var _this52 = this;

          return new Promise(function (resolve, reject) {
            var queryCollection = _this52._AngularFirestore.collection('/reports', function (ref) {
              return ref.where('branch', '==', branch).limit(sizeLimit).orderBy('id');
            });

            queryCollection.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (reports) {
              resolve(reports);
            }, reject);
          });
        }
      }, {
        key: "fetchReportsByBranch",
        value: function fetchReportsByBranch(branch) {
          var _this53 = this;

          return new Promise(function (resolve, reject) {
            var queryCollection = _this53._AngularFirestore.collection('/reports', function (ref) {
              return ref.where('branch', '==', branch).orderBy('id');
            });

            queryCollection.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (reports) {
              resolve(reports);
            }, reject);
          });
        }
      }, {
        key: "pushTemplateObjectToDB",
        value: function pushTemplateObjectToDB(template, pages) {
          var templateDoc = this._AngularFirestore.doc('/templates/' + template.templateID);

          templateDoc.set(template).then(function () {
            var pageCollection = templateDoc.collection('pages');
            pages.forEach(function (page, index) {
              pageCollection.doc(index.toString()).set(page);
            });
          });
        }
      }, {
        key: "getFullReportCount",
        value: function getFullReportCount() {
          var _this54 = this;

          console.log('[Report Serv] Getting full report count');
          return new Promise(function (resolve, reject) {
            _this54._AngularFirestore.collection('/reports').get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (snapshot) {
              resolve(snapshot.size);
            }, reject);
          });
        }
      }, {
        key: "getReportCountByBranch",
        value: function getReportCountByBranch(branchName) {
          var _this55 = this;

          console.log('[Report Serv] Getting report count for ' + branchName);
          return new Promise(function (resolve, reject) {
            _this55._AngularFirestore.collection('/reports', function (ref) {
              return ref.where('branch', '==', branchName);
            }).get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (snapshot) {
              resolve(snapshot.size);
            }, reject);
          });
        }
      }, {
        key: "report",
        get: function get() {
          return this._report;
        }
      }, {
        key: "page",
        get: function get() {
          return this._page;
        }
      }]);

      return ReportService;
    }();

    ReportService.ɵfac = function ReportService_Factory(t) {
      return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
    };

    ReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ReportService,
      factory: ReportService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/template.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/template.service.ts ***!
    \**********************************************/

  /*! exports provided: TemplateService */

  /***/
  function srcAppServicesTemplateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateService", function () {
      return TemplateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");

    var TemplateService = /*#__PURE__*/function () {
      function TemplateService(_AngularFirestore, _Router, _UserServ) {
        var _this56 = this;

        _classCallCheck(this, TemplateService);

        this._AngularFirestore = _AngularFirestore;
        this._Router = _Router;
        this._UserServ = _UserServ;
        this._templateNames = [];
        this._templates = new Map();
        this.templates$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this._templates);

        _AngularFirestore.collection('templates').get().subscribe(function (snapshot) {
          snapshot.forEach(function (doc) {
            _this56._templates.set(doc.id, doc.data());

            _this56._templateNames.push(doc.id);
          });

          _this56.templates$.next(_this56._templates);
        });

        this._UserServ.getUserObservable().subscribe(function (user) {
          console.log('[Template Serv] User changed, refreshing template list');

          _this56.refreshTemplateList();
        });
      }

      _createClass(TemplateService, [{
        key: "refreshTemplateList",
        value: function refreshTemplateList() {
          var _this57 = this;

          this._AngularFirestore.collection('templates').get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (snapshot) {
            _this57._templateNames = [];

            _this57._templates.clear();

            snapshot.forEach(function (doc) {
              _this57._templates.set(doc.id, doc.data());

              _this57._templateNames.push(doc.id);
            });
            console.log(_this57._templateNames);

            _this57.templates$.next(_this57._templates);
          });
        }
      }, {
        key: "markHidden",
        value: function markHidden(templateID) {
          var _this58 = this;

          return new Promise(function (resolve, reject) {
            var doc = _this58._AngularFirestore.doc('/templates/' + templateID);

            doc.get().subscribe(function (docSnapshot) {
              if (docSnapshot.exists) {
                doc.update({
                  hidden: true
                }).then(function () {
                  var oldTemplate = _this58._templates.get(templateID);

                  oldTemplate.hidden = true;

                  _this58._templates.set(templateID, oldTemplate);

                  resolve();
                }, reject);
              } else {
                console.error('Cannot mark ' + templateID + ' as hidden. Template does not exist.');
                reject();
              }
            });
          });
        }
      }, {
        key: "markVisible",
        value: function markVisible(templateID) {
          var _this59 = this;

          return new Promise(function (resolve, reject) {
            var doc = _this59._AngularFirestore.doc('/templates/' + templateID);

            doc.get().subscribe(function (docSnapshot) {
              if (docSnapshot.exists) {
                doc.update({
                  hidden: false
                }).then(function () {
                  var oldTemplate = _this59._templates.get(templateID);

                  oldTemplate.hidden = false;

                  _this59._templates.set(templateID, oldTemplate);

                  resolve();
                }, reject);
              } else {
                console.error('Cannot mark ' + templateID + ' as visible. Template does not exist.');
                reject();
              }
            });
          });
        }
      }, {
        key: "openTemplate",
        value: function openTemplate(templateID) {
          console.log('[Template Serv] Opening ' + templateID);

          this._Router.navigate(['builder'], {
            queryParams: {
              open: templateID
            }
          });
        }
      }, {
        key: "duplicateTemplate",
        value: function duplicateTemplate(templateID, newTemplateID) {
          var _this60 = this;

          console.log('[Template Serv] Duplicating ' + templateID);
          return new Promise(function (resolve, reject) {
            //grab old template from database
            _this60._AngularFirestore.doc('/templates/' + templateID).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (template) {
              var newTemplate = template; //reset templateID, id

              newTemplate.templateID = newTemplateID;
              newTemplate.id = ''; //save new template to database

              _this60._AngularFirestore.doc('/templates/' + newTemplateID).set(newTemplate).then(function () {
                var pagePromises = [];

                var _loop4 = function _loop4(i) {
                  _this60._AngularFirestore.doc('/templates/' + templateID + '/pages/' + i.toString()).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (page) {
                    pagePromises.push(_this60._AngularFirestore.doc('/templates/' + newTemplateID + '/pages/' + i.toString()).set(page));
                  });
                };

                for (var i = 0; i < newTemplate.pageCount; i++) {
                  _loop4(i);
                }

                Promise.all(pagePromises).then(function () {
                  console.log('Template duplicated successfully.');

                  _this60.refreshTemplateList();

                  resolve();
                }, reject);
              }, reject);
            }, reject);
          });
        }
      }, {
        key: "deleteTemplate",
        value: function deleteTemplate(templateID) {
          var _this61 = this;

          console.log('[Template Serv] Deleting ' + templateID);
          return new Promise(function (resolve, reject) {
            var templateDoc = _this61._AngularFirestore.doc('/templates/' + templateID);

            var template = _this61._templates.get(templateID);

            var confirmation = prompt('Are you sure? To delete, type "confirm": ', '');

            if (!(confirmation && confirmation == 'confirm')) {
              reject();
            } else {
              if (!template) {
                reject();
              } else {
                //delete all pages
                for (var i = 0; i < template.pageCount; i++) {
                  _this61._AngularFirestore.doc('/templates/' + templateID + '/pages/' + i.toString())["delete"]();
                }

                templateDoc["delete"]().then(function () {
                  _this61.refreshTemplateList();

                  console.log('Deleted ' + templateDoc.ref.path);
                  resolve();
                }, reject);
              }
            }
          });
        }
      }, {
        key: "newTemplate",
        value: function newTemplate() {
          console.log('[Template Serv] Opening fresh template');

          this._Router.navigate(['builder']);
        }
      }, {
        key: "saveTemplate",
        value: function saveTemplate(template) {
          var _this62 = this;

          return new Promise(function (resolve, reject) {
            console.log('[Template Serv] Saving template ' + template.templateID + '...');
            var templateHeader = {
              id: template.id,
              templateID: template.templateID,
              pageCount: template.pageCount,
              pageStatuses: template.pageStatuses,
              completionStatus: template.completionStatus
            };

            _this62._AngularFirestore.doc('/templates/' + template.templateID).set(templateHeader).then(function () {
              var pagePromises = [];
              template.pages.forEach(function (page) {
                pagePromises.push(_this62._AngularFirestore.doc('/templates/' + template.templateID + '/pages/' + page.index.toString()).set(page));
              });
              Promise.all(pagePromises).then(function () {
                console.log('[Template Serv] Template saved.');
                resolve();
              }, reject);
            }, reject);
          });
        }
      }, {
        key: "markTemplateHidden",
        value: function markTemplateHidden(templateID) {
          return new Promise(function (resolve, reject) {});
        }
      }, {
        key: "templateNames",
        get: function get() {
          return this._templateNames;
        }
      }, {
        key: "visibleTemplates",
        get: function get() {
          var templates = [];

          this._templates.forEach(function (val, key, map) {
            if (!val.hidden) {
              templates.push(val);
            }
          });

          return templates;
        }
      }, {
        key: "templateObservable",
        get: function get() {
          return this.templates$.asObservable();
        }
      }, {
        key: "templateSnapshot",
        get: function get() {
          return this._templates;
        }
      }]);

      return TemplateService;
    }();

    TemplateService.ɵfac = function TemplateService_Factory(t) {
      return new (t || TemplateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
    };

    TemplateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TemplateService,
      factory: TemplateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(_AngularFireAuth, _AngularFirestore) {
        var _this63 = this;

        _classCallCheck(this, UserService);

        this._AngularFireAuth = _AngularFireAuth;
        this._AngularFirestore = _AngularFirestore;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);

        _AngularFireAuth.user.subscribe(function (authUser) {
          if (!authUser) {
            //if no user is logged in, set the user to null
            _this63._user = null;

            _this63.user$.next(_this63._user);
          } else {
            //else fetch the user data from the server
            var userDoc = _AngularFirestore.doc('users/' + authUser.email);

            userDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (user) {
              if (user.emailVerified !== authUser.emailVerified) {
                userDoc.update({
                  emailVerified: authUser.emailVerified
                }).then(function () {
                  user.emailVerified = authUser.emailVerified;
                  _this63._user = user;

                  _this63.user$.next(_this63._user);
                });
              } else {
                _this63._user = user;

                _this63.user$.next(_this63._user);
              }
            });
          }
        });
      }

      _createClass(UserService, [{
        key: "logIn",
        value: function logIn(email, password) {
          var _this64 = this;

          return new Promise(function (resolve, reject) {
            _this64._AngularFireAuth.signInWithEmailAndPassword(email, password).then(function (value) {
              console.log('[User Serv] Logged in');
              resolve();
            }, function (reason) {
              console.error('[User Serv] Login failed: ' + reason);
              reject();
            });
          });
        }
      }, {
        key: "logOut",
        value: function logOut() {
          var _this65 = this;

          return new Promise(function (resolve, reject) {
            _this65._AngularFireAuth.signOut().then(function (value) {
              console.log('[User Serv] Signed out');
              resolve();
            }, function (reason) {
              console.error('[User Serv] Signout failed: ' + reason);
              reject();
            });
          });
        }
      }, {
        key: "createAccount",
        value: function createAccount(user, password) {
          var _this66 = this;

          return new Promise(function (resolve, reject) {
            _this66._AngularFireAuth.createUserWithEmailAndPassword(user.email, password).then(function (authcred) {
              _this66._AngularFirestore.doc('users/' + user.email).set(user).then(resolve)["catch"](function (error) {
                console.log('[User Serv] Error creating account: ' + error);
                reject(error);
              });
            })["catch"](function (error) {
              console.log('[User Serv] Error creating account: ' + error);
              reject(error);
            });
          });
        }
      }, {
        key: "getUserObservable",
        value: function getUserObservable() {
          return this.user$.asObservable();
        }
      }, {
        key: "getUserSnapshot",
        value: function getUserSnapshot() {
          return this._user;
        }
      }, {
        key: "setBranch",
        value: function setBranch(newBranch) {
          var _this67 = this;

          var userDoc = this._AngularFirestore.doc('users/' + this._user.email);

          return userDoc.update({
            branch: newBranch
          }).then(function () {
            _this67._user.branch = newBranch;
          });
        }
      }, {
        key: "sendVerificationEmail",
        value: function sendVerificationEmail() {
          return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.sendEmailVerification().then(resolve, reject);
          });
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/env.ts":
  /*!***************************!*\
    !*** ./src/assets/env.ts ***!
    \***************************/

  /*! exports provided: config */

  /***/
  function srcAssetsEnvTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "config", function () {
      return config;
    });

    var config = {
      firebase: {
        apiKey: 'AIzaSyBjMPuySzya4rhD6IZTYYIPFKAKS342rsI',
        authDomain: 'ebrpl-reporting.firebaseapp.com',
        databaseURL: 'https://ebrpl-reporting.firebaseio.com',
        projectId: 'ebrpl-reporting',
        storageBucket: 'ebrpl-reporting.appspot.com',
        messagingSenderId: '776684824485',
        appId: '1:776684824485:web:fef2d9dfec9715b6ab6a4c'
      }
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyBjMPuySzya4rhD6IZTYYIPFKAKS342rsI',
        authDomain: 'ebrpl-reporting.firebaseapp.com',
        databaseURL: 'https://ebrpl-reporting.firebaseio.com',
        projectId: 'ebrpl-reporting',
        storageBucket: 'ebrpl-reporting.appspot.com',
        messagingSenderId: '776684824485',
        appId: '1:776684824485:web:fef2d9dfec9715b6ab6a4c'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Documents\ebrpl\report-assistant\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map