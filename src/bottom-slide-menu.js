
const addTaskButton = document.querySelector('[data-new-task-btn]')
const newTaskPopup = document.querySelector('[data-new-task-popup-container]')
const closeNewTaskBtn = document.querySelector('[data-close-new-task-btn]')
var taskPopupOpen = false;


// function for opening and closing bottom slide menu
const newTaskMenuControl = (e) => {

    if (taskPopupOpen === false) {
        taskPopupOpen = true;
        newTaskPopup.style.height = "32rem";
        newTaskPopup.style.bottom = "6rem";
    } else {
        taskPopupOpen = false;
        newTaskPopup.style.height = "";
        newTaskPopup.style.bottom = "";
    }

}

// opens the new task menu at bottom of the screen
addTaskButton.addEventListener('click', function (e) {
    e.stopPropagation();
    newTaskMenuControl();
})

// closes the new task menu when button is clicked
closeNewTaskBtn.addEventListener('click', newTaskMenuControl)

// closes the new task menu if user clicks outside window
document.addEventListener('click', function (e) {
    if (taskPopupOpen === true && !newTaskPopup.contains(e.target)) {
        newTaskMenuControl();
    }
})












