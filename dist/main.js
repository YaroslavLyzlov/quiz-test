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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [
    { path: '', redirectTo: '/quiz/question', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
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

module.exports = "<router-outlet *ngIf=\"!showLoader\">\n</router-outlet>\n\n<!--тут должен быть красивый лоадер, например :)-->\n<h1 *ngIf=\"showLoader\">Загрузка...</h1>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.showLoader = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.showLoader = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.showLoader = false;
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_quiz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/quiz */ "./src/app/modules/quiz/index.ts");
/* harmony import */ var _modules_error_pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/error-pages */ "./src/app/modules/error-pages/index.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _modules_quiz__WEBPACK_IMPORTED_MODULE_4__["QuizModule"],
                _modules_error_pages__WEBPACK_IMPORTED_MODULE_5__["ErrorPagesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/error-pages/custom-error/custom-error.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/error-pages/custom-error/custom-error.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Здесь какая-то ошибка :)\n</p>\n"

/***/ }),

/***/ "./src/app/modules/error-pages/custom-error/custom-error.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/error-pages/custom-error/custom-error.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomErrorComponent", function() { return CustomErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomErrorComponent = /** @class */ (function () {
    function CustomErrorComponent() {
    }
    CustomErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-error',
            template: __webpack_require__(/*! ./custom-error.component.html */ "./src/app/modules/error-pages/custom-error/custom-error.component.html")
        })
    ], CustomErrorComponent);
    return CustomErrorComponent;
}());



/***/ }),

/***/ "./src/app/modules/error-pages/error-pages-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/error-pages/error-pages-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ErrorPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPagesRoutingModule", function() { return ErrorPagesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/modules/error-pages/not-found/not-found.component.ts");
/* harmony import */ var _custom_error_custom_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-error/custom-error.component */ "./src/app/modules/error-pages/custom-error/custom-error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var errorPagesRoutes = [
    { path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    },
    { path: 'custom-error',
        component: _custom_error_custom_error_component__WEBPACK_IMPORTED_MODULE_3__["CustomErrorComponent"]
    }
];
var ErrorPagesRoutingModule = /** @class */ (function () {
    function ErrorPagesRoutingModule() {
    }
    ErrorPagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(errorPagesRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], ErrorPagesRoutingModule);
    return ErrorPagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/error-pages/error-pages.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/error-pages/error-pages.module.ts ***!
  \***********************************************************/
/*! exports provided: ErrorPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPagesModule", function() { return ErrorPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/modules/error-pages/not-found/not-found.component.ts");
/* harmony import */ var _custom_error_custom_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-error/custom-error.component */ "./src/app/modules/error-pages/custom-error/custom-error.component.ts");
/* harmony import */ var _error_pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-pages-routing.module */ "./src/app/modules/error-pages/error-pages-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorPagesModule = /** @class */ (function () {
    function ErrorPagesModule() {
    }
    ErrorPagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_error_pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["ErrorPagesRoutingModule"]],
            declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"], _custom_error_custom_error_component__WEBPACK_IMPORTED_MODULE_2__["CustomErrorComponent"]]
        })
    ], ErrorPagesModule);
    return ErrorPagesModule;
}());



/***/ }),

/***/ "./src/app/modules/error-pages/index.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/error-pages/index.ts ***!
  \**********************************************/
/*! exports provided: ErrorPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-pages.module */ "./src/app/modules/error-pages/error-pages.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorPagesModule", function() { return _error_pages_module__WEBPACK_IMPORTED_MODULE_0__["ErrorPagesModule"]; });




/***/ }),

/***/ "./src/app/modules/error-pages/not-found/not-found.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/error-pages/not-found/not-found.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>404</h1>\n"

/***/ }),

/***/ "./src/app/modules/error-pages/not-found/not-found.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/error-pages/not-found/not-found.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/modules/error-pages/not-found/not-found.component.html"),
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/modules/quiz/index.ts":
/*!***************************************!*\
  !*** ./src/app/modules/quiz/index.ts ***!
  \***************************************/
/*! exports provided: QuizModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quiz_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz.module */ "./src/app/modules/quiz/quiz.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuizModule", function() { return _quiz_module__WEBPACK_IMPORTED_MODULE_0__["QuizModule"]; });




/***/ }),

/***/ "./src/app/modules/quiz/models/answer.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/quiz/models/answer.ts ***!
  \***********************************************/
/*! exports provided: Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
var Answer = /** @class */ (function () {
    function Answer(taskId, _text, _time, _isAnswered) {
        if (_text === void 0) { _text = ''; }
        if (_time === void 0) { _time = 0; }
        if (_isAnswered === void 0) { _isAnswered = false; }
        this.taskId = taskId;
        this._text = _text;
        this._time = _time;
        this._isAnswered = _isAnswered;
    }
    Object.defineProperty(Answer.prototype, "text", {
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "time", {
        get: function () {
            return this._time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "isAnswered", {
        get: function () {
            return this._isAnswered;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @description Аналогично методу fromServer
     */
    Answer.fromServer = function (model) {
        return new Answer(model.taskId, model.text, model.time, model.isAnswered);
    };
    Answer.prototype.startTimer = function () {
        var _this = this;
        this._timer = window.setTimeout(function () {
            _this._time++;
            _this.startTimer();
        }, 1000);
    };
    Answer.prototype.stopTimer = function () {
        clearInterval(this._timer);
    };
    /**
     * @description Метод, чтобы присваивание было не явным и не менять модель извне
     */
    Answer.prototype.setAnswer = function (text) {
        this._text = text;
    };
    /**
     * @description Здесь для таких вещей по-хорошему прикрутить какую-нибудь библиотеку
     * У нас используется и нами написана https://github.com/SoEasy/tserialize
     * В тестовом задании не стал прикручивать, чтобы время много не тратить
     * Модель, которую отправляем на сервер, не стал указывать, лучше бы указать, конечно, но впринципе тут как кому удобнее
     * и как команда договориться у себя
     */
    Answer.prototype.toServer = function () {
        return {
            text: this.text,
            time: this.time,
            isAnswered: this.isAnswered,
            taskId: this.taskId
        };
    };
    return Answer;
}());



/***/ }),

/***/ "./src/app/modules/quiz/models/index.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/quiz/models/index.ts ***!
  \**********************************************/
/*! exports provided: Answer, QuizResult, QuizTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _answer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./answer */ "./src/app/modules/quiz/models/answer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return _answer__WEBPACK_IMPORTED_MODULE_0__["Answer"]; });

/* harmony import */ var _quiz_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz-result */ "./src/app/modules/quiz/models/quiz-result.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuizResult", function() { return _quiz_result__WEBPACK_IMPORTED_MODULE_1__["QuizResult"]; });

/* harmony import */ var _quiz_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-task */ "./src/app/modules/quiz/models/quiz-task.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuizTask", function() { return _quiz_task__WEBPACK_IMPORTED_MODULE_2__["QuizTask"]; });






/***/ }),

