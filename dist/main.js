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
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst addTaskButton = document.querySelector('[data-new-task-btn]')\nconst newTaskPopup = document.querySelector('[data-new-task-popup-container]')\nconst closeNewTaskBtn = document.querySelector('[data-close-new-task-btn]')\nvar taskPopupOpen = false;\n\n\n// function for opening and closing bottom slide menu\nconst newTaskMenuControl = (e) => {\n\n    if (taskPopupOpen === false) {\n        taskPopupOpen = true;\n        newTaskPopup.style.height = \"32rem\";\n        newTaskPopup.style.bottom = \"6rem\";\n    } else {\n        taskPopupOpen = false;\n        newTaskPopup.style.height = \"\";\n        newTaskPopup.style.bottom = \"\";\n    }\n\n}\n\n// opens the new task menu at bottom of the screen\naddTaskButton.addEventListener('click', function (e) {\n    e.stopPropagation();\n    newTaskMenuControl();\n})\n\n// closes the new task menu when button is clicked\ncloseNewTaskBtn.addEventListener('click', newTaskMenuControl)\n\n// closes the new task menu if user clicks outside window\ndocument.addEventListener('click', function (e) {\n    if (taskPopupOpen === true && !newTaskPopup.contains(e.target)) {\n        newTaskMenuControl();\n    }\n})\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/bottom-slide-menu.js?");

/***/ }),

/***/ "./src/create-lists-tasks.js":
/*!***********************************!*\
  !*** ./src/create-lists-tasks.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _save_and_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save-and-render */ \"./src/save-and-render.js\");\n\n\nconst newListForm = document.querySelector('[data-new-list-form]')\nconst newListInput = document.querySelector('[data-new-list-input]')\nconst newTaskForm = document.querySelector('[data-new-task-form]');\nconst taskNameInput = document.querySelector('[data-task-name-input]');\nconst deadlineInput = document.querySelector('[data-deadline-input]');\nconst notesInput = document.querySelector('[data-notes-input]');\nconst priorityRadios = document.getElementsByName('priority');\n\n\n\n\nfunction createList(name) {\n    return { id: createUniqueId(), name: name, tasks: [] }\n}\n\nfunction createUniqueId() {\n    return Date.now().toString();\n}\n\nnewListForm.addEventListener('submit', e => {\n    e.preventDefault();\n    var listName = newListInput.value;\n    if (listName == null || listName === \"\") return;\n    const list = createList(listName);\n    newListInput.value = null;\n    _save_and_render__WEBPACK_IMPORTED_MODULE_0__[\"lists\"].push(list);\n    Object(_save_and_render__WEBPACK_IMPORTED_MODULE_0__[\"setSelectedListId\"])(list.id);\n    Object(_save_and_render__WEBPACK_IMPORTED_MODULE_0__[\"save\"])();\n    Object(_save_and_render__WEBPACK_IMPORTED_MODULE_0__[\"render\"])();\n})\n\nnewTaskForm.addEventListener('submit', e => {\n    console.log('yes');\n    var taskName = taskNameInput.value;\n    var deadline = deadlineInput.value;\n    var notes = notesInput.value;\n    var priority = priorityRadios.forEach(radio => {\n        if (radio.checked) {\n            return radio.value;\n        }\n    });\n    if (taskName == null || taskName === \"\") return;\n    if (deadline == null || deadline === \"\") return;\n    if (notes == null || notes === \"\") return;\n    const task = createTask(taskName, deadline, notes, priority);\n    const selectedList = _save_and_render__WEBPACK_IMPORTED_MODULE_0__[\"lists\"].find(list => list.id === _save_and_render__WEBPACK_IMPORTED_MODULE_0__[\"selectedListId\"]);\n    selectedList.tasks.push(task)\n    Object(_save_and_render__WEBPACK_IMPORTED_MODULE_0__[\"save\"])();\n    Object(_save_and_render__WEBPACK_IMPORTED_MODULE_0__[\"render\"])();\n})\n\nfunction createTask(taskName, deadline, notes, priority) {\n    return { id: createUniqueId(), name: taskName, deadline, notes, priority}\n}\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/create-lists-tasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _side_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-menu */ \"./src/side-menu.js\");\n/* harmony import */ var _side_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_side_menu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bottom_slide_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottom-slide-menu */ \"./src/bottom-slide-menu.js\");\n/* harmony import */ var _bottom_slide_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bottom_slide_menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _save_and_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save-and-render */ \"./src/save-and-render.js\");\n/* harmony import */ var _create_lists_tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-lists-tasks */ \"./src/create-lists-tasks.js\");\n\n\n\n\n\nObject(_save_and_render__WEBPACK_IMPORTED_MODULE_2__[\"render\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/save-and-render.js":
/*!********************************!*\
  !*** ./src/save-and-render.js ***!
  \********************************/
