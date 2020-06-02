// query selectors

const allLists = document.querySelector('[data-all-lists]');
const deleteListBtn = document.querySelector('[data-delete-list-btn]')
const currentListName = document.querySelector('[data-current-list-name]');
const mainContainer = document.querySelector('[data-main-container]')
const taskTemplate = document.querySelector('#task-template');


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

// render the list to the page
function render() {
    clearElement(allLists);
    renderLists();
    const selectedList = lists.find(list => list.id === selectedListId)
    if (selectedListId === null) {
        currentListName.innerText = "";
    } else {
        currentListName.innerText = selectedList.name;
        renderTaskCount(selectedList);
        clearElement(mainContainer);
        renderTasks(selectedList);
    }
}



function renderTasks(selectedList){
    selectedList.tasks.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true);
        const checkbox = taskElement.querySelector('input');
        checkbox.id = task.id;
        checkbox.checked = task.complete;
        const taskName = taskElement.querySelector('.todo-title');
        taskName.innerText = task.name;
        const taskNotes = taskElement.querySelector('.todo-notes');
        taskNotes.innerText = task.notes;
        const deadline = taskElement.querySelector('.due-time');
        deadline.innerText = task.deadline;
        mainContainer.appendChild(taskElement)
    });
}

function renderTaskCount(selectedList){
    const incompleteTasks = selectedList.tasks.filter(task => !task.complete).length;
    const taskString = incompleteTasks === 1 ? "task" : "tasks";
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