/***/ "./src/app/modules/quiz/models/quiz-result.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/quiz/models/quiz-result.ts ***!
  \****************************************************/
/*! exports provided: QuizResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizResult", function() { return QuizResult; });
var QuizResult = /** @class */ (function () {
    function QuizResult(quizResultList, resultTime) {
        this.quizResultList = quizResultList;
        this.resultTime = resultTime;
    }
    return QuizResult;
}());



/***/ }),

/***/ "./src/app/modules/quiz/models/quiz-task.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/quiz/models/quiz-task.ts ***!
  \**************************************************/
/*! exports provided: QuizTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizTask", function() { return QuizTask; });
var QuizTask = /** @class */ (function () {
    function QuizTask(task, answer) {
        this.task = task;
        this.answer = answer;
    }
    return QuizTask;
}());



/***/ }),

/***/ "./src/app/modules/quiz/quiz-api/case/get-answer-list.case.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/quiz/quiz-api/case/get-answer-list.case.ts ***!
  \********************************************************************/
/*! exports provided: GetAnswerListCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAnswerListCase", function() { return GetAnswerListCase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_api_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quiz-api.repository */ "./src/app/modules/quiz/quiz-api/quiz-api.repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetAnswerListCase = /** @class */ (function () {
    function GetAnswerListCase(repository) {
        this.repository = repository;
    }
    GetAnswerListCase.prototype.execute = function () {
        return this.repository.getAnswerList();
    };
    GetAnswerListCase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_quiz_api_repository__WEBPACK_IMPORTED_MODULE_1__["QuizApiRepository"]])
    ], GetAnswerListCase);
    return GetAnswerListCase;
}());



/***/ }),

/***/ "./src/app/modules/quiz/quiz-api/case/get-current-task-id.case.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/quiz/quiz-api/case/get-current-task-id.case.ts ***!
  \************************************************************************/
/*! exports provided: GetCurrentTaskIdCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentTaskIdCase", function() { return GetCurrentTaskIdCase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_api_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quiz-api.repository */ "./src/app/modules/quiz/quiz-api/quiz-api.repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetCurrentTaskIdCase = /** @class */ (function () {
    function GetCurrentTaskIdCase(repository) {
        this.repository = repository;
    }
    GetCurrentTaskIdCase.prototype.execute = function () {
        return this.repository.getCurrentTaskId();
    };
    GetCurrentTaskIdCase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_quiz_api_repository__WEBPACK_IMPORTED_MODULE_1__["QuizApiRepository"]])
    ], GetCurrentTaskIdCase);
    return GetCurrentTaskIdCase;
}());



/***/ }),

/***/ "./src/app/modules/quiz/quiz-api/case/get-task-list.case.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/quiz/quiz-api/case/get-task-list.case.ts ***!
  \******************************************************************/
/*! exports provided: GetTaskListCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTaskListCase", function() { return GetTaskListCase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_api_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quiz-api.repository */ "./src/app/modules/quiz/quiz-api/quiz-api.repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetTaskListCase = /** @class */ (function () {
    function GetTaskListCase(repository) {
        this.repository = repository;
    }
    GetTaskListCase.prototype.execute = function () {
        return this.repository.getTaskList();
    };
    GetTaskListCase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_quiz_api_repository__WEBPACK_IMPORTED_MODULE_1__["QuizApiRepository"]])
    ], GetTaskListCase);
    return GetTaskListCase;
}());



/***/ }),

/***/ "./src/app/modules/quiz/quiz-api/case/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/quiz/quiz-api/case/index.ts ***!
  \*****************************************************/
/*! exports provided: GetAnswerListCase, GetCurrentTaskIdCase, GetTaskListCase, SaveAnswerCase, SaveCurrentTaskIdCase, TryAgainQuizCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_answer_list_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-answer-list.case */ "./src/app/modules/quiz/quiz-api/case/get-answer-list.case.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAnswerListCase", function() { return _get_answer_list_case__WEBPACK_IMPORTED_MODULE_0__["GetAnswerListCase"]; });

/* harmony import */ var _get_current_task_id_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-current-task-id.case */ "./src/app/modules/quiz/quiz-api/case/get-current-task-id.case.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCurrentTaskIdCase", function() { return _get_current_task_id_case__WEBPACK_IMPORTED_MODULE_1__["GetCurrentTaskIdCase"]; });

/* harmony import */ var _get_task_list_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-task-list.case */ "./src/app/modules/quiz/quiz-api/case/get-task-list.case.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetTaskListCase", function() { return _get_task_list_case__WEBPACK_IMPORTED_MODULE_2__["GetTaskListCase"]; });

/* harmony import */ var _save_answer_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save-answer.case */ "./src/app/modules/quiz/quiz-api/case/save-answer.case.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveAnswerCase", function() { return _save_answer_case__WEBPACK_IMPORTED_MODULE_3__["SaveAnswerCase"]; });

/* harmony import */ var _save_current_task_id_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save-current-task-id.case */ "./src/app/modules/quiz/quiz-api/case/save-current-task-id.case.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveCurrentTaskIdCase", function() { return _save_current_task_id_case__WEBPACK_IMPORTED_MODULE_4__["SaveCurrentTaskIdCase"]; });

/* harmony import */ var _try_again_quiz_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./try-again-quiz.case */ "./src/app/modules/quiz/quiz-api/case/try-again-quiz.case.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TryAgainQuizCase", function() { return _try_again_quiz_case__WEBPACK_IMPORTED_MODULE_5__["TryAgainQuizCase"]; });









/***/ }),

/***/ "./src/app/modules/quiz/quiz-api/case/save-answer.case.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/quiz/quiz-api/case/save-answer.case.ts ***!
  \****************************************************************/
