import {selectors} from './selectors'
export const sideMenu = (() => {
    var sideNavOpen = false;
// event listener for the slide button which opens and close the side menu
    selectors.slideButton.addEventListener('click', function(e){
        e.stopPropagation();
        slideMenuControl();
    })
    
    document.addEventListener('click', function (e) {
        if (sideNavOpen === true && !selectors.sideNav.contains(e.target)) {
            slideMenuControl();
        }
    })
    const slideMenuControl = () => {

        if (sideNavOpen === true) {
            sideNavOpen = false
            selectors.sideNav.style.width = '8rem';
            selectors.header.style.marginLeft = '8rem';
            selectors.mainDiv.style.marginLeft = '8rem';
            selectors.allListsContainer.style.right = ''
            selectors.slideButton.style.transform = 'rotate(0)'
    
    
        } else {
            sideNavOpen = true;
            selectors.sideNav.style.width = '25rem';
            selectors.header.style.marginLeft = '25rem';
            selectors.mainDiv.style.marginLeft = '25rem';
            selectors.allListsContainer.style.right = '2rem'
            selectors.slideButton.style.transform = 'rotate(180deg)'
        }
    
    }
  })();
