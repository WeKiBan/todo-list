export const selectors = (() => {
    const sideNav = document.querySelector('[data-side-nav]')
    const slideButton = document.querySelector('[data-slide-button]')
    const allListsContainer = document.querySelector('[data-all-lists-container]')
    const header = document.querySelector('[data-header]')
    const mainDiv = document.querySelector('[data-main-div-wrapper]')
    const addTaskButton = document.querySelector('[data-new-task-btn]')
    const newTaskPopup = document.querySelector('[data-new-task-popup-container]')
    const closeNewTaskBtn = document.querySelector('[data-close-new-task-btn]')
    return {sideNav, slideButton, header, allListsContainer, mainDiv, addTaskButton, newTaskPopup, closeNewTaskBtn}
})();