/*! exports provided: SaveAnswerCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveAnswerCase", function() { return SaveAnswerCase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_api_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quiz-api.repository */ "./src/app/modules/quiz/quiz-api/quiz-api.repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @description Case - слой преобразования данных из чистой модели
 * из хранилищя, в более подготовленные данные для бизнес логики
 * и именно с ним мы работаем в контроллере компонента,
 * служит для простых преобразований, например, в случае плохо
 * спроектированного API или работы с внешним API, на которое повлиять
 * не представляется возможным. Когда преобразование не требуется - отдаем, как есть.
 * НО, важное замечание, это один из примеров, как можно работать с сервером и данными, конечное
 * решение принимаю обычно в обсуждении с командой и проектом. В принципе подход
 * repository -> serivce (а не как здесь, repository -> case -> service) тоже имеет право на жизнь
 * @example Пример преобразования: ResponseModel { isConnectService1: boolean, isConnectService2 }
 *  И нам интересен только подключен ли он к 1-ому сервису, тогда мы вернем не Observable<ResponseModel>,
 *  а Observable<boolean>
 */
var SaveAnswerCase = /** @class */ (function () {
    function SaveAnswerCase(repository) {
        this.repository = repository;
    }
    SaveAnswerCase.prototype.execute = function (answer, isDirty) {
        if (isDirty === void 0) { isDirty = false; }
        return this.repository.saveAnswer(answer, isDirty);
    };
    SaveAnswerCase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_quiz_api_repository__WEBPACK_IMPORTED_MODULE_1__["QuizApiRepository"]])
    ], SaveAnswerCase);
    return SaveAnswerCase;
}());



/***/ }),

/***/ "./src/app/modules/quiz/quiz-api/case/save-current-task-id.case.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/quiz/quiz-api/case/save-current-task-id.case.ts ***!
  \*************************************************************************/
/*! exports provided: SaveCurrentTaskIdCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveCurrentTaskIdCase", function() { return SaveCurrentTaskIdCase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_api_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quiz-api.repository */ "./src/app/modules/quiz/quiz-api/quiz-api.repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaveCurrentTaskIdCase = /** @class */ (function () {
    function SaveCurrentTaskIdCase(repository) {
        this.repository = repository;
    }
    SaveCurrentTaskIdCase.prototype.execute = function (taskId) {
        return this.repository.saveCurrentTaskId(taskId);
    };
    SaveCurrentTaskIdCase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_quiz_api_repository__WEBPACK_IMPORTED_MODULE_1__["QuizApiRepository"]])
    ], SaveCurrentTaskIdCase);
    return SaveCurrentTaskIdCase;
}());



/***/ }),

/***/ "./src/app/modules/quiz/quiz-api/case/try-again-quiz.case.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/quiz/quiz-api/case/try-again-quiz.case.ts ***!
  \*******************************************************************/
/*! exports provided: TryAgainQuizCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryAgainQuizCase", function() { return TryAgainQuizCase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_api_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quiz-api.repository */ "./src/app/modules/quiz/quiz-api/quiz-api.repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TryAgainQuizCase = /** @class */ (function () {
    function TryAgainQuizCase(repository) {
        this.repository = repository;
    }
    TryAgainQuizCase.prototype.execute = function () {
        return this.repository.tryAgainQuiz();
    };
    TryAgainQuizCase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_quiz_api_repository__WEBPACK_IMPORTED_MODULE_1__["QuizApiRepository"]])
    ], TryAgainQuizCase);
    return TryAgainQuizCase;
}());



/***/ }),

/***/ "./src/app/modules/quiz/quiz-api/data/task-list.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/quiz/quiz-api/data/task-list.ts ***!
  \*********************************************************/
/*! exports provided: taskList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskList", function() { return taskList; });
var taskList = [
    {
        id: '1',
        image: 'https://dummyimage.com/600x400/000/00ffd5.png',
    },
    {
        id: '2',
        image: 'https://dummyimage.com/600x400/000/ff00d5.png',
    },
    {
        id: '3',
        image: 'https://dummyimage.com/600x400/000/0f0fd5.png',
    },
];


/***/ }),

/***/ "./src/app/modules/quiz/quiz-api/quiz-api.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/quiz/quiz-api/quiz-api.module.ts ***!
  \**********************************************************/
/*! exports provided: QuizApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizApiModule", function() { return QuizApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_api_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz-api.repository */ "./src/app/modules/quiz/quiz-api/quiz-api.repository.ts");
/* harmony import */ var _case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./case */ "./src/app/modules/quiz/quiz-api/case/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuizApiModule = /** @class */ (function () {
    function QuizApiModule() {
    }
    QuizApiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _quiz_api_repository__WEBPACK_IMPORTED_MODULE_1__["QuizApiRepository"],
                _case__WEBPACK_IMPORTED_MODULE_2__["GetTaskListCase"],
                _case__WEBPACK_IMPORTED_MODULE_2__["GetAnswerListCase"],
                _case__WEBPACK_IMPORTED_MODULE_2__["SaveAnswerCase"],
                _case__WEBPACK_IMPORTED_MODULE_2__["SaveCurrentTaskIdCase"],
                _case__WEBPACK_IMPORTED_MODULE_2__["GetCurrentTaskIdCase"],
                _case__WEBPACK_IMPORTED_MODULE_2__["TryAgainQuizCase"]
            ]
        })
    ], QuizApiModule);
    return QuizApiModule;
}());



/***/ }),

/***/ "./src/app/modules/quiz/quiz-api/quiz-api.repository.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/quiz/quiz-api/quiz-api.repository.ts ***!
  \**************************************************************/
/*! exports provided: QuizApiRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizApiRepository", function() { return QuizApiRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_task_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/task-list */ "./src/app/modules/quiz/quiz-api/data/task-list.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./src/app/modules/quiz/models/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var _shared_services_localstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/localstorage */ "./src/app/modules/shared/services/localstorage/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * @description Данный класс - упрощенная модель класса работы с API
 * У нас в компании мы используем декораторы для удобной работы с данными сервера
 * по формату jsonrpc. Выглядит примерно так:
 * @JsonRpcPath(path, config)
 * class Repository {
 *  @JsonRpcRequest(methodName)
 *  getData(reqModel: ReqModel): Observable<ResponseModel>
 * }
 * Сущность Repository мы используем как низкоуровневый способ общения
 * с хранилищем (сервер, localStorage, indexedDb, etc...)
 * Он просто получает данные и отдает их дальше, без преобразований
 * Служит, чтобы легко можно было подменить источник данных и не менять верхние слои бизнес
 * логики. Repository создается не на весь проект один, их несколько на разные модули приложения
 * Но в нашем случае конкретно сейчас это отчасти и бэкэнд :)
 */
