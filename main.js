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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sideNav = document.querySelector('[data-side-nav]')\nconst header = document.querySelector('[data-header]')\nconst mainDiv = document.querySelector('[data-main-div-wrapper]')\nconst slideButton = document.querySelector('[data-slide-button]')\nconst allListsContainer = document.querySelector('[data-all-lists-container]')\nconst addTaskButton = document.querySelector('[data-new-task-btn]')\nconst newTaskPopup = document.querySelector('[data-new-task-popup-container]')\nconst closeNewTaskBtn = document.querySelector('[data-close-new-task-btn]')\n\n\nvar taskPopupOpen = false;\nvar sideNavOpen = false;\n\n\n\n\n//controls for side slide menu where all lists are.\n// opens and closes side menu by adjust width and margin of content.\n\nslideButton.addEventListener('click', function(e){\n    e.stopPropagation();\n    slideMenuControl();\n})\n\n\nfunction slideMenuControl() {\n\n    if (sideNavOpen === true) {\n        sideNavOpen = false\n        sideNav.style.width = '8rem';\n        header.style.marginLeft = '8rem';\n        mainDiv.style.marginLeft = '8rem';\n        allListsContainer.style.right = ''\n        slideButton.style.transform = 'rotate(0)'\n\n\n    } else {\n        sideNavOpen = true;\n        sideNav.style.width = '25rem';\n        header.style.marginLeft = '25rem';\n        mainDiv.style.marginLeft = '25rem';\n        allListsContainer.style.right = '2rem'\n        slideButton.style.transform = 'rotate(180deg)'\n    }\n\n}\n\n\n\n//controls for popup new task menu\n\n// opens the new task menu at bottom of the screen\n\naddTaskButton.addEventListener('click', function(e){\n    e.stopPropagation();\n    newTaskMenuControl();\n})\n\n\n// closes the new task menu when button is clicked\n\ncloseNewTaskBtn.addEventListener('click', newTaskMenuControl)\n\n\nfunction newTaskMenuControl(e) {\n\n    if (taskPopupOpen === false) {\n        newTaskPopup.style.height = \"32rem\";\n        taskPopupOpen = true;\n    } else {\n        taskPopupOpen = false;\n        newTaskPopup.style.height = \"\";\n    }\n\n}\n\n\ndocument.addEventListener('click', function (e) {\n    if (sideNavOpen === true && !sideNav.contains(e.target)) {\n        slideMenuControl();\n    }\n    if(taskPopupOpen === true && !newTaskPopup.contains(e.target)){\n        newTaskMenuControl();\n    }\n\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });