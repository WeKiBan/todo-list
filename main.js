/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bottom-slide-menu.js":
/*!**********************************!*\
  !*** ./src/bottom-slide-menu.js ***!
  \**********************************/
/*! exports provided: bottomSlide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bottomSlide\", function() { return bottomSlide; });\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ \"./src/selectors.js\");\n\n\nconst bottomSlide = (() => {\n    var taskPopupOpen = false;\n\n    const newTaskMenuControl = (e) => {\n    \n        if (taskPopupOpen === false) {\n            taskPopupOpen = true;\n            _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].newTaskPopup.style.height = \"32rem\";\n            _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].newTaskPopup.style.bottom = \"6rem\";\n        } else {\n            taskPopupOpen = false;\n            _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].newTaskPopup.style.height = \"\";\n            _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].newTaskPopup.style.bottom = \"\";\n        }\n    \n    }\n\n    // opens the new task menu at bottom of the screen\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].addTaskButton.addEventListener('click', function (e) {\n        e.stopPropagation();\n        newTaskMenuControl();\n    })\n    \n    // closes the new task menu when button is clicked\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].closeNewTaskBtn.addEventListener('click', newTaskMenuControl)\n    \n    // closes the new task menu if user clicks outside window\n    document.addEventListener('click', function (e) {\n        if (taskPopupOpen === true && !_selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].newTaskPopup.contains(e.target)) {\n            newTaskMenuControl();\n        }\n    })\n    \n})()\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/bottom-slide-menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _side_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-menu */ \"./src/side-menu.js\");\n/* harmony import */ var _bottom_slide_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottom-slide-menu */ \"./src/bottom-slide-menu.js\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/selectors.js":
/*!**************************!*\
  !*** ./src/selectors.js ***!
  \**************************/
/*! exports provided: selectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectors\", function() { return selectors; });\nconst selectors = (() => {\n    const sideNav = document.querySelector('[data-side-nav]')\n    const slideButton = document.querySelector('[data-slide-button]')\n    const allListsContainer = document.querySelector('[data-all-lists-container]')\n    const header = document.querySelector('[data-header]')\n    const mainDiv = document.querySelector('[data-main-div-wrapper]')\n    const addTaskButton = document.querySelector('[data-new-task-btn]')\n    const newTaskPopup = document.querySelector('[data-new-task-popup-container]')\n    const closeNewTaskBtn = document.querySelector('[data-close-new-task-btn]')\n    return {sideNav, slideButton, header, allListsContainer, mainDiv, addTaskButton, newTaskPopup, closeNewTaskBtn}\n})();\n\n//# sourceURL=webpack:///./src/selectors.js?");

/***/ }),

/***/ "./src/side-menu.js":
/*!**************************!*\
  !*** ./src/side-menu.js ***!
  \**************************/
/*! exports provided: sideMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sideMenu\", function() { return sideMenu; });\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ \"./src/selectors.js\");\n\nconst sideMenu = (() => {\n    var sideNavOpen = false;\n// event listener for the slide button which opens and close the side menu\n    _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].slideButton.addEventListener('click', function(e){\n        e.stopPropagation();\n        slideMenuControl();\n    })\n    \n    document.addEventListener('click', function (e) {\n        if (sideNavOpen === true && !_selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].sideNav.contains(e.target)) {\n            slideMenuControl();\n        }\n    })\n    const slideMenuControl = () => {\n\n        if (sideNavOpen === true) {\n            sideNavOpen = false\n            _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].sideNav.style.width = '8rem';\n            _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].header.style.marginLeft = '8rem';\n            _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].mainDiv.style.marginLeft = '8rem';\n            _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].allListsContainer.style.right = ''\n            _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].slideButton.style.transform = 'rotate(0)'\n    \n    \n        } else {\n            sideNavOpen = true;\n            _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].sideNav.style.width = '25rem';\n            _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].header.style.marginLeft = '25rem';\n            _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].mainDiv.style.marginLeft = '25rem';\n            _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].allListsContainer.style.right = '2rem'\n            _selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectors\"].slideButton.style.transform = 'rotate(180deg)'\n        }\n    \n    }\n  })();\n\n\n//# sourceURL=webpack:///./src/side-menu.js?");

/***/ })

/******/ });