var QuizApiRepository = /** @class */ (function () {
    function QuizApiRepository(localStorageService) {
        this.localStorageService = localStorageService;
        this.answerList = [];
    }
    QuizApiRepository.prototype.tryAgainQuiz = function () {
        this.answerList.length = 0;
        this.localStorageService.clear();
        return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(void 0).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
    };
    /**
     * @description Имитируем через rxjs асинхронное общение с сервисом
     */
    QuizApiRepository.prototype.getTaskList = function () {
        return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(_data_task_list__WEBPACK_IMPORTED_MODULE_2__["taskList"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
    };
    QuizApiRepository.prototype.getAnswerList = function () {
        this.answerList = this.localStorageService.getItem('answerList', function (value) {
            return (value || []);
        });
        // const answerList = db.answerList.map(answerItem => Answer.fromServer(answerItem));
        return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(this.answerList.map(_models__WEBPACK_IMPORTED_MODULE_3__["Answer"].fromServer)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
    };
    QuizApiRepository.prototype.saveCurrentTaskId = function (taskId) {
        this.localStorageService.setItem('currentTaskId', taskId);
        return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(void 0).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
    };
    QuizApiRepository.prototype.getCurrentTaskId = function () {
        /**
         * @description Так как это все-таки логика бэка, тут, в случае если currentTaskId
         * нет, должен возвращаться id первого из списка, не буду хардкодить и обработаю эту логику в компоненте
         */
        var currentTaskId = this.localStorageService.getItem('currentTaskId', function (value) { return value && value.toString(); });
        return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(currentTaskId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
    };
    /**
     *
     * @description По идее вся логика должна быть на бэкенде,
     * но так как у нас его тут нет, делаем сами только по этой причине,
     * а не чтобы усложнить :) Флаг isDirty нужен по той же причине
     * Потому что ответили ли мы на вопрос - решает бэк и ставит флаг isAnswered
     * Но в нашем случае мы сами себе бэк и чтобы isAnswered не ставить в бизнес логике
     * фронта, делаем такой костылек (хотя все-равно он фактиески идет из бизнес логики, просто иллюзия, что нет :))
     */
    QuizApiRepository.prototype.saveAnswer = function (answer, isDirty) {
        if (isDirty === void 0) { isDirty = false; }
        if (!answer.text && !answer.time) {
            /**
             * тут по идеее вернем какую-то ошибку и в будущем обработаем
             */
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Not valid task').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
        }
        var savedAnswer = this.answerList.find(function (answerItem) { return answerItem.taskId === answer.taskId; });
        if (!savedAnswer) {
            var answerToSave = Object.assign({}, answer, { isAnswered: !isDirty });
            this.answerList.push(answerToSave);
        }
        else {
            Object.assign(savedAnswer, { text: answer.text, time: answer.time, isAnswered: !isDirty });
        }
        this.localStorageService.setItem('answerList', JSON.stringify(this.answerList));
        return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(void 0).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
    };
    QuizApiRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_localstorage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]])
    ], QuizApiRepository);
    return QuizApiRepository;
}());



/***/ }),

/***/ "./src/app/modules/quiz/quiz-main/quiz-main.component.css":
/*!****************************************************************!*\
  !*** ./src/app/modules/quiz/quiz-main/quiz-main.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: space-around;\n}\n"

/***/ }),

/***/ "./src/app/modules/quiz/quiz-main/quiz-main.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/quiz/quiz-main/quiz-main.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <button [disabled]=\"taskPaginator.isDisabledPrevShow() || isRequest\" (click)=\"taskPaginator.prev()\" app-button>Предыдущий вопрос</button>\n</div>\n<div>\n  <app-quiz-question\n    *ngIf=\"taskPaginator.currentItem && !isRequest\"\n    [quizTask]=\"taskPaginator.currentItem\"\n    [quizTaskIndex]=\"taskPaginator.currentIndex\"\n    [quizTaskListLength]=\"taskPaginator.list.length\"\n    (onSendAnswer)=\"onSendAnswer($event)\">\n  </app-quiz-question>\n</div>\n<div>\n  <button [disabled]=\"taskPaginator.isDisabledNextShow() || isRequest\" (click)=\"taskPaginator.next()\" app-button>Следующий вопрос</button>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/quiz/quiz-main/quiz-main.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/quiz/quiz-main/quiz-main.component.ts ***!
  \***************************************************************/
