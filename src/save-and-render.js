// query selectors

const allLists = document.querySelector('[data-all-lists]');
const deleteListBtn = document.querySelector('[data-delete-list-btn]')
const currentListName = document.querySelector('[data-current-list-name]');

// local storage
const LOCAL_STORAGE_LIST_KEY = "task.lists";
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
var lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
var selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)


//function to save to local storage
function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
}


//function to clear the list each time before its rendered
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


function render() {
    clearElement(allLists);
    renderLists();
    const selectedList = lists.find(list => list.id === selectedListId)
    if (selectedListId === null) {
        currentListName.innerText = "";
    } else {
        currentListName.innerText = selectedList.name;
    }
}


//function to render the lists in side menu
function renderLists() {
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.dataset.listId = list.id;
        listElement.classList.add('list-name');
        listElement.innerText = list.name;
        if (list.id === selectedListId) listElement.classList.add('active-list')
        listElement.addEventListener('click', function (e) {
            selectedListId = e.target.dataset.listId;
            save();
            render();
        })
        allLists.appendChild(listElement);
    });
}

deleteListBtn.addEventListener('click', function () {
    lists = lists.filter(list => list.id !== selectedListId);
    if (lists.length === 0) {
        selectedListId = null
    } else {
        selectedListId = lists[0].id;
    }
    save();
    render();
})

function setSelectedListId(id) {
    selectedListId = id;
}




export {
    save,
    render,
    lists,
    selectedListId,
    setSelectedListId,
}

