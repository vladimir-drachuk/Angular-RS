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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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


    var _response_example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./response/example */
    "./src/app/response/example.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/cards-list/cards-list.component */
    "./src/app/components/cards-list/cards-list.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'youtube-client-app';
        this.fetchResult = [];
      }

      _createClass(AppComponent, [{
        key: "setFetchResult",
        value: function setFetchResult() {
          this.fetchResult = _response_example__WEBPACK_IMPORTED_MODULE_1__["response"].items;
        }
      }, {
        key: "setSortResult",
        value: function setSortResult(criteria) {
          this.typeSort = criteria;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 2,
      consts: [[3, "getFetch", "getSort"], [3, "resultCards", "resultSort"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getFetch", function AppComponent_Template_app_header_getFetch_0_listener($event) {
            return ctx.setFetchResult();
          })("getSort", function AppComponent_Template_app_header_getSort_0_listener($event) {
            return ctx.setSortResult($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cards-list", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resultCards", ctx.fetchResult)("resultSort", ctx.typeSort);
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_3__["CardsListComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/search-panel/search-panel.component */
    "./src/app/components/search-panel/search-panel.component.ts");
    /* harmony import */


    var _components_sort_panel_sort_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/sort-panel/sort-panel.component */
    "./src/app/components/sort-panel/sort-panel.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/cards-list/cards-list.component */
    "./src/app/components/cards-list/cards-list.component.ts");
    /* harmony import */


    var _components_cards_item_cards_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/cards-item/cards-item.component */
    "./src/app/components/cards-item/cards-item.component.ts");
    /* harmony import */


    var _pipes_sort_cards_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pipes/sort-cards.pipe */
    "./src/app/pipes/sort-cards.pipe.ts");
    /* harmony import */


    var _directives_cards_board_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./directives/cards-board.directive */
    "./src/app/directives/cards-board.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_5__["SearchPanelComponent"], _components_sort_panel_sort_panel_component__WEBPACK_IMPORTED_MODULE_6__["SortPanelComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _components_cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_8__["CardsListComponent"], _components_cards_item_cards_item_component__WEBPACK_IMPORTED_MODULE_9__["CardsItemComponent"], _pipes_sort_cards_pipe__WEBPACK_IMPORTED_MODULE_10__["SortCardsPipe"], _directives_cards_board_directive__WEBPACK_IMPORTED_MODULE_11__["CardsBoardDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_5__["SearchPanelComponent"], _components_sort_panel_sort_panel_component__WEBPACK_IMPORTED_MODULE_6__["SortPanelComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _components_cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_8__["CardsListComponent"], _components_cards_item_cards_item_component__WEBPACK_IMPORTED_MODULE_9__["CardsItemComponent"], _pipes_sort_cards_pipe__WEBPACK_IMPORTED_MODULE_10__["SortCardsPipe"], _directives_cards_board_directive__WEBPACK_IMPORTED_MODULE_11__["CardsBoardDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/cards-item/cards-item.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/cards-item/cards-item.component.ts ***!
    \***************************************************************/

  /*! exports provided: CardsItemComponent */

  /***/
  function srcAppComponentsCardsItemCardsItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsItemComponent", function () {
      return CardsItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardsItemComponent = function CardsItemComponent() {
      _classCallCheck(this, CardsItemComponent);
    };

    CardsItemComponent.ɵfac = function CardsItemComponent_Factory(t) {
      return new (t || CardsItemComponent)();
    };

    CardsItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardsItemComponent,
      selectors: [["app-cards-item"]],
      inputs: {
        item: "item"
      },
      decls: 22,
      vars: 6,
      consts: [["alt", "video-img", 1, "card-image", 3, "src"], [1, "statistics"], [1, "statistics__item"], ["src", "../../../assets/images/viewed.png", 1, "statistics__icon"], [1, "statistics__amount"], ["src", "../../../assets/images/liked.png", 1, "statistics__icon"], ["src", "../../../assets/images/dislike.png", 1, "statistics__icon"], ["src", "../../../assets/images/comment.png", 1, "statistics__icon"]],
      template: function CardsItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "more...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.item.snippet.thumbnails.medium.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.statistics.viewCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.statistics.likeCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.statistics.dislikeCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.statistics.commentCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.snippet.title);
        }
      },
      styles: ["@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-Regular.ttf');\n}\n[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 263px;\n  height: 327px;\n  background-color: #E5E5E5;\n  border-radius: 5px;\n  margin: 15px;\n  padding: 0 20px;\n}\n[_nghost-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 223px;\n  height: 123px;\n}\n[_nghost-%COMP%]   .statistics[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin: 20px 0;\n}\n[_nghost-%COMP%]   .statistics__item[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n[_nghost-%COMP%]   .statistics__icon[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n[_nghost-%COMP%]   .statistics__amount[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 10px;\n  line-height: 12px;\n  color: #000000;\n}\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 20px;\n  line-height: 23px;\n  text-align: right;\n  color: #4F4F4F;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 32px;\n  color: white;\n  background: #2F80ED;\n  border-radius: 5px;\n  margin-top: 60px;\n  border: none;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #5EA2FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy1pdGVtL0U6XFzQktC+0LLQsC0g0YTQu9C10YXQsFxcVHJhaW5pbmdcXFJTU2Nob29sXFx5b3V0dWJlLWNsaWVudFxceW91dHViZS1jbGllbnQtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYXJkcy1pdGVtXFxjYXJkcy1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhcmRzLWl0ZW0vY2FyZHMtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsOEJBQUE7QUNDSjtBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQUo7QURFSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNBUjtBREdJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0RSO0FER1E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRFo7QURJUTtFQUNJLGlCQUFBO0FDRlo7QURLUTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0haO0FET0k7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNMUjtBRFFJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNOUjtBRE9RO0VBQ0ksbUJBQUE7QUNMWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZHMtaXRlbS9jYXJkcy1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gICAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0Zik7XG59XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMjYzcHg7XG4gICAgaGVpZ2h0OiAzMjdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuXG4gICAgLmNhcmQtaW1hZ2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB3aWR0aDogMjIzcHg7XG4gICAgICAgIGhlaWdodDogMTIzcHg7XG4gICAgfVxuXG4gICAgLnN0YXRpc3RpY3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuXG4gICAgICAgICZfX2l0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmX19pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fYW1vdW50IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGNvbG9yOiAjNEY0RjRGO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzJGODBFRDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNUVBMkZGO1xuICAgICAgICB9XG4gICAgfVxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0Zik7XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyNjNweDtcbiAgaGVpZ2h0OiAzMjdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDE1cHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbjpob3N0IC5jYXJkLWltYWdlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDIyM3B4O1xuICBoZWlnaHQ6IDEyM3B4O1xufVxuOmhvc3QgLnN0YXRpc3RpY3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuOmhvc3QgLnN0YXRpc3RpY3NfX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLnN0YXRpc3RpY3NfX2ljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cbjpob3N0IC5zdGF0aXN0aWNzX19hbW91bnQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG46aG9zdCBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbjpob3N0IGJ1dHRvbiB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMyRjgwRUQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNUVBMkZGO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cards-item',
          templateUrl: './cards-item.component.html',
          styleUrls: ['./cards-item.component.scss']
        }]
      }], null, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/cards-list/cards-list.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/cards-list/cards-list.component.ts ***!
    \***************************************************************/

  /*! exports provided: CardsListComponent */

  /***/
  function srcAppComponentsCardsListCardsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsListComponent", function () {
      return CardsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _cards_item_cards_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cards-item/cards-item.component */
    "./src/app/components/cards-item/cards-item.component.ts");
    /* harmony import */


    var _directives_cards_board_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../directives/cards-board.directive */
    "./src/app/directives/cards-board.directive.ts");
    /* harmony import */


    var _pipes_sort_cards_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../pipes/sort-cards.pipe */
    "./src/app/pipes/sort-cards.pipe.ts");

    function CardsListComponent_app_cards_item_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cards-item", 2);
      }

      if (rf & 2) {
        var item_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r8);
      }
    }

    var CardsListComponent = function CardsListComponent() {
      _classCallCheck(this, CardsListComponent);
    };

    CardsListComponent.ɵfac = function CardsListComponent_Factory(t) {
      return new (t || CardsListComponent)();
    };

    CardsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardsListComponent,
      selectors: [["app-cards-list"]],
      inputs: {
        resultCards: "resultCards",
        resultSort: "resultSort"
      },
      decls: 3,
      vars: 4,
      consts: [[1, "items-container"], ["appCardsBoard", "", 3, "item", 4, "ngFor", "ngForOf"], ["appCardsBoard", "", 3, "item"]],
      template: function CardsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardsListComponent_app_cards_item_1_Template, 1, 1, "app-cards-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "sortCards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx.resultCards, ctx.resultSort));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _cards_item_cards_item_component__WEBPACK_IMPORTED_MODULE_2__["CardsItemComponent"], _directives_cards_board_directive__WEBPACK_IMPORTED_MODULE_3__["CardsBoardDirective"]],
      pipes: [_pipes_sort_cards_pipe__WEBPACK_IMPORTED_MODULE_4__["SortCardsPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.items-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  max-width: 1440px;\n  margin: 0 87px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy1saXN0L0U6XFzQktC+0LLQsC0g0YTQu9C10YXQsFxcVHJhaW5pbmdcXFJTU2Nob29sXFx5b3V0dWJlLWNsaWVudFxceW91dHViZS1jbGllbnQtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYXJkcy1saXN0XFxjYXJkcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhcmRzLWxpc3QvY2FyZHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmRzLWxpc3QvY2FyZHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaXRlbXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgICBtYXJnaW46IDAgODdweDtcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaXRlbXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIG1hcmdpbjogMCA4N3B4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cards-list',
          templateUrl: './cards-list.component.html',
          styleUrls: ['./cards-list.component.scss']
        }]
      }], null, {
        resultCards: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resultSort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../search-panel/search-panel.component */
    "./src/app/components/search-panel/search-panel.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sort_panel_sort_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../sort-panel/sort-panel.component */
    "./src/app/components/sort-panel/sort-panel.component.ts");

    function HeaderComponent_app_sort_panel_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sort-panel", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function HeaderComponent_app_sort_panel_2_Template_app_sort_panel_sort_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.routeForSort($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.getFetch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getSort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showSortPanel = false;
      }

      _createClass(HeaderComponent, [{
        key: "toggleSortPanel",
        value: function toggleSortPanel() {
          this.showSortPanel = !this.showSortPanel;
        }
      }, {
        key: "routeForSort",
        value: function routeForSort(criteria) {
          this.getSort.emit(criteria);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      outputs: {
        getFetch: "getFetch",
        getSort: "getSort"
      },
      decls: 3,
      vars: 1,
      consts: [[3, "sortButtonClicked", "searchButtonClicked"], [3, "sort", 4, "ngIf"], [3, "sort"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-panel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortButtonClicked", function HeaderComponent_Template_app_search_panel_sortButtonClicked_0_listener($event) {
            return ctx.toggleSortPanel();
          })("searchButtonClicked", function HeaderComponent_Template_app_search_panel_searchButtonClicked_0_listener($event) {
            return ctx.getFetch.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_app_sort_panel_2_Template, 1, 0, "app-sort-panel", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSortPanel);
        }
      },
      directives: [_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_1__["SearchPanelComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _sort_panel_sort_panel_component__WEBPACK_IMPORTED_MODULE_4__["SortPanelComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], null, {
        getFetch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        getSort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent() {
        _classCallCheck(this, RegisterComponent);
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)();
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 3,
      vars: 0,
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button");
        }
      },
      styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #E5E5E5;\n  right: 188px;\n  top: 21px;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  line-height: 14px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 23px;\n  margin: 8px;\n  background-image: url('register.png');\n  background-repeat: no-repeat;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-image: url('register-hover.png');\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9FOlxc0JLQvtCy0LAtINGE0LvQtdGF0LBcXFRyYWluaW5nXFxSU1NjaG9vbFxceW91dHViZS1jbGllbnRcXHlvdXR1YmUtY2xpZW50LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NKO0FEQ0k7RUFDSSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ1I7QURFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQVI7QURDUTtFQUNJLDJDQUFBO0VBQ0EsNEJBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xuICAgIHJpZ2h0OiAxODhweDtcbiAgICB0b3A6IDIxcHg7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICM0RjRGNEY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDIzcHg7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9yZWdpc3Rlci5wbmcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3JlZ2lzdGVyLWhvdmVyLnBuZyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgfVxufSIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xuICByaWdodDogMTg4cHg7XG4gIHRvcDogMjFweDtcbn1cbjpob3N0IHNwYW4ge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IGJ1dHRvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbjogOHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9yZWdpc3Rlci5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmVnaXN0ZXItaG92ZXIucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/search-panel/search-panel.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/search-panel/search-panel.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SearchPanelComponent */

  /***/
  function srcAppComponentsSearchPanelSearchPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPanelComponent", function () {
      return SearchPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchPanelComponent =
    /*#__PURE__*/
    function () {
      function SearchPanelComponent() {
        _classCallCheck(this, SearchPanelComponent);

        this.sortButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SearchPanelComponent, [{
        key: "search",
        value: function search(event) {
          event.preventDefault();
          this.searchButtonClicked.emit();
        }
      }]);

      return SearchPanelComponent;
    }();

    SearchPanelComponent.ɵfac = function SearchPanelComponent_Factory(t) {
      return new (t || SearchPanelComponent)();
    };

    SearchPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchPanelComponent,
      selectors: [["app-search-panel"]],
      outputs: {
        sortButtonClicked: "sortButtonClicked",
        searchButtonClicked: "searchButtonClicked"
      },
      decls: 5,
      vars: 0,
      consts: [["src", "../../../assets/images/logo.png"], [1, "form", 3, "submit"], ["type", "text", 1, "search-input"], ["type", "submit", "value", "search", 1, "search-button"], [1, "sort-button", 3, "click"]],
      template: function SearchPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SearchPanelComponent_Template_form_submit_1_listener($event) {
            return ctx.search($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPanelComponent_Template_button_click_4_listener($event) {
            return ctx.sortButtonClicked.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-Regular.ttf');\n}\n[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #E5E5E5;\n  height: 80px;\n}\n[_nghost-%COMP%]   .form[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 10px;\n}\n[_nghost-%COMP%]   .form[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 24px;\n  background: #2F80ED;\n  border-radius: 0px 4px 4px 0px;\n  border: none;\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  line-height: 14px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .form[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%]:hover {\n  background: #76B2FF;\n}\n[_nghost-%COMP%]   .form[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 396px;\n  border: none;\n}\n[_nghost-%COMP%]   .sort-button[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background: #2F80ED;\n  background-image: url('sort.png');\n  background-origin: content-box;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n  border: none;\n  padding: 4px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .sort-button[_ngcontent-%COMP%]:hover {\n  background: #76B2FF;\n  background-image: url('sort.png');\n  background-origin: content-box;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcGFuZWwvRTpcXNCS0L7QstCwLSDRhNC70LXRhdCwXFxUcmFpbmluZ1xcUlNTY2hvb2xcXHlvdXR1YmUtY2xpZW50XFx5b3V0dWJlLWNsaWVudC1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlYXJjaC1wYW5lbFxcc2VhcmNoLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1wYW5lbC9zZWFyY2gtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0FDQ0o7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQUo7QURFSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGNBQUE7QUNBUjtBREVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBWjtBRENZO0VBQ0ksbUJBQUE7QUNDaEI7QURHUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDRFo7QURNSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0pSO0FES1E7RUFDSSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtBQ0haIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcGFuZWwvc2VhcmNoLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gICAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0Zik7XG59XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcbiAgICBoZWlnaHQ6IDgwcHg7XG5cbiAgICAuZm9ybXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG5cbiAgICAgICAgLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMkY4MEVEO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzZCMkZGO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5zZWFyY2gtaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDM5NnB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAuc29ydC1idXR0b24ge1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMkY4MEVEO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zb3J0LnBuZyk7XG4gICAgICAgIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3NkIyRkY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zb3J0LnBuZyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgfVxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0Zik7XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xuICBoZWlnaHQ6IDgwcHg7XG59XG46aG9zdCAuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuOmhvc3QgLmZvcm0gLnNlYXJjaC1idXR0b24ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjMkY4MEVEO1xuICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLmZvcm0gLnNlYXJjaC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNzZCMkZGO1xufVxuOmhvc3QgLmZvcm0gLnNlYXJjaC1pbnB1dCB7XG4gIHdpZHRoOiAzOTZweDtcbiAgYm9yZGVyOiBub25lO1xufVxuOmhvc3QgLnNvcnQtYnV0dG9uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZDogIzJGODBFRDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc29ydC5wbmcpO1xuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5zb3J0LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM3NkIyRkY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NvcnQucG5nKTtcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-panel',
          templateUrl: './search-panel.component.html',
          styleUrls: ['./search-panel.component.scss']
        }]
      }], null, {
        sortButtonClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        searchButtonClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/sort-panel/sort-panel.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/sort-panel/sort-panel.component.ts ***!
    \***************************************************************/

  /*! exports provided: SortPanelComponent */

  /***/
  function srcAppComponentsSortPanelSortPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortPanelComponent", function () {
      return SortPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["dateElem"];
    var _c1 = ["viewElem"];

    var SortPanelComponent =
    /*#__PURE__*/
    function () {
      function SortPanelComponent() {
        _classCallCheck(this, SortPanelComponent);

        this.sortItems = [];
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SortPanelComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.sortItems.push(this.dateElem.nativeElement, this.viewElem.nativeElement);
        }
      }, {
        key: "underlineAdd",
        value: function underlineAdd(elem) {
          this.sortItems.forEach(function (item) {
            item.classList.remove('underline');
          });
          elem.classList.add('underline');
        }
      }, {
        key: "sortChange",
        value: function sortChange(input, elem, criteria) {
          if (elem) {
            this.underlineAdd(elem);
          }

          if (!criteria) {
            criteria = this.sortType;
          } else {
            this.sortType = criteria;
          }

          this.sort.emit([criteria, input]);
        }
      }]);

      return SortPanelComponent;
    }();

    SortPanelComponent.ɵfac = function SortPanelComponent_Factory(t) {
      return new (t || SortPanelComponent)();
    };

    SortPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SortPanelComponent,
      selectors: [["app-sort-panel"]],
      viewQuery: function SortPanelComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dateElem = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewElem = _t.first);
        }
      },
      outputs: {
        sort: "sort"
      },
      decls: 12,
      vars: 0,
      consts: [[1, "sort-type", 3, "click"], ["dateElem", ""], ["viewElem", ""], [1, "sort-type", "filter"], ["type", "text", 3, "input"], ["byWord", ""]],
      template: function SortPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sorting by:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortPanelComponent_Template_span_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return ctx.sortChange(_r5.value, _r3, "date");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 0, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortPanelComponent_Template_span_click_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            return ctx.sortChange(_r5.value, _r4, "view");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "count of views");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "by word or sentance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SortPanelComponent_Template_input_input_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            return ctx.sortChange(_r5.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-Regular.ttf');\n}\n[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #E5E5E5;\n  height: 50px;\n  padding-right: 88px;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 149px;\n  height: 13px;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  line-height: 14px;\n  color: #929292;\n  cursor: default;\n}\n[_nghost-%COMP%]   .sort-type[_ngcontent-%COMP%] {\n  color: #2F80ED;\n  padding: 10px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .filter[_ngcontent-%COMP%] {\n  cursor: default;\n}\n[_nghost-%COMP%]   .underline[_ngcontent-%COMP%] {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3J0LXBhbmVsL0U6XFzQktC+0LLQsC0g0YTQu9C10YXQsFxcVHJhaW5pbmdcXFJTU2Nob29sXFx5b3V0dWJlLWNsaWVudFxceW91dHViZS1jbGllbnQtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzb3J0LXBhbmVsXFxzb3J0LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NvcnQtcGFuZWwvc29ydC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsOEJBQUE7QUNDSjtBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0FKO0FERUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0FSO0FER0k7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRFI7QURJSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FES0k7RUFDSSxlQUFBO0FDSFI7QURNSTtFQUNJLHVDQUFBO1VBQUEsK0JBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29ydC1wYW5lbC9zb3J0LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gICAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0Zik7XG59XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogODhweDtcblxuICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDE0OXB4O1xuICAgICAgICBoZWlnaHQ6IDEzcHg7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICBjb2xvcjogIzkyOTI5MjtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cblxuICAgIC5zb3J0LXR5cGUge1xuICAgICAgICBjb2xvcjogIzJGODBFRDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5maWx0ZXIge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuXG4gICAgLnVuZGVybGluZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgfVxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0Zik7XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDg4cHg7XG59XG46aG9zdCBpbnB1dCB7XG4gIHdpZHRoOiAxNDlweDtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuOmhvc3Qgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBjb2xvcjogIzkyOTI5MjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuOmhvc3QgLnNvcnQtdHlwZSB7XG4gIGNvbG9yOiAjMkY4MEVEO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAuZmlsdGVyIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuOmhvc3QgLnVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sort-panel',
          templateUrl: './sort-panel.component.html',
          styleUrls: ['./sort-panel.component.scss']
        }]
      }], null, {
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dateElem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['dateElem', {
            static: false
          }]
        }],
        viewElem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['viewElem', {
            static: false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/directives/cards-board.directive.ts":
  /*!*****************************************************!*\
    !*** ./src/app/directives/cards-board.directive.ts ***!
    \*****************************************************/

  /*! exports provided: CardsBoardDirective */

  /***/
  function srcAppDirectivesCardsBoardDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsBoardDirective", function () {
      return CardsBoardDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardsBoardDirective =
    /*#__PURE__*/
    function () {
      function CardsBoardDirective(elem, renderer2) {
        _classCallCheck(this, CardsBoardDirective);

        this.elem = elem;
        this.renderer2 = renderer2;
        this.today = Date.now();
        this.sevenDays = 604800000;
        this.oneMonth = 2592000000;
        this.sixMonth = 15552000000;
      }

      _createClass(CardsBoardDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.delta = this.today - Date.parse(this.item.snippet.publishedAt);
          this.border = '5px solid red';

          if (this.delta <= this.sevenDays) {
            this.border = '5px solid blue';
          }

          if (this.delta > this.sevenDays && this.delta <= this.oneMonth) {
            this.border = '5px solid green';
          }

          if (this.delta > this.oneMonth && this.delta <= this.sixMonth) {
            this.border = '5px solid yellow';
          }

          this.renderer2.setStyle(this.elem.nativeElement, 'border-bottom', this.border);
        }
      }]);

      return CardsBoardDirective;
    }();

    CardsBoardDirective.ɵfac = function CardsBoardDirective_Factory(t) {
      return new (t || CardsBoardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    CardsBoardDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CardsBoardDirective,
      selectors: [["", "appCardsBoard", ""]],
      inputs: {
        item: "item"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsBoardDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appCardsBoard]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pipes/sort-cards.pipe.ts":
  /*!******************************************!*\
    !*** ./src/app/pipes/sort-cards.pipe.ts ***!
    \******************************************/

  /*! exports provided: SortCardsPipe */

  /***/
  function srcAppPipesSortCardsPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortCardsPipe", function () {
      return SortCardsPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SortCardsPipe =
    /*#__PURE__*/
    function () {
      function SortCardsPipe() {
        _classCallCheck(this, SortCardsPipe);
      }

      _createClass(SortCardsPipe, [{
        key: "transform",
        value: function transform(cardsList, criteria) {
          var cardListfiltered = [];

          if (!cardsList.length || !criteria) {
            return cardsList;
          }

          if (criteria[1]) {
            cardListfiltered = cardsList.filter(function (item) {
              return item.snippet.title.includes(criteria[1]);
            });
          } else {
            cardListfiltered = cardsList;
          }

          switch (criteria[0]) {
            case 'view':
              cardListfiltered.sort(function (a, b) {
                return +b.statistics.viewCount - +a.statistics.viewCount;
              });
              break;

            case 'date':
              cardListfiltered.sort(function (a, b) {
                return Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt);
              });
              break;

            default:
              break;
          }

          return cardListfiltered;
        }
      }]);

      return SortCardsPipe;
    }();

    SortCardsPipe.ɵfac = function SortCardsPipe_Factory(t) {
      return new (t || SortCardsPipe)();
    };

    SortCardsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "sortCards",
      type: SortCardsPipe,
      pure: false
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortCardsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'sortCards',
          pure: false
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/response/example.ts":
  /*!*************************************!*\
    !*** ./src/app/response/example.ts ***!
    \*************************************/

  /*! exports provided: response */

  /***/
  function srcAppResponseExampleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "response", function () {
      return response;
    });

    var response = {
      'kind': 'youtube#videoListResponse',
      'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/Cmodw7c5XPTM8Yg3kMXelihxek4\'',
      'pageInfo': {
        'totalResults': 10,
        'resultsPerPage': 10
      },
      'items': [{
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI\'',
        'id': 'YN8zNnV0sK8',
        'snippet': {
          'publishedAt': '2020-02-14T12:42:19.000Z',
          'channelId': 'UCg8ss4xW9jASrqWGP30jXiw',
          'title': 'Angular 8 - Быстрый курс за 60 минут',
          'description': "\u041F\u043E\u043B\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u043F\u043E Angular 8+:\nhttps://clc.to/angular\n\nTelegram:\n            https://teleg.one/js_by_vladilen\n            \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin\n            \n\u0413\u0440\u0443\u043F\u043F\u0430 VK: https://vk.com/js_by_vladilen \n\nReact Native: \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u0430 JavaScript:\n            \nhttps://clc.to/rnative\n\n\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:\n\u042F\u0414:\n            https://money.yandex.ru/to/410013757655670\n            \nPayPal: https://www.paypal.me/vladilenm \n\n30 \u043C\u0430\u044F 2019 \u0433\u043E\u0434\u0430 \u0431\u044B \u0440\u0435\u043B\u0438\u0437 Angular 8\n            \u0438 \u044F \u0440\u0435\u0448\u0438\u043B \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C  \u043F\u043E \u043D\u0435\u043C\u0443 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043A\u0443\u0440\u0441.\n            \u0412 \u0432\u0438\u0434\u0435\u043E \u0432\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435, \u043A\u0430\u043A Angular \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442, \u043A\u0430\u043A \u0435\u0433\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C.\n            \n\u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0443\u0440\u043E\u043A\u0430 \u044F \u043F\u043E\u043A\u0430\u0436\u0443 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 Todo \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0441 \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u0430\u043C\u0438.\n            \u0420\u0430\u0437\u0431\u0435\u0440\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u0443 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C, \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043C\u0438, \u043F\u0430\u0439\u043F\u0430\u043C\u0438,\n            \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u043C\u0438 \u0438 \u043D\u0435\u043C\u043D\u043E\u0433\u043E RxJS\n\n\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434:\n            \nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043A\u0443\u0440\u0441 \u0437\u0430 60 \u043C\u0438\u043D\u0443\u0442",
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/YN8zNnV0sK8/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/YN8zNnV0sK8/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/YN8zNnV0sK8/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/YN8zNnV0sK8/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/YN8zNnV0sK8/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Владилен Минин',
          'tags': ['angular', 'angular 8', 'angularjs', 'js', 'javascript', 'rxjs', 'angular 60 минут', 'angular 1 час', 'angular 8 1 час', 'владилен минин', 'уроки javascript', 'angular 2', 'angular 4', 'angular уроки', 'курс angular', 'основы angular', 'angular фреймворк', 'angular уроки для начинающих', 'уроки angular', 'angular практика', 'ангуляр', 'angular изучение', 'angular курс', 'ангуляр 4 уроки', 'angular уроки на русском'],
          'categoryId': '27',
          'liveBroadcastContent': 'none',
          'localized': {
            'title': 'Angular 8 - Быстрый курс за 60 минут',
            'description': "\u041F\u043E\u043B\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u043F\u043E Angular 8+:\nhttps://clc.to/angular\n\nTelegram:\n            https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin\n            \nVK: https://vk.com/vladilen.minin \n\u0413\u0440\u0443\u043F\u043F\u0430 VK: https://vk.com/js_by_vladilen\n            \n\nReact Native: \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u0430 JavaScript:\nhttps://clc.to/rnative\n\n            \n\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:\n            \n\u042F\u0414: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm\n            \n\n30 \u043C\u0430\u044F 2019 \u0433\u043E\u0434\u0430 \u0431\u044B \u0440\u0435\u043B\u0438\u0437 Angular 8 \u0438 \u044F \u0440\u0435\u0448\u0438\u043B \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C  \u043F\u043E \u043D\u0435\u043C\u0443 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043A\u0443\u0440\u0441.\n            \u0412 \u0432\u0438\u0434\u0435\u043E \u0432\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435, \u043A\u0430\u043A Angular \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442, \u043A\u0430\u043A \u0435\u0433\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C.\n            \n\u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0443\u0440\u043E\u043A\u0430 \u044F \u043F\u043E\u043A\u0430\u0436\u0443 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 Todo \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0441 \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u0430\u043C\u0438.\n             \u0420\u0430\u0437\u0431\u0435\u0440\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u0443 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C, \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043C\u0438, \u043F\u0430\u0439\u043F\u0430\u043C\u0438, \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u043C\u0438 \u0438 \u043D\u0435\u043C\u043D\u043E\u0433\u043E RxJS\n             \n\n\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8\n              - \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043A\u0443\u0440\u0441 \u0437\u0430 60 \u043C\u0438\u043D\u0443\u0442"
          },
          'defaultAudioLanguage': 'en-US'
        },
        'statistics': {
          'viewCount': '33265',
          'likeCount': '1173',
          'dislikeCount': '26',
          'favoriteCount': '0',
          'commentCount': '170'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/uto79F2R8W05GFpiUAcLdFGs7PQ\'',
        'id': 'Fdf5aTYRW0E',
        'snippet': {
          'publishedAt': '2020-01-23T17:46:58.000Z',
          'channelId': 'UC29ju8bIPH5as8OGnQzwJyA',
          'title': 'Angular Crash Course',
          'description': "In this video we will talk about what Angular is and then jump in and build a small\n           app With Angular 7, looking at most of the fundamental concepts like components, services,\n            modules, etc\n\nSponsor:\n            \nhttp://www.netlify.com\n\nCode:\nhttps://github.com/bradtraversy/angular-crash-todolist\n\n\uD83D\uDC96\n             Become a Patron: Show support & get perks!\nhttp://www.patreon.com/traversymedia\n\nWebsite\n              & Udemy Courses\nhttp://www.traversymedia.com\n\nFollow Traversy\n              Media:\nhttps://www.facebook.com/traversymedia\nhttps://www.twitter.com/traversymedia\n              \nhttps://www.instagram.com/traversymedia",
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/Fdf5aTYRW0E/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/Fdf5aTYRW0E/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/Fdf5aTYRW0E/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/Fdf5aTYRW0E/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/Fdf5aTYRW0E/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Traversy Media',
          'tags': ['angular', 'angular 7', 'angular tutorial', 'angularjs'],
          'categoryId': '28',
          'liveBroadcastContent': 'none',
          'localized': {
            'title': 'Angular Crash Course',
            'description': "In this video we will talk about what Angular is and then jump in and build a\n             small app With Angular 7, looking at most of the fundamental concepts like components, services,\n              modules, etc\n\nSponsor:\n              \nhttp://www.netlify.com\n\nCode:\nhttps://github.com/bradtraversy/angular-crash-todolist\n\n\uD83D\uDC96\n               Become a Patron: Show support & get perks!\nhttp://www.patreon.com/traversymedia\n\nWebsite &\n               Udemy Courses\nhttp://www.traversymedia.com\n\nFollow Traversy Media:\n               \nhttps://www.facebook.com/traversymedia\nhttps://www.twitter.com/traversymedia\n               \nhttps://www.instagram.com/traversymedia"
          },
          'defaultAudioLanguage': 'en'
        },
        'statistics': {
          'viewCount': '456979',
          'likeCount': '8213',
          'dislikeCount': '131',
          'favoriteCount': '0',
          'commentCount': '555'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/6e0k9ik7TThWpqueHGOhTRIN1-A\'',
        'id': 'k5E2AVpwsko',
        'snippet': {
          'publishedAt': '2019-11-05T16:48:15.000Z',
          'channelId': 'UCWv7vMbMWH4-V0ZXdmDpPBA',
          'title': 'Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh',
          'description': "\uD83D\uDD25Get the COMPLETE COURSE (60% OFF - LIMITED TIME):\n          https://programmingwithmosh.com/courses/angular\n\n          \nThis Angular tutorial teaches you the fundamentals of Angular and TypeScript.\n          \n\nSUBSCRIBE FOR MORE VIDEOS!\n          \nhttps://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1\n\n\n\n          TABLE OF CONTENT \n\n00:00 Introduction\n02:54 What is Angular?\n04:54 Architecture of Angular Apps\n          \n08:41 Setting Up the Development Environment\n11:25 Your First Angular App\n          \n13:50 Structure of Angular Projects\n20:43 Webpack\n23:57 Angular Version History\n          \n27:31 Course Structure\n31:55 TypeScript Fundamentals\n32:34 What is TypeScript?\n          \n34:58 Your First TypeScript Program\n37:57 Declaring Variables\n42:46 Types\n          \n48:29 Type Assertions\n51:15 Arrow Functions\n52:59 Interfaces\n56:54 Classes\n          \n01:01:22 Objects\n01:05:31 Constructors\n01:08:22 Access Modifiers\n          \n01:11:18 Access Modifiers in Constructor Parameters\n01:12:58 Properties\n          \n01:18:15 Modules\n01:23:22 Angular Fundamentals\n01:23:41 Building Blocks of Angular Apps\n          \n01:27:22 Creating Components\n01:37:00 Generating Components Using Angular CLI\n          \n01:41:40 Templates\n01:44:08 Directives\n01:47:34 Services\n01:52:02 Dependency Injection\n          \n01:59:22 Generating Services Using Angular CLI\n02:01:32 Exercise\n \n\nSTAY IN TOUCH\n\n          \nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani",
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/k5E2AVpwsko/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/k5E2AVpwsko/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/k5E2AVpwsko/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/k5E2AVpwsko/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/k5E2AVpwsko/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Programming with Mosh',
          'tags': ['learn angular 4', 'learn angular 4 from scratch', 'angular4', 'learn angular', 'angular tutorial', 'angular 4', 'Angular', 'angular 5', 'angular 5 course', 'angular course', 'angular.js', 'angularjs', 'angular 2', 'angular2', 'angular 4 tutorial', 'angular 4 tutorial for beginners', 'angular tutorial for beginners', 'angular 4 crash course', 'angular 4 in 60 minutes', 'angularjs 4', 'angular 4 tutorial for beginners step by step', 'angular js', 'angularjs tutorial for beginners', 'angular 6', 'angular 7'],
          'categoryId': '22',
          'liveBroadcastContent': 'none',
          'localized': {
            'title': 'Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh',
            'description': "\uD83D\uDD25Get the COMPLETE COURSE (60% OFF - LIMITED TIME):\n            https://programmingwithmosh.com/courses/angular\n\n            \nThis Angular tutorial teaches you the fundamentals of Angular and TypeScript.\n\n            \nSUBSCRIBE FOR MORE VIDEOS!\n            \nhttps://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1\n\n\n            \nTABLE OF CONTENT \n\n00:00 Introduction\n02:54 What is Angular?\n            \n04:54 Architecture of Angular Apps\n08:41 Setting Up the Development Environment\n            \n11:25 Your First Angular App\n13:50 Structure of Angular Projects\n20:43 Webpack\n            \n23:57 Angular Version History \n27:31 Course Structure\n31:55 TypeScript Fundamentals\n            \n32:34 What is TypeScript?\n34:58 Your First TypeScript Program\n37:57 Declaring Variables\n            \n42:46 Types\n48:29 Type Assertions\n51:15 Arrow Functions\n52:59 Interfaces\n56:54 Classes\n            \n01:01:22 Objects\n01:05:31 Constructors\n01:08:22 Access Modifiers\n            \n01:11:18 Access Modifiers in Constructor Parameters\n01:12:58 Properties\n01:18:15 Modules\n            \n01:23:22 Angular Fundamentals\n01:23:41 Building Blocks of Angular Apps\n            \n01:27:22 Creating Components\n01:37:00 Generating Components Using Angular CLI\n            \n01:41:40 Templates\n01:44:08 Directives\n01:47:34 Services\n01:52:02 Dependency Injection\n            \n01:59:22 Generating Services Using Angular CLI\n02:01:32 Exercise\n \n\nSTAY IN TOUCH\n\n            \nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani"
          },
          'defaultAudioLanguage': 'en-US'
        },
        'statistics': {
          'viewCount': '1266085',
          'likeCount': '18342',
          'dislikeCount': '473',
          'favoriteCount': '0',
          'commentCount': '1255'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/cDwx4Ds5-J9CmiqmazUetzrLZKY\'',
        'id': 'Rf54BH35yrY',
        'snippet': {
          'publishedAt': '2019-09-04T15:00:12.000Z',
          'channelId': 'UCg8ss4xW9jASrqWGP30jXiw',
          'title': 'Angular 8 Основы. Полный Курс для начинающих',
          'description': "\u041F\u043E\u043B\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u043F\u043E Angular 8+:\nhttps://clc.to/angular\n\n\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043C\u0435\u043D\u044F \u0432 \u0412\u041A:\n          https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram:\n          https://www.instagram.com/vladilen.minin\n\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A: https://vk.com/js_by_vladilen\n\n          \n\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:\n\u042F\u0414: https://money.yandex.ru/to/410013757655670\nPayPal:\n          https://www.paypal.me/vladilenm \n\n          \n\u0423\u0440\u043E\u043A \u043F\u043E Angular. \u0412 \u044D\u0442\u043E\u043C \u043A\u0443\u0440\u0441\u0435 \u0432\u044B \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u0435\u0441\u044C \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438,\n          \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0435\u0441\u0442\u044C \u0432 Angular \u0441 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u043D\u0443\u043B\u044F\n\nAngular 8 \u041E\u0441\u043D\u043E\u0432\u044B. \u041F\u043E\u043B\u043D\u044B\u0439 \u041A\u0443\u0440\u0441. \u0423\u0440\u043E\u043A \u0434\u043B\u044F \u041D\u043E\u0432\u0438\u0447\u043A\u043E\u0432",
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/Rf54BH35yrY/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/Rf54BH35yrY/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/Rf54BH35yrY/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/Rf54BH35yrY/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/Rf54BH35yrY/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Владилен Минин',
          'tags': ['angular', 'angularjs', 'js', 'javascript', 'уроки angular', 'angular уроки', 'angular 8', 'курс angular', 'angular основы', 'владилен', 'владилен минин', 'минин', 'основы angular', 'ангуляр', 'angular 6', 'angular js', 'angular уроки для начинающих', 'angular фреймворк', 'angular практика', 'что такое angular', 'angular cli', 'angular уроки на русском', 'курсы программирования', 'angular tutorial'],
          'categoryId': '27',
          'liveBroadcastContent': 'none',
          'localized': {
            'title': 'Angular 8 Основы. Полный Курс для начинающих',
            'description': "\u041F\u043E\u043B\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u043F\u043E Angular 8+:\nhttps://clc.to/angular\n\n\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043C\u0435\u043D\u044F \u0432 \u0412\u041A:\n            https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram:\n            https://www.instagram.com/vladilen.minin\n\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A: https://vk.com/js_by_vladilen\n\n            \n\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:\n\u042F\u0414: https://money.yandex.ru/to/410013757655670\n            \nPayPal: https://www.paypal.me/vladilenm \n\n\u0423\u0440\u043E\u043A \u043F\u043E Angular.\n            \u0412 \u044D\u0442\u043E\u043C \u043A\u0443\u0440\u0441\u0435 \u0432\u044B \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u0435\u0441\u044C \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0435\u0441\u0442\u044C \u0432 Angular \u0441 \u043F\u043E\u043B\u043D\n            \u043E\u0433\u043E \u043D\u0443\u043B\u044F\n\n            \nAngular 8 \u041E\u0441\u043D\u043E\u0432\u044B. \u041F\u043E\u043B\u043D\u044B\u0439 \u041A\u0443\u0440\u0441. \u0423\u0440\u043E\u043A \u0434\u043B\u044F \u041D\u043E\u0432\u0438\u0447\u043A\u043E\u0432"
          },
          'defaultAudioLanguage': 'en-US'
        },
        'statistics': {
          'viewCount': '14544',
          'likeCount': '573',
          'dislikeCount': '11',
          'favoriteCount': '0',
          'commentCount': '88'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/_99tEunMszVYvCj2-1aUTKgOoSY\'',
        'id': 'm0yGx2MGZWg',
        'snippet': {
          'publishedAt': '2018-05-13T07:44:08.000Z',
          'channelId': 'UCe_H8hzx9WV7Ca7Ps5gt72Q',
          'title': 'Что такое Angular. Обзор возможностей',
          'description': "\u0412 \u044D\u0442\u043E\u043C \u0432\u0438\u0434\u0435\u043E \u0440\u0435\u0447\u044C \u043F\u043E\u0439\u0434\u0435\u0442 \u043F\u0440\u043E javascript \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A Angular.\n          \u042F \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0443 \u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 Angular, \u0433\u0434\u0435 \u0438 \u043A\u043E\u0433\u0434\u0430 \u0435\u0433\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u044E\u0442,\n          \u0430 \u0442\u0430\u043A \u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u044E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u0431\u0437\u043E\u0440 \u0435\u0433\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439.\n          \u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0443 \u0447\u0435\u043C \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A \u0441\u043B\u043E\u0436\u0435\u043D \u0434\u043B\u044F \u043D\u043E\u0432\u0438\u0447\u043A\u043E\u0432 \u0438 \u0447\u0435\u043C \u043E\u043D \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0440\u043E\u0448 \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432.\n          \u0421\u0435\u0439\u0447\u0430\u0441 \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E \u0431 \u0441\u0442\u0430\u0442\u044C junior javascript \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C \u043D\u0443\u0436\u043D\u043E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u043D\u0430\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B\n          \u043E\u0434\u0438\u043D \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A js \u0438 \u0430\u043D\u0433\u0443\u043B\u044F\u0440 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0432\u044B\u0431\u043E\u0440\u043E\u043C.",
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/m0yGx2MGZWg/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/m0yGx2MGZWg/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/m0yGx2MGZWg/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/m0yGx2MGZWg/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/m0yGx2MGZWg/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Web Developer Blog',
          'tags': ['angular', 'ангуляр', 'angular js', 'уроки angular', 'angular уроки', 'angular tutorial', 'что такое angular', 'angular обзор', 'angular фреймворк', 'js', 'javascript', 'web development', 'angular 6', 'angular примеры', 'angular практика', 'стоит ли учить angular', 'angular учить', 'программирование'],
          'categoryId': '27',
          'liveBroadcastContent': 'none',
          'defaultLanguage': 'ru',
          'localized': {
            'title': 'Что такое Angular. Обзор возможностей',
            'description': "\u0412 \u044D\u0442\u043E\u043C \u0432\u0438\u0434\u0435\u043E \u0440\u0435\u0447\u044C \u043F\u043E\u0439\u0434\u0435\u0442 \u043F\u0440\u043E javascript \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A Angular.\n            \u042F \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0443 \u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 Angular, \u0433\u0434\u0435 \u0438 \u043A\u043E\u0433\u0434\u0430 \u0435\u0433\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u044E\u0442,\n            \u0430 \u0442\u0430\u043A \u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u044E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u0431\u0437\u043E\u0440 \u0435\u0433\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439.\n            \u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0443 \u0447\u0435\u043C \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A \u0441\u043B\u043E\u0436\u0435\u043D \u0434\u043B\u044F \u043D\u043E\u0432\u0438\u0447\u043A\u043E\u0432 \u0438 \u0447\u0435\u043C \u043E\u043D \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0440\u043E\u0448 \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432.\n            \u0421\u0435\u0439\u0447\u0430\u0441 \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E \u0431 \u0441\u0442\u0430\u0442\u044C junior javascript \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C \u043D\u0443\u0436\u043D\u043E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u043D\u0430\u0442\u044C \u0445\u043E\u0442\u044F\n            \u0431\u044B \u043E\u0434\u0438\u043D \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A js \u0438 \u0430\u043D\u0433\u0443\u043B\u044F\u0440 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0432\u044B\u0431\u043E\u0440\u043E\u043C."
          },
          'defaultAudioLanguage': 'ru'
        },
        'statistics': {
          'viewCount': '43470',
          'likeCount': '1047',
          'dislikeCount': '198',
          'favoriteCount': '0',
          'commentCount': '96'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/GuGydXnkvpl-L4ntYhAaLNiseZ4\'',
        'id': 'VAkio68d51A',
        'snippet': {
          'publishedAt': '2019-02-25T00:09:23.000Z',
          'channelId': 'UCZ9qFEC82qM6Pk-54Q4TVWA',
          'title': 'What is Angular? (Explained for Beginners)',
          'description': "When you're just starting out you are probably wondering '\n          What is Angular exactly? When you ask that question it leads to a lot of c\n          oncepts that are over your head and don't make sense. So in this video I really want to cover wh\n          at exactly Angular is and why it's even necessary... all from a beginners point of view.\n          \n\n*** DOWNLOAD THE FREE REPORT ***\nFor my free report on the five best programming lang\n          uages in 2019 (for beginners) go to: https://andysterkowitz.com/report",
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/VAkio68d51A/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/VAkio68d51A/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/VAkio68d51A/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/VAkio68d51A/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/VAkio68d51A/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Andy Sterkowitz',
          'tags': ['angular', 'angular 7', 'angularjs', 'learn angular', 'angular.js', 'angular tutorial for beginners', 'angular for beginners', 'angular for dummies', 'what is angular', 'what is angular 7', 'angular2', 'angular 2', 'javascript', 'front end framework', 'web development', 'web development 2019', 'front end framework 2019', 'what is a front end framework', 'software development', 'programming', 'front end software developer', 'web developer'],
          'categoryId': '28',
          'liveBroadcastContent': 'none',
          'defaultLanguage': 'en',
          'localized': {
            'title': 'What is Angular? (Explained for Beginners)',
            'description': "When you're just starting out you are proba\n            bly wondering 'What is Angular exactly? When you ask that ques\n            tion it leads to a lot of concepts that are over your head and don't ma\n            ke sense. So in this video I really want to cover what exactly Angular is and why it's even nec\n            essary... all from a beginners point of view.\n\n*** DOWNLOAD THE FREE REPORT ***\nFor my f\n            ree report on the five best programming languages in 2019 (for beginners) g\n            o to: https://andysterkowitz.com/report"
          },
          'defaultAudioLanguage': 'en'
        },
        'statistics': {
          'viewCount': '57997',
          'likeCount': '1662',
          'dislikeCount': '34',
          'favoriteCount': '0',
          'commentCount': '114'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/u2qq5ltpXouoIrpkJgGLu8YOIeg\'',
        'id': 'u1VCxpvDgsk',
        'snippet': {
          'publishedAt': '2018-12-01T15:00:05.000Z',
          'channelId': 'UCvuY904el7JvBlPbdqbfguw',
          'title': 'Уроки Angular для начинающих / #1 - Введение в Angular',
          'description': "\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u043C \u043A \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044E \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 Angular. \u0412 \u0445\u043E\u0434\u0435 \u043A\u0443\u0440\u0441\u0430 \u043C\u044B \u0441\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u043D\u0435\u0431\u043E\u043B\n          \u044C\u0448\u043E\u0439 \u0441\u0430\u0439\u0442 \u0438 \u043D\u0430\u0443\u0447\u0438\u043C\u0441\u044F \u0432\u0441\u0435\u043C \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F\u043C \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 Angular. \u041C\u044B \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u0441\u043E\u0431\u044B\u0442\u0438\u044F, \u043A\n          \u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B, \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0444\u043E\u0440\u043C \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C \u0441\u0430\u043C\u0438 \u043C\u043E\u0433\u043B\u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0432\u0435\u0431 \u0441\u0430\n          \u0439\u0442\u044B \u043D\u0430 Angular.\n\n1) \u041A\u0443\u0440\u0441 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 itProger: https://itproger.com/course/angular\n2) No\n          de JS: https://nodejs.org/\n3) \u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u043A\u043E\u0434\u0430: https://atom.io/\n4) Angular CL\n          I: https://cli.angular.io/\n\n\u2714 \u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u0432: https://itproger.com/\n\n\u2714 -\n          ------------\n\u0412\u0441\u0442\u0443\u043F\u0430\u0439 \u0432 \u0433\u0440\u0443\u043F\u043F\u0443 \u0412\u043A - https://vk.com/prog_life \uD83D\uDE80\n\u0413\u0440\u0443\u043F\u043F\u0430 Face\n          Book - https://goo.gl/XW0aaP\n\nInstagram: https://www.instagram.com/gosha_dudar/\nTel\n          egram: http://t.me/itProger_official\nTwitter - https://twitter.com/GoshaDudar\n\n- \u0423\u0440\u043E\n          \u043A\u0438 \u043E\u0442 #GoshaDudar \uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBB\n- \u0412\u0441\u0435 \u0443\u0440\u043E\u043A\u0438 \u043F\u043E \u0445\u0435\u0448\u0442\u0435\u0433\u0443 #goshaAngular",
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/u1VCxpvDgsk/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/u1VCxpvDgsk/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/u1VCxpvDgsk/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/u1VCxpvDgsk/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/u1VCxpvDgsk/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Гоша Дударь',
          'tags': ['angular', 'angular 6', 'angular уроки', 'angular node js', 'angularjs', 'angularjs уроки', 'для начинающих', 'angular уроки на русском', 'Введение в Angular', 'что такое angular', 'установка angular', '#GoshaDudar', '#goshaAngular'],
          'categoryId': '27',
          'liveBroadcastContent': 'none',
          'defaultLanguage': 'ru',
          'localized': {
            'title': 'Уроки Angular для начинающих / #1 - Введение в Angular',
            'description': "\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u043C \u043A \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044E \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 Angular. \u0412 \u0445\u043E\u0434\u0435 \u043A\u0443\u0440\u0441\u0430 \u043C\u044B \u0441\u043E\u0437\u0434\n            \u0430\u0434\u0438\u043C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0430\u0439\u0442 \u0438 \u043D\u0430\u0443\u0447\u0438\u043C\u0441\u044F \u0432\u0441\u0435\u043C \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F\u043C \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 Angular. \u041C\u044B \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u0441\u043E\u0431\n            \u044B\u0442\u0438\u044F, \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B, \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0444\u043E\u0440\u043C \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C \u0441\u0430\u043C\u0438 \u043C\u043E\u0433\u043B\u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0432\u0435\u0431 \u0441\n            \u0430\u0439\u0442\u044B \u043D\u0430 Angular.\n\n1) \u041A\u0443\u0440\u0441 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 itProger: https://itproger.com/course/angular\n2) No\n            de JS: https://nodejs.org/\n3) \u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u043A\u043E\u0434\u0430: https://atom.io/\n4) Angular C\n            LI: https://cli.angular.io/\n\n\u2714 \u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u0432: https://itproger.com/\n\n\u2714 -\n            ------------\n\u0412\u0441\u0442\u0443\u043F\u0430\u0439 \u0432 \u0433\u0440\u0443\u043F\u043F\u0443 \u0412\u043A - https://vk.com/prog_life \uD83D\uDE80\n\u0413\u0440\u0443\u043F\u043F\u0430 Fac\n            eBook - https://goo.gl/XW0aaP\n\nInstagram: https://www.instagram.com/gosha_dudar/\nTele\n            gram: http://t.me/itProger_official\nTwitter - https://twitter.com/GoshaDudar\n\n- \u0423\u0440\u043E\n            \u043A\u0438 \u043E\u0442 #GoshaDudar \uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBB\n- \u0412\u0441\u0435 \u0443\u0440\u043E\u043A\u0438 \u043F\u043E \u0445\u0435\u0448\u0442\u0435\u0433\u0443 #goshaAngular"
          },
          'defaultAudioLanguage': 'ru'
        },
        'statistics': {
          'viewCount': '33896',
          'likeCount': '612',
          'dislikeCount': '37',
          'favoriteCount': '0',
          'commentCount': '50'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/96JEWzuOaAgaHrcnKhmatlZzPME\'',
        'id': 'rc3E4tplFCU',
        'snippet': {
          'publishedAt': '2019-10-29T15:00:14.000Z',
          'channelId': 'UCg8ss4xW9jASrqWGP30jXiw',
          'title': 'Angular 40 вопросов для собеседования',
          'description': "\u041F\u043E\u043B\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u043F\u043E Angular 8+:\nhttps://clc.to/angular\n\n\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043C\n          \u0435\u043D\u044F \u0432 \u0412\u041A: https://vk.com/vladilen.minin\n\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A: https://vk.com/js_by_vladilen\nTelegr\n          am: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\n\n\u041F\u043E\u0434\n          \u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:\n\u042F\u0414: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.pay\n          pal.me/vladilenm \n\nAngular 40 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F. \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043A \u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E",
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/rc3E4tplFCU/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/rc3E4tplFCU/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/rc3E4tplFCU/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/rc3E4tplFCU/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/rc3E4tplFCU/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Владилен Минин',
          'tags': ['angular', 'angularjs', 'js', 'javascript', 'уроки angular', 'angular уроки', 'angular 8', 'курс angular', 'angular основы', 'владилен', 'владилен минин', 'минин', 'основы angular', 'angular вопросы', 'angular интервью', 'собеседование', 'angular собеседование', 'вопросы на собеседование', 'angular 6', 'angular для начинающих', 'angular уроки на русском'],
          'categoryId': '27',
          'liveBroadcastContent': 'none',
          'localized': {
            'title': 'Angular 40 вопросов для собеседования',
            'description': "\u041F\u043E\u043B\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u043F\u043E Angular 8+:\nhttps://clc.to/angular\n\n            \n\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043C\u0435\u043D\u044F \u0432 \u0412\u041A: https://vk.com/vladilen.minin\n\n            \u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A: https://vk.com/js_by_vladilen\nTelegra\n            m: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\n\n\u041F\u043E\u0434\n            \u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:\n\u042F\u0414: https://money.yandex.ru/to/410013757655670\nPay\n            Pal: https://www.paypal.me/vladilenm \n\nAngular 40 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F. \u041F\u043E\u0434\u0433\u043E\n            \u0442\u043E\u0432\u043A\u0430 \u043A \u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E"
          },
          'defaultAudioLanguage': 'en-US'
        },
        'statistics': {
          'viewCount': '6824',
          'likeCount': '595',
          'dislikeCount': '10',
          'favoriteCount': '0',
          'commentCount': '126'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/pvVvPt5cchXjCoSYxodr18lOaEg\'',
        'id': 'NaZwVUHnmfE',
        'snippet': {
          'publishedAt': '2019-06-19T16:06:13.000Z',
          'channelId': 'UCg8ss4xW9jASrqWGP30jXiw',
          'title': 'Angular 8 + RxJS. Приложение Органайзер С Нуля (Для Опытных!)',
          'description': "\u041A\u0443\u0440\u0441 \u043F\u043E Angular 8+: \nhttps://clc.to/angular \n\n\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043C\u0435\u043D\u044F \u0432 \u0412\n          \u041A: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInst\n          agram: https://www.instagram.com/vladilen.minin\n\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A: https://vk.com/js_by_vladilen\n\n\u041F\u043E\u0434\n          \u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:\n\u042F\u0414: https://money.yandex.ru/to/410013757655670\nPay\n          Pal: https://www.paypal.me/vladilenm \n\n\u0412 \u0432\u0438\u0434\u0435\u043E \u044F \u043F\u043E\u043A\u0430\u0436\u0443 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043E\u0440\u0433\u0430\u043D\n          \u0430\u0439\u0437\u0435\u0440\u0430 \u0441 \u043D\u0443\u043B\u044F.\n\u0412 \u0432\u0438\u0434\u0435\u043E \u044F \u043D\u0435 \u0431\u0443\u0434\u0443 \u043F\u043E\u044F\u0441\u043D\u044F\u0442\u044C \u0431\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u043E\u043C\u0435\u043D\u0442\u044B, \u0442\u0430\u043A \u043A\u0430\u043A \u044D\u0442\u043E \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u0434\u043B\u044F \u043E\u043F\u044B\u0442\u043D\u044B\u0445 \u0440\u0430\n          \u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432\n\n\u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043C\u043D\u043E\n          \u0433\u043E RxJS, Firebase, MomentJS \u0438 Angular 8\n\u041D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043D\u0438\u043A\u0430\u043A\u0438\u0445 CSS \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u043E\u0432 - \u0432\u0441\u0435 \u0441\u0442\u0438\u043B\u0438 \u0431\u0443\u0434\u0443\u0442 \u043D\u0430\u043F\n          \u0438\u0441\u0430\u043D\u044B \u0441 \u043D\u0443\u043B\u044F \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C CSS \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445\n\n\u0418\u0441\u0445\u043E\u0434\n          \u043D\u044B\u0439 \u043A\u043E\u0434:\nhttps://github.com/vladilenm/angular-organizer\n\nAngular 8 + RxJS. \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0426\u0435\u043B\u0438\u043A\n          \u043E\u043C (\u0414\u043B\u044F \u041E\u043F\u044B\u0442\u043D\u044B\u0445!)\nhttps://youtu.be/NaZwVUHnmfE",
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/NaZwVUHnmfE/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/NaZwVUHnmfE/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/NaZwVUHnmfE/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/NaZwVUHnmfE/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/NaZwVUHnmfE/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Владилен Минин',
          'tags': ['angular', 'angular 8', 'vladilen', 'владилен', 'владилен минин', 'angularjs', 'angular практика', 'уроки angular', 'rxjs', 'rxjs уроки', 'momentjs', 'js', 'javascript', 'web', 'frontend', 'ангуляр', 'angular уроки', 'angular уроки для начинающих', 'создание приложения на angular 4', 'angular 60 минут', 'изучение angular', 'angular 6', 'ангуляр 7 уроки', 'реактивное программирование'],
          'categoryId': '27',
          'liveBroadcastContent': 'none',
          'localized': {
            'title': 'Angular 8 + RxJS. Приложение Органайзер С Нуля (Для Опытных!)',
            'description': "\u041A\u0443\u0440\u0441 \u043F\u043E Angular 8+: \nhttps://clc.to/angular \n\n\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043C\u0435\n            \u043D\u044F \u0432 \u0412\u041A: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInsta\n            gram: https://www.instagram.com/vladilen.minin\n\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A: https://vk.com/js_by_vladilen\n\n\u041F\u043E\u0434\n            \u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:\n\u042F\u0414: https://money.yandex.ru/to/410013757655670\nPa\n            yPal: https://www.paypal.me/vladilenm \n\n\u0412 \u0432\u0438\u0434\u0435\u043E \u044F \u043F\u043E\u043A\u0430\u0436\u0443 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043E\u0440\u0433\u0430\u043D\n            \u0430\u0439\u0437\u0435\u0440\u0430 \u0441 \u043D\u0443\u043B\u044F.\n\u0412 \u0432\u0438\u0434\u0435\u043E \u044F \u043D\u0435 \u0431\u0443\u0434\u0443 \u043F\u043E\u044F\u0441\u043D\u044F\u0442\u044C \u0431\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u043E\u043C\u0435\u043D\u0442\u044B, \u0442\u0430\u043A \u043A\u0430\u043A \u044D\u0442\u043E \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u0434\u043B\u044F \u043E\u043F\u044B\u0442\n            \u043D\u044B\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432\n\n\u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043C\u043D\n            \u043E\u0433\u043E RxJS, Firebase, MomentJS \u0438 Angular 8\n\u041D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043D\u0438\u043A\u0430\u043A\u0438\u0445 CSS \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u043E\u0432 - \u0432\u0441\u0435 \u0441\u0442\u0438\u043B\u0438 \u0431\u0443\u0434\u0443\u0442 \u043D\u0430\u043F\n            \u0438\u0441\u0430\u043D\u044B \u0441 \u043D\u0443\u043B\u044F \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C CSS \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445\n\n\u0418\u0441\u0445\u043E\u0434\u043D\u044B\n            \u0439 \u043A\u043E\u0434:\nhttps://github.com/vladilenm/angular-organizer\n\nAngular 8 + RxJS. \u041F\u0440\u0438\u043B\u043E\n            \u0436\u0435\u043D\u0438\u0435 \u0426\u0435\u043B\u0438\u043A\u043E\u043C (\u0414\u043B\u044F \u041E\u043F\u044B\u0442\u043D\u044B\u0445!)\nhttps://youtu.be/NaZwVUHnmfE"
          },
          'defaultAudioLanguage': 'en-US'
        },
        'statistics': {
          'viewCount': '12128',
          'likeCount': '665',
          'dislikeCount': '11',
          'favoriteCount': '0',
          'commentCount': '156'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/KuFm1jGNMzgjE2VlAEsPgRVra4o\'',
        'id': 'G0bBLvWXBvc',
        'snippet': {
          'publishedAt': '2019-09-16T16:53:41.000Z',
          'channelId': 'UCsBjURrPoezykLs9EqgamOA',
          'title': 'Angular for Beginners - Let\'s build a Tic-Tac-Toe PWA',
          'description': "Learn the basics of Angular 8 \uD83D\uDE80 by building a tic-tac-toe gam\n          e \uD83D\uDD79\uFE0F from scratch...Then deploy it as an installable progressive web app (PWA). Go be\n          yond the basics \uD83D\uDC49https://fireship.io/courses/angular/\n\nFull Sou\n          rce Code: https://github.com/fireship-io/angular-tic-tac-toe\nAngular Do\n          cs: https://angular.io/\n\n#angular #pwa #tutorial\n\nTake Angular quizzes \uD83E\uDD13\n\n          \niOS https://itunes.apple.com/us/app/fireship/id1462592372?mt=8\nAndr\n          oid https://play.google.com/store/apps/details?id=io.fireship.quizapp\n\nUpgrade to Fir\n          eship PRO at https://fireship.io/pro\nUse code lORhwXd2 for 25% off your first payment.",
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/G0bBLvWXBvc/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/G0bBLvWXBvc/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/G0bBLvWXBvc/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/G0bBLvWXBvc/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/G0bBLvWXBvc/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Fireship',
          'tags': ['webdev', 'app development', 'lesson', 'tutorial', 'beginners', 'beginner', 'basic', 'angular tutorial', 'angular basics', 'angular for beginners', 'angular 8', 'angular components', 'learn angular'],
          'categoryId': '28',
          'liveBroadcastContent': 'none',
          'localized': {
            'title': 'Angular for Beginners - Let\'s build a Tic-Tac-Toe PWA',
            'description': "Learn the basics of Angular 8 \uD83D\uDE80 by building a tic-tac-toe ga\n            me \uD83D\uDD79\uFE0F from scratch...Then deploy it as an installable progressive web app (PWA). Go bey\n            ond the basics \uD83D\uDC49https://fireship.io/courses/angular/\n\nFull Source Co\n            de: https://github.com/fireship-io/angular-tic-tac-toe\nAngular Do\n            cs: https://angular.io/\n\n#angular #pwa #tutorial\n\nTake Angular qu\n            izzes \uD83E\uDD13\n\niOS https://itunes.apple.com/us/app/fireship/id1462592372?mt=8\nAnd\n            roid https://play.google.com/store/apps/details?id=io.fireship.quizapp\n\nUpgrade to Fire\n            ship PRO at https://fireship.io/pro\nUse code lORhwXd2 for 25% off your first payment."
          },
          'defaultAudioLanguage': 'en'
        },
        'statistics': {
          'viewCount': '56657',
          'likeCount': '2092',
          'dislikeCount': '36',
          'favoriteCount': '0',
          'commentCount': '128'
        }
      }]
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

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
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
    /*! E:\Вова- флеха\Training\RSSchool\youtube-client\youtube-client-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map