/*! exports provided: QuizMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizMainComponent", function() { return QuizMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz-storage.service */ "./src/app/modules/quiz/services/quiz-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_modules_shared_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/shared/carousel */ "./src/app/modules/shared/carousel/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizMainComponent = /** @class */ (function () {
    function QuizMainComponent(quizStorageService, router, activatedRoute) {
        this.quizStorageService = quizStorageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.taskPaginator = null;
        this.isRequest = false;
        this.currentTaskId = null;
    }
    QuizMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouteSub = this.activatedRoute.data.subscribe(function (data) {
            var quizState = data.quizState;
            _this.currentTaskId = quizState.currentTaskId || quizState.list[0].task.id;
            var index = quizState.list.findIndex(function (taskItem) { return taskItem.task.id === _this.currentTaskId; });
            _this.taskPaginator =
                new app_modules_shared_carousel__WEBPACK_IMPORTED_MODULE_3__["Carousel"](quizState.list, index, _this.onAfterChangeItem.bind(_this), _this.onBeforeChangeItem.bind(_this));
        });
    };
    QuizMainComponent.prototype.onBeforeChangeItem = function (item) {
        if (!item) {
            return;
        }
        item.answer.stopTimer();
    };
    QuizMainComponent.prototype.onAfterChangeItem = function (item) {
        if (!item) {
            return;
        }
        this.currentTaskId = item.task.id;
        this.quizStorageService.saveCurrentTaskId(this.currentTaskId);
        item.answer.startTimer();
    };
    QuizMainComponent.prototype.onSendAnswer = function (answer) {
        var _this = this;
        this.isRequest = true;
        this.quizStorageService.saveAnswer(answer.toServer()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.isRequest = false;
        }))
            .subscribe(function () {
            _this.onSaveAnswer(answer.taskId);
        });
    };
    QuizMainComponent.prototype.onSaveAnswer = function (taskId) {
        var quizTaskIndex = this.taskPaginator.list.findIndex(function (quizTaskItem) { return quizTaskItem.task.id === taskId; });
        var removed = this.taskPaginator.removeByIndex(quizTaskIndex);
        if (removed && this.taskPaginator.list.length === 0) {
            this.router.navigate(['quiz', 'result']);
        }
    };
    /**
     * @description Перед тем, как перезагрузить вкладку, сохраняем состояние опросника
     * Конечно, есть вариант, когда у пользователя пропал интернет или выключился компьютер,
     * но здесь уже стоит решить при конкретной бизнес-задаче, важно ли для нас это
     * или можно пренебречь этим
     */
    QuizMainComponent.prototype.onReloadPage = function () {
        var _this = this;
        this.taskPaginator.list.forEach(function (listItem) { return _this.quizStorageService.saveAnswer(listItem.answer.toServer(), true); });
    };
    QuizMainComponent.prototype.ngOnDestroy = function () {
        this.activatedRouteSub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], QuizMainComponent.prototype, "onReloadPage", null);
    QuizMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-main',
            template: __webpack_require__(/*! ./quiz-main.component.html */ "./src/app/modules/quiz/quiz-main/quiz-main.component.html"),
            styles: [__webpack_require__(/*! ./quiz-main.component.css */ "./src/app/modules/quiz/quiz-main/quiz-main.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_storage_service__WEBPACK_IMPORTED_MODULE_1__["QuizStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], QuizMainComponent);
    return QuizMainComponent;
}());



/***/ }),

/***/ "./src/app/modules/quiz/quiz-question/quiz-question.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/quiz/quiz-question/quiz-question.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #quizQuestion=\"ngForm\"\n      (ngSubmit)=\"sendAnswer(quizQuestion)\"\n      novalidate>\n  <h3> Потраченное время: {{ quizTask.answer.time | secondsToTime}} </h3>\n  <h4> Задание {{ quizTaskIndex + 1 }} из {{ quizTaskListLength }} оставшихся</h4>\n  <div class=\"quiz-question__text\">\n    <img width=\"600\" height=\"400\" [src]=\"quizTask.task.image\" alt=\"task image\">\n  </div>\n\n  <div class=\"quiz-question__answer\">\n    <input app-input name=\"answer\" [(ngModel)]=\"answerText\" (ngModelChange)=\"onChangeAnswerText()\" required>\n  </div>\n\n  <button\n    [disabled]=\"!quizQuestion.form.valid\"\n    appButton\n    class=\"quiz-question__send-answer\">\n    Отправить\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/quiz/quiz-question/quiz-question.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/quiz/quiz-question/quiz-question.component.ts ***!
  \***********************************************************************/
/*! exports provided: QuizQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizQuestionComponent", function() { return QuizQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./src/app/modules/quiz/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizQuestionComponent = /** @class */ (function () {
    function QuizQuestionComponent() {
        this.answerText = '';
        this.onSendAnswer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    QuizQuestionComponent.prototype.ngOnChanges = function (changes) {
        if (changes && changes.quizTask && changes.quizTask.currentValue) {
            /**
             * Чтобы не менять модель answer неявно по ссылке через ngModel,
             * сохраняем ее у себя в компоненте и при ответе - сохраняем
             */
            this.answerText = changes.quizTask.currentValue.answer.text;
        }
    };
    QuizQuestionComponent.prototype.onChangeAnswerText = function () {
        this.quizTask.answer.setAnswer(this.answerText);
    };
    QuizQuestionComponent.prototype.sendAnswer = function () {
        this.quizTask.answer.stopTimer();
        this.onSendAnswer.emit(this.quizTask.answer);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], QuizQuestionComponent.prototype, "quizTaskIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], QuizQuestionComponent.prototype, "quizTaskListLength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_1__["QuizTask"])
    ], QuizQuestionComponent.prototype, "quizTask", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QuizQuestionComponent.prototype, "onSendAnswer", void 0);
    QuizQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-question',
            template: __webpack_require__(/*! ./quiz-question.component.html */ "./src/app/modules/quiz/quiz-question/quiz-question.component.html")
        })
    ], QuizQuestionComponent);
    return QuizQuestionComponent;
}());



/***/ }),

/***/ "./src/app/modules/quiz/quiz-result/quiz-result.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/quiz/quiz-result/quiz-result.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"quiz-result-list\">\n  <li *ngFor=\"let item of result.quizResultList; index as i\">\n    {{ i + 1 }}\n    <img width=\"300\" height=\"200\" [src]=\"item.task.image\" alt=\"quiz image\">\n    <div>Ответ: {{ item.answer.text }}</div>\n    <div>Затраченное время на вопрос {{ item.answer.time | secondsToTime }}</div>\n  </li>\n</ul>\n<div>\n  Общее затраченное время: {{ result.resultTime | secondsToTime }}\n</div>\n<button app-button (click)=\"tryAgainQuiz()\">Пройти заново</button>\n"

/***/ }),

/***/ "./src/app/modules/quiz/quiz-result/quiz-result.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/quiz/quiz-result/quiz-result.component.ts ***!
  \*******************************************************************/
/*! exports provided: QuizResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizResultComponent", function() { return QuizResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_quiz_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/quiz-storage.service */ "./src/app/modules/quiz/services/quiz-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizResultComponent = /** @class */ (function () {
    function QuizResultComponent(activatedRoute, router, quizStorageService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.quizStorageService = quizStorageService;
    }
    QuizResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.result = data.quizResult;
        });
    };
    QuizResultComponent.prototype.tryAgainQuiz = function () {
        var _this = this;
        this.quizStorageService.tryAgainQuiz().subscribe(function () { return _this.router.navigate(['quiz', 'question']); });
    };
    QuizResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-result',
            template: __webpack_require__(/*! ./quiz-result.component.html */ "./src/app/modules/quiz/quiz-result/quiz-result.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_quiz_storage_service__WEBPACK_IMPORTED_MODULE_2__["QuizStorageService"]])
    ], QuizResultComponent);
    return QuizResultComponent;
}());



