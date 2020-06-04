
const sideNav = document.querySelector('[data-side-nav]')
const slideButton = document.querySelector('[data-slide-button]')
const allListsContainer = document.querySelector('[data-all-lists-container]')
const allLists = document.querySelector('[data-all-lists]')
const header = document.querySelector('[data-header]')
const mainDiv = document.querySelector('[data-main-div-wrapper]')

var sideNavOpen = false;


export const slideMenuControl = () => {

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

// event listener for the slide button which opens and close the side menu
slideButton.addEventListener('click', function(e){
    e.stopPropagation();
    slideMenuControl();
})

// event listener to close side menu when outside of menu is clicked
document.addEventListener('click', function (e) {
    if(Array.from(e.target.classList).includes('list-name') || Array.from(e.target.classList).includes('delete-current-list-btn'))return;
    if (sideNavOpen === true && !sideNav.contains(e.target)) {
        slideMenuControl();
    }
})





