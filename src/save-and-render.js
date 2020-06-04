import { formatDistanceToNowStrict } from 'date-fns'
import { compareAsc } from 'date-fns'
import { parseISO } from 'date-fns'
import { format } from 'date-fns'

// query selectors

const allLists = document.querySelector('[data-all-lists]');
const deleteListBtn = document.querySelector('[data-delete-list-btn]')
const clearCompleteBtn = document.querySelector('[data-clear-complete-btn]')
const currentListName = document.querySelector('[data-current-list-name]');
const mainContainer = document.querySelector('[data-main-container]')
const taskTemplate = document.querySelector('#task-template');
const sortValueInput = document.querySelector('[data-sort-drop-down]')
const emptyMessageTemplate = document.querySelector('#empty-list-template');



// local storage
const LOCAL_STORAGE_LIST_KEY = "task.lists";
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
var lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
var selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY) || null


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


    if (selectedListId === null || selectedListId === 'null') {
        currentListName.innerText = "";
        clearElement(mainContainer);
        renderEmptyMessage();
    } else if (selectedList.tasks.length === 0) {
        currentListName.innerText = selectedList.name;
        renderEmptyMessage();
    } else {
        currentListName.innerText = selectedList.name;
        clearElement(mainContainer);
        renderTasks(selectedList);
    }

}


// render the tasks to the page
function renderTasks(selectedList) {
    selectedList.tasks.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true);
        const checkbox = taskElement.querySelector('input');
        const todoContainer = taskElement.querySelector('.todo-card-container');
        if (task.priority === '1') {
            todoContainer.classList.add('top-priority');
        } else if (task.priority === '2') {
            todoContainer.classList.add('mid-priority');
        } else {
            todoContainer.classList.add('low-priority');
        }
        todoContainer.id = task.id;
        checkbox.checked = task.complete;
        const taskName = taskElement.querySelector('.todo-title');
        taskName.innerText = task.name;
        const taskNotes = taskElement.querySelector('.todo-notes');
        taskNotes.innerText = task.notes;
        const deadline = taskElement.querySelector('.due-time');
        deadline.innerText = calcDeadline(task.date);
        const dateCreated = taskElement.querySelector('[data-date-created]');
        dateCreated.innerText = format(new Date(task.date), 'dd/MM'); 
        const completeLabel = taskElement.querySelector('[data-complete-label]');
        if(checkbox.checked){
            completeLabel.innerText = "mark as incomplete:"
        } else {
            completeLabel.innerText = "mark as complete:"
        }
        taskElement.querySelector('[data-checkbox]').addEventListener('click', markAsComplete)
        taskElement.querySelector('[data-delete-task]').addEventListener('click', deleteTask)
        mainContainer.appendChild(taskElement)
    });
}


// delete tasks from the page
function deleteTask(e) {
    const thisId = e.target.parentNode.parentNode.parentNode.id;
    const selectedList = lists.find(list => list.id === selectedListId);
    selectedList.tasks = selectedList.tasks.filter(task => task.id !== thisId);
    save();
    render();
}


// mark a task as complete
function markAsComplete(e) {
    const thisId = e.target.parentNode.parentNode.parentNode.id
    const selectedList = lists.find(list => list.id === selectedListId);
    const selectedTask = selectedList.tasks.find(task => task.id === thisId);
    selectedTask.complete = e.target.checked;
    save();
    render();
}


// clear the completed tasks
function clearCompleteTasks() {
    const selectedList = lists.find(list => list.id === selectedListId);
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
    save();
    render();
}


// event listener to clear complete tasks

clearCompleteBtn.addEventListener('click', clearCompleteTasks);



// function to sort the tasks into order depending on selection
function sortTasks() {
    var selectedList = lists.find(list => list.id === selectedListId);

    const sortValue = sortValueInput.value;

    if (sortValue === 'priority') {
        selectedList.tasks = selectedList.tasks.sort((a, b) => Number(a.priority) - Number(b.priority))
    } else if (sortValue === 'date created') {
        selectedList.tasks = selectedList.tasks.sort((a, b) => new Date(a.dateCreated) - new Date(b.dateCreated))
    } else if (sortValue === 'a-z') {
        selectedList.tasks = selectedList.tasks.sort((a, b) => (a.name > b.name) ? 1 : -1)
    } else {
        selectedList.tasks = selectedList.tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    save();
    render();

}

// event listener for sort
sortValueInput.addEventListener('change', sortTasks);


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
            sortTasks();
            save();
            render();
        })
        allLists.appendChild(listElement);
    });
}


//function to set selected list
function setSelectedListId(id) {
    selectedListId = id;
}


// function to calculate remaining time till deadline for task
function calcDeadline(date) {
    return formatDistanceToNowStrict(new Date(date)) + " to go";
}


// event listener for delete list button
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

// to render a message to the page if there are no tasks or no lists

function renderEmptyMessage() {
    const emptyMessageElement = document.importNode(emptyMessageTemplate.content, true)
    const emptyMessageDiv = emptyMessageElement.querySelector('[data-empty-message-container]')
    const errorMessageParagraph = emptyMessageElement.querySelector('[data-message-paragraph');
    if(selectedListId === null || selectedListId === 'null'){
        errorMessageParagraph.innerText = 'No lists. Create a new list in the side menu to get started.'
    } else {
        errorMessageParagraph.innerText = 'No Tasks. Press the + in the top left corner to get started.'
    }
    clearElement(mainContainer);
    mainContainer.appendChild(emptyMessageDiv);
}



export {
    save,
    render,
    lists,
    selectedListId,
    setSelectedListId,
    sortTasks,
}