/***/ }),

/***/ "./src/app/modules/quiz/quiz-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/quiz/quiz-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: QuizRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizRoutingModule", function() { return QuizRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_main_quiz_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz-main/quiz-main.component */ "./src/app/modules/quiz/quiz-main/quiz-main.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_result_quiz_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-result/quiz-result.component */ "./src/app/modules/quiz/quiz-result/quiz-result.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./src/app/modules/quiz/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var quizRoutes = [
    { path: 'quiz/question',
        component: _quiz_main_quiz_main_component__WEBPACK_IMPORTED_MODULE_1__["QuizMainComponent"],
        resolve: {
            quizState: _services__WEBPACK_IMPORTED_MODULE_4__["QuizTaskListResolver"]
        }
    },
    { path: 'quiz/result',
        component: _quiz_result_quiz_result_component__WEBPACK_IMPORTED_MODULE_3__["QuizResultComponent"],
        resolve: {
            quizResult: _services__WEBPACK_IMPORTED_MODULE_4__["QuizResultResolver"]
        }
    }
];
var QuizRoutingModule = /** @class */ (function () {
    function QuizRoutingModule() {
    }
    QuizRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(quizRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ],
            providers: [_services__WEBPACK_IMPORTED_MODULE_4__["QuizTaskListResolver"], _services__WEBPACK_IMPORTED_MODULE_4__["QuizResultResolver"]]
        })
    ], QuizRoutingModule);
    return QuizRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/quiz/quiz.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/quiz/quiz.module.ts ***!
  \*********************************************/
/*! exports provided: QuizModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizModule", function() { return QuizModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./src/app/modules/shared/index.ts");
/* harmony import */ var _quiz_question_quiz_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-question/quiz-question.component */ "./src/app/modules/quiz/quiz-question/quiz-question.component.ts");
/* harmony import */ var _quiz_main_quiz_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz-main/quiz-main.component */ "./src/app/modules/quiz/quiz-main/quiz-main.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _quiz_api_quiz_api_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz-api/quiz-api.module */ "./src/app/modules/quiz/quiz-api/quiz-api.module.ts");
/* harmony import */ var _quiz_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quiz-routing.module */ "./src/app/modules/quiz/quiz-routing.module.ts");
/* harmony import */ var _quiz_result_quiz_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz-result/quiz-result.component */ "./src/app/modules/quiz/quiz-result/quiz-result.component.ts");
/* harmony import */ var _services_quiz_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/quiz-storage.service */ "./src/app/modules/quiz/services/quiz-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var QuizModule = /** @class */ (function () {
    function QuizModule() {
    }
    QuizModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _quiz_routing_module__WEBPACK_IMPORTED_MODULE_7__["QuizRoutingModule"],
                _quiz_api_quiz_api_module__WEBPACK_IMPORTED_MODULE_6__["QuizApiModule"]
            ],
            declarations: [_quiz_question_quiz_question_component__WEBPACK_IMPORTED_MODULE_3__["QuizQuestionComponent"], _quiz_main_quiz_main_component__WEBPACK_IMPORTED_MODULE_4__["QuizMainComponent"], _quiz_result_quiz_result_component__WEBPACK_IMPORTED_MODULE_8__["QuizResultComponent"]],
            providers: [_services_quiz_storage_service__WEBPACK_IMPORTED_MODULE_9__["QuizStorageService"]]
        })
    ], QuizModule);
    return QuizModule;
}());



/***/ }),

/***/ "./src/app/modules/quiz/services/index.ts":
/*!************************************************!*\
  !*** ./src/app/modules/quiz/services/index.ts ***!
  \************************************************/
/*! exports provided: QuizResultResolver, QuizTaskListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quiz_result_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz-result.resolver */ "./src/app/modules/quiz/services/quiz-result.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuizResultResolver", function() { return _quiz_result_resolver__WEBPACK_IMPORTED_MODULE_0__["QuizResultResolver"]; });

/* harmony import */ var _quiz_task_list_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz-task-list.resolver */ "./src/app/modules/quiz/services/quiz-task-list.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuizTaskListResolver", function() { return _quiz_task_list_resolver__WEBPACK_IMPORTED_MODULE_1__["QuizTaskListResolver"]; });





/***/ }),

/***/ "./src/app/modules/quiz/services/quiz-result.resolver.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/quiz/services/quiz-result.resolver.ts ***!
  \***************************************************************/
/*! exports provided: QuizResultResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizResultResolver", function() { return QuizResultResolver; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz-storage.service */ "./src/app/modules/quiz/services/quiz-storage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizResultResolver = /** @class */ (function () {
    function QuizResultResolver(quizMainService, router) {
        this.quizMainService = quizMainService;
        this.router = router;
    }
    QuizResultResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.quizMainService.getQuizResult()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            /**
             * Не даем переходить в результат, если по какой-то причине
             * не смогли получить результат (например, пользователь еще не прошел тест до конца)
             * В данном случае не обрабатываю конкретные ошибки, просто перекидываю в quiz
             * В случае более сложной обработки возможны варианты (перекидывать на страницу ошибки, например)
             */
            _this.router.navigate(['quiz', 'question']);
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_3__["of"])(error);
        }));
    };
    QuizResultResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_quiz_storage_service__WEBPACK_IMPORTED_MODULE_1__["QuizStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], QuizResultResolver);
    return QuizResultResolver;
}());



/***/ }),

/***/ "./src/app/modules/quiz/services/quiz-storage.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/quiz/services/quiz-storage.service.ts ***!
  \***************************************************************/