/*! exports provided: save, render, lists, selectedListId, setSelectedListId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"save\", function() { return save; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lists\", function() { return lists; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectedListId\", function() { return selectedListId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSelectedListId\", function() { return setSelectedListId; });\n// query selectors\n\nconst allLists = document.querySelector('[data-all-lists]');\nconst deleteListBtn = document.querySelector('[data-delete-list-btn]')\nconst currentListName = document.querySelector('[data-current-list-name]');\nconst mainContainer = document.querySelector('[data-main-container]')\nconst taskTemplate = document.querySelector('#task-template');\n\n\n// local storage\nconst LOCAL_STORAGE_LIST_KEY = \"task.lists\";\nconst LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'\nvar lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];\nvar selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)\n\n\n//function to save to local storage\nfunction save() {\n    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));\n    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)\n}\n\n\n//function to clear the list each time before its rendered\nfunction clearElement(element) {\n    while (element.firstChild) {\n        element.removeChild(element.firstChild);\n    }\n}\n\n// render the list to the page\nfunction render() {\n    clearElement(allLists);\n    renderLists();\n    const selectedList = lists.find(list => list.id === selectedListId)\n    if (selectedListId === null) {\n        currentListName.innerText = \"\";\n    } else {\n        currentListName.innerText = selectedList.name;\n        renderTaskCount(selectedList);\n        clearElement(mainContainer);\n        renderTasks(selectedList);\n    }\n}\n\n\n\nfunction renderTasks(selectedList){\n    selectedList.tasks.forEach(task => {\n        const taskElement = document.importNode(taskTemplate.content, true);\n        const checkbox = taskElement.querySelector('input');\n        checkbox.id = task.id;\n        checkbox.checked = task.complete;\n        const taskName = taskElement.querySelector('.todo-title');\n        taskName.innerText = task.name;\n        const taskNotes = taskElement.querySelector('.todo-notes');\n        taskNotes.innerText = task.notes;\n        const deadline = taskElement.querySelector('.due-time');\n        deadline.innerText = task.deadline;\n        mainContainer.appendChild(taskElement)\n    });\n}\n\nfunction renderTaskCount(selectedList){\n    const incompleteTasks = selectedList.tasks.filter(task => !task.complete).length;\n    const taskString = incompleteTasks === 1 ? \"task\" : \"tasks\";\n}\n\n\n//function to render the lists in side menu\nfunction renderLists() {\n    lists.forEach(list => {\n        const listElement = document.createElement('li');\n        listElement.dataset.listId = list.id;\n        listElement.classList.add('list-name');\n        listElement.innerText = list.name;\n        if (list.id === selectedListId) listElement.classList.add('active-list')\n        listElement.addEventListener('click', function (e) {\n            selectedListId = e.target.dataset.listId;\n            save();\n            render();\n        })\n        allLists.appendChild(listElement);\n    });\n}\n\ndeleteListBtn.addEventListener('click', function () {\n    lists = lists.filter(list => list.id !== selectedListId);\n    if (lists.length === 0) {\n        selectedListId = null\n    } else {\n        selectedListId = lists[0].id;\n    }\n    save();\n    render();\n})\n\nfunction setSelectedListId(id) {\n    selectedListId = id;\n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/save-and-render.js?");

/***/ }),

/***/ "./src/side-menu.js":
/*!**************************!*\
  !*** ./src/side-menu.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst sideNav = document.querySelector('[data-side-nav]')\nconst slideButton = document.querySelector('[data-slide-button]')\nconst allListsContainer = document.querySelector('[data-all-lists-container]')\nconst allLists = document.querySelector('[data-all-lists]')\nconst header = document.querySelector('[data-header]')\nconst mainDiv = document.querySelector('[data-main-div-wrapper]')\n\nvar sideNavOpen = false;\n\n\nconst slideMenuControl = () => {\n\n    if (sideNavOpen === true) {\n        sideNavOpen = false\n        sideNav.style.width = '8rem';\n        header.style.marginLeft = '8rem';\n        mainDiv.style.marginLeft = '8rem';\n        allListsContainer.style.right = ''\n        slideButton.style.transform = 'rotate(0)'\n\n\n    } else {\n        sideNavOpen = true;\n        sideNav.style.width = '25rem';\n        header.style.marginLeft = '25rem';\n        mainDiv.style.marginLeft = '25rem';\n        allListsContainer.style.right = '2rem'\n        slideButton.style.transform = 'rotate(180deg)'\n    }\n\n}\n\n// event listener for the slide button which opens and close the side menu\nslideButton.addEventListener('click', function(e){\n    e.stopPropagation();\n    slideMenuControl();\n})\n\n// event listener to close side menu when outside of menu is clicked\ndocument.addEventListener('click', function (e) {\n    if(Array.from(e.target.classList).includes('list-name') || Array.from(e.target.classList).includes('delete-current-list-btn'))return;\n    if (sideNavOpen === true && !sideNav.contains(e.target)) {\n        slideMenuControl();\n    }\n})\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/side-menu.js?");

/***/ })

/******/ });