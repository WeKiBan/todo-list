import { selectors } from './selectors'

export const bottomSlide = (() => {
    var taskPopupOpen = false;

    const newTaskMenuControl = (e) => {
    
        if (taskPopupOpen === false) {
            taskPopupOpen = true;
            selectors.newTaskPopup.style.height = "32rem";
            selectors.newTaskPopup.style.bottom = "6rem";
        } else {
            taskPopupOpen = false;
            selectors.newTaskPopup.style.height = "";
            selectors.newTaskPopup.style.bottom = "";
        }
    
    }

    // opens the new task menu at bottom of the screen
    selectors.addTaskButton.addEventListener('click', function (e) {
        e.stopPropagation();
        newTaskMenuControl();
    })
    
    // closes the new task menu when button is clicked
    selectors.closeNewTaskBtn.addEventListener('click', newTaskMenuControl)
    
    // closes the new task menu if user clicks outside window
    document.addEventListener('click', function (e) {
        if (taskPopupOpen === true && !selectors.newTaskPopup.contains(e.target)) {
            newTaskMenuControl();
        }
    })
    
})()