/*! exports provided: QuizStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizStorageService", function() { return QuizStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/observable/forkJoin.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./src/app/modules/quiz/models/index.ts");
/* harmony import */ var _quiz_api_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quiz-api/case */ "./src/app/modules/quiz/quiz-api/case/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizStorageService = /** @class */ (function () {
    function QuizStorageService(getTaskListCase, getAnswerListCase, saveAnswerCase, getCurrentTaskIdCase, saveCurrentTaskIdCase, tryAgainQuizCase) {
        this.getTaskListCase = getTaskListCase;
        this.getAnswerListCase = getAnswerListCase;
        this.saveAnswerCase = saveAnswerCase;
        this.getCurrentTaskIdCase = getCurrentTaskIdCase;
        this.saveCurrentTaskIdCase = saveCurrentTaskIdCase;
        this.tryAgainQuizCase = tryAgainQuizCase;
    }
    QuizStorageService.prototype.tryAgainQuiz = function () {
        return this.tryAgainQuizCase.execute();
    };
    QuizStorageService.prototype.saveCurrentTaskId = function (taskId) {
        return this.saveCurrentTaskIdCase.execute(taskId);
    };
    QuizStorageService.prototype.getTaskId = function () {
        return this.getCurrentTaskIdCase.execute();
    };
    QuizStorageService.prototype.saveAnswer = function (answer, isDirty) {
        if (isDirty === void 0) { isDirty = false; }
        return this.saveAnswerCase.execute(answer, isDirty);
    };
    QuizStorageService.prototype.getQuizTaskList = function () {
        var _this = this;
        return Object(rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([this.getTaskListCase.execute(), this.getAnswerListCase.execute()])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.handleTaskListWithAnswerList(data); }));
    };
    QuizStorageService.prototype.getQuizResult = function () {
        var _this = this;
        return Object(rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([this.getTaskListCase.execute(), this.getAnswerListCase.execute()])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.handleQuizTaskResult(data); }));
    };
    QuizStorageService.prototype.handleQuizTaskResult = function (data) {
        var taskList = data[0];
        var answerList = data[1];
        var answeredComplete = answerList && answerList.every(function (answerItem) { return answerItem.isAnswered; });
        if (taskList.length !== answerList.length || !answeredComplete) {
            throw new Error('Not all questions with answers');
        }
        var quizTaskList = taskList.map(function (taskItem) {
            var answer = answerList.find(function (answerItem) { return taskItem.id === answerItem.taskId; });
            return new _models__WEBPACK_IMPORTED_MODULE_3__["QuizTask"](taskItem, answer);
        }).sort(function (a, b) { return +a.task.id - +b.task.id; });
        var resultTime = answerList.reduce(function (prev, curr) {
            prev += curr.time;
            return prev;
        }, 0);
        return new _models__WEBPACK_IMPORTED_MODULE_3__["QuizResult"](quizTaskList, resultTime);
    };
    /**
     * @description Предполагая, что у нас база данных нормализована
     * и хранит модель вопрос и ответов отдельно, приводим для нас в чуть более удобный вид
     * по идее этим должен заниматься бэк для фронта
     */
    QuizStorageService.prototype.handleTaskListWithAnswerList = function (data) {
        var taskList = data[0];
        var answerList = data[1];
        var taskWithoutAnswer = taskList.filter(function (task) {
            return !answerList.some(function (answerItem) { return task.id === answerItem.taskId; });
        });
        var answerResultList = data[1].filter(function (answer) { return !answer.isAnswered; }).concat(taskWithoutAnswer.map(function (taskItem) { return new _models__WEBPACK_IMPORTED_MODULE_3__["Answer"](taskItem.id); }));
        if (answerResultList.length === 0) {
            throw new Error('All question is answered');
        }
        return answerResultList.map(function (answer) {
            var task = taskList.find(function (taskItem) { return taskItem.id === answer.taskId; });
            return new _models__WEBPACK_IMPORTED_MODULE_3__["QuizTask"](task, answer);
        }).sort(function (a, b) { return +a.task.id - +b.task.id; });
    };
    QuizStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_quiz_api_case__WEBPACK_IMPORTED_MODULE_4__["GetTaskListCase"],
            _quiz_api_case__WEBPACK_IMPORTED_MODULE_4__["GetAnswerListCase"],
            _quiz_api_case__WEBPACK_IMPORTED_MODULE_4__["SaveAnswerCase"],
            _quiz_api_case__WEBPACK_IMPORTED_MODULE_4__["GetCurrentTaskIdCase"],
            _quiz_api_case__WEBPACK_IMPORTED_MODULE_4__["SaveCurrentTaskIdCase"],
            _quiz_api_case__WEBPACK_IMPORTED_MODULE_4__["TryAgainQuizCase"]])
    ], QuizStorageService);
    return QuizStorageService;
}());



/***/ }),

/***/ "./src/app/modules/quiz/services/quiz-task-list.resolver.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/quiz/services/quiz-task-list.resolver.ts ***!
  \******************************************************************/
/*! exports provided: QuizTaskListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizTaskListResolver", function() { return QuizTaskListResolver; });
/* harmony import */ var _quiz_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz-storage.service */ "./src/app/modules/quiz/services/quiz-storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/observable/forkJoin.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuizTaskListResolver = /** @class */ (function () {
    function QuizTaskListResolver(quizMainService, router) {
        this.quizMainService = quizMainService;
        this.router = router;
    }
    QuizTaskListResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return Object(rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])([this.quizMainService.getQuizTaskList(), this.quizMainService.getTaskId()])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return {
                list: data[0],
                currentTaskId: data[1]
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.error(error);
            /**
             * Ловим (ну, условно ловим :)) ошибку, что тест уже пройден, и надо показать результаты
             */
            _this.router.navigate(['quiz', 'result']);
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
        }));
    };
    QuizTaskListResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_quiz_storage_service__WEBPACK_IMPORTED_MODULE_0__["QuizStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuizTaskListResolver);
    return QuizTaskListResolver;
}());



/***/ }),

/***/ "./src/app/modules/shared/app-button/app-button.component.css":
/*!********************************************************************!*\
  !*** ./src/app/modules/shared/app-button/app-button.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border: 1px solid black;\n  border-radius: 5px;\n  transition: all .2s;\n  padding: 1em 2em;\n  cursor: pointer;\n  outline: none;\n}\n\n:host:not([disabled]):hover {\n  background-color: #f0f0f0;\n}\n\n:host:not([disabled]):active {\n  background-color: #ddd;\n}\n\n:host[disabled] {\n  opacity: .3;\n  cursor: default;\n}\n"

/***/ }),

