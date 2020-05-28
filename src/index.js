const sideNav = document.querySelector('[data-side-nav]')
const header = document.querySelector('[data-header]')
const mainDiv = document.querySelector('[data-main-div-wrapper]')
const slideButton = document.querySelector('[data-slide-button]')
const allListsContainer = document.querySelector('[data-all-lists-container]')
const addTaskButton = document.querySelector('[data-new-task-btn]')
const newTaskPopup = document.querySelector('[data-new-task-popup-container]')
const closeNewTaskBtn = document.querySelector('[data-close-new-task-btn]')


var taskPopupOpen = false;
var sideNavOpen = false;




//controls for side slide menu where all lists are.
// opens and closes side menu by adjust width and margin of content.

slideButton.addEventListener('click', function(e){
    e.stopPropagation();
    slideMenuControl();
})


function slideMenuControl() {

    if (sideNavOpen === true) {
        sideNavOpen = false
        sideNav.style.width = '8rem';
        header.style.marginLeft = '8rem';
        mainDiv.style.marginLeft = '8rem';
        allListsContainer.style.right = ''
        slideButton.style.transform = 'rotate(0)'


    } else {
        sideNavOpen = true;
        sideNav.style.width = '25rem';
        header.style.marginLeft = '25rem';
        mainDiv.style.marginLeft = '25rem';
        allListsContainer.style.right = '2rem'
        slideButton.style.transform = 'rotate(180deg)'
    }

}



//controls for popup new task menu

// opens the new task menu at bottom of the screen

addTaskButton.addEventListener('click', function(e){
    e.stopPropagation();
    newTaskMenuControl();
})


// closes the new task menu when button is clicked

closeNewTaskBtn.addEventListener('click', newTaskMenuControl)


function newTaskMenuControl(e) {

    if (taskPopupOpen === false) {
        newTaskPopup.style.height = "32rem";
        taskPopupOpen = true;
    } else {
        taskPopupOpen = false;
        newTaskPopup.style.height = "";
    }

}


document.addEventListener('click', function (e) {
    if (sideNavOpen === true && !sideNav.contains(e.target)) {
        slideMenuControl();
    }
    if(taskPopupOpen === true && !newTaskPopup.contains(e.target)){
        newTaskMenuControl();
    }

})