/***/ "./src/app/modules/shared/app-button/app-button.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shared/app-button/app-button.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "./src/app/modules/shared/app-button/app-button.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/shared/app-button/app-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: AppButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppButtonComponent", function() { return AppButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppButtonComponent = /** @class */ (function () {
    function AppButtonComponent() {
    }
    AppButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'button[app-button]',
            template: __webpack_require__(/*! ./app-button.component.html */ "./src/app/modules/shared/app-button/app-button.component.html"),
            styles: [__webpack_require__(/*! ./app-button.component.css */ "./src/app/modules/shared/app-button/app-button.component.css")]
        })
    ], AppButtonComponent);
    return AppButtonComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/carousel/carousel.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/shared/carousel/carousel.ts ***!
  \*****************************************************/
/*! exports provided: Carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
var Carousel = /** @class */ (function () {
    function Carousel(list, currentIndex, onAfterChangeItem, onBeforeChangeItem) {
        if (currentIndex === void 0) { currentIndex = 0; }
        this.list = list;
        this.currentIndex = currentIndex;
        this.onAfterChangeItem = onAfterChangeItem;
        this.onBeforeChangeItem = onBeforeChangeItem;
        this.currentItem = null;
        this.onBeforeChangeItem(null);
        this.currentItem = list[currentIndex];
        this.onAfterChangeItem(this.currentItem);
    }
    Carousel.prototype.next = function () {
        this.onBeforeChangeItem(this.currentItem);
        this.currentItem = this.list[++this.currentIndex];
        this.onAfterChangeItem(this.currentItem);
    };
    Carousel.prototype.prev = function () {
        this.onBeforeChangeItem(this.currentItem);
        this.currentItem = this.list[--this.currentIndex];
        this.onAfterChangeItem(this.currentItem);
    };
    Carousel.prototype.removeByIndex = function (index) {
        var removed = this.list.splice(index, 1).length > 0;
        if (this.currentIndex === this.list.length) {
            --this.currentIndex;
        }
        this.onBeforeChangeItem(this.currentItem);
        this.currentItem = this.list[this.currentIndex];
        this.onAfterChangeItem(this.currentItem);
        return removed;
    };
    Carousel.prototype.isDisabledNextShow = function () {
        return this.currentIndex >= this.list.length - 1 || this.list.length <= 1;
    };
    Carousel.prototype.isDisabledPrevShow = function () {
        return this.currentIndex === 0 || this.list.length <= 1;
    };
    return Carousel;
}());



/***/ }),

/***/ "./src/app/modules/shared/carousel/index.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/shared/carousel/index.ts ***!
  \**************************************************/
/*! exports provided: Carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel */ "./src/app/modules/shared/carousel/carousel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return _carousel__WEBPACK_IMPORTED_MODULE_0__["Carousel"]; });




/***/ }),

/***/ "./src/app/modules/shared/index.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/shared/index.ts ***!
  \*****************************************/
/*! exports provided: SharedModule, Carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ "./src/app/modules/shared/carousel/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return _carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"]; });





/***/ }),

/***/ "./src/app/modules/shared/pipes/index.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/shared/pipes/index.ts ***!
  \***********************************************/
/*! exports provided: SecondsToTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _seconds_to_time_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seconds-to-time.pipe */ "./src/app/modules/shared/pipes/seconds-to-time.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecondsToTimePipe", function() { return _seconds_to_time_pipe__WEBPACK_IMPORTED_MODULE_0__["SecondsToTimePipe"]; });




/***/ }),

/***/ "./src/app/modules/shared/pipes/seconds-to-time.pipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/shared/pipes/seconds-to-time.pipe.ts ***!
  \**************************************************************/
/*! exports provided: SecondsToTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondsToTimePipe", function() { return SecondsToTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecondsToTimePipe = /** @class */ (function () {
    function SecondsToTimePipe() {
    }
    SecondsToTimePipe.prototype.transform = function (value) {
        var hours = Math.floor(value / 3600);
        var minutes = Math.floor((value - (hours * 3600)) / 60);
        var seconds = value - (hours * 3600) - (minutes * 60);
        var result = '';
        if (hours < 10) {
            result += "0" + hours + ":";
        }
        else {
            result += hours + ":";
        }
        if (minutes < 10) {
            result += "0" + minutes + ":";
        }
        else {
            result += minutes + ":";
        }
        if (seconds < 10) {
            result += "0" + seconds;
        }
        else {
            result += seconds;
        }
        return result;
    };
    SecondsToTimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'secondsToTime'
        })
    ], SecondsToTimePipe);
    return SecondsToTimePipe;
}());



/***/ }),

/***/ "./src/app/modules/shared/services/index.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/shared/services/index.ts ***!
  \**************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage */ "./src/app/modules/shared/services/localstorage/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _localstorage__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"]; });




/***/ }),

/***/ "./src/app/modules/shared/services/localstorage/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/services/localstorage/index.ts ***!
  \***************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.service */ "./src/app/modules/shared/services/localstorage/localstorage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _localstorage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"]; });




/***/ }),

/***/ "./src/app/modules/shared/services/localstorage/localstorage.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/services/localstorage/localstorage.service.ts ***!
  \******************************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @description Накидал простенький сервис, так как адекватный побыстрому не нашел для последнего angular,
 * экспериментировать не стал и тут тоже не стал много писать и сделал по-простому
 */
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
        this.prefix = 'quiz_app:';
    }
    LocalStorageService.prototype.setItem = function (key, value) {
        localStorage.setItem("" + this.prefix + key, value);
    };
    LocalStorageService.prototype.getItem = function (key, mapper) {
        var value = null;
        try {
            value = JSON.parse(localStorage.getItem("" + this.prefix + key));
        }
        catch (e) {
            console.error('JSON parse error', e);
        }
        return mapper && mapper(value) || value;
    };
    LocalStorageService.prototype.clear = function () {
        localStorage.clear();
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_button_app_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-button/app-button.component */ "./src/app/modules/shared/app-button/app-button.component.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes */ "./src/app/modules/shared/pipes/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./src/app/modules/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_app_button_app_button_component__WEBPACK_IMPORTED_MODULE_2__["AppButtonComponent"], _pipes__WEBPACK_IMPORTED_MODULE_3__["SecondsToTimePipe"]],
            exports: [_app_button_app_button_component__WEBPACK_IMPORTED_MODULE_2__["AppButtonComponent"], _pipes__WEBPACK_IMPORTED_MODULE_3__["SecondsToTimePipe"]],
            providers: [_services__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]]
        })
    ], SharedModule);
    return SharedModule;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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

module.exports = __webpack_require__(/*! /Users/yaroslavlyzlov/Projects/quiz/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map