import { save, render, lists, setSelectedListId, selectedListId } from './save-and-render';
import { parseISO } from 'date-fns';
import { newTaskMenuControl } from './bottom-slide-menu'
import { sortTasks } from './save-and-render'




const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const newTaskForm = document.querySelector('[data-new-task-form]');
const taskNameInput = document.querySelector('[data-task-name-input]');
const dateInput = document.querySelector('[data-date-input]');
const timeInput = document.querySelector('[data-time-input]');
const notesInput = document.querySelector('[data-notes-input]');
const priorityRadios = document.getElementsByName('priority');


function createList(name) {
    return { id: createUniqueId(), name: name, tasks: [] }
}

function createUniqueId() {
    return Date.now().toString();
}

newListForm.addEventListener('submit', e => {
    e.preventDefault();
    var listName = newListInput.value;
    if (listName == null || listName === "") return;
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    setSelectedListId(list.id);
    save();
    render();
})

newTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    var name = taskNameInput.value;
    var date = dateInput.value;
    var time = timeInput.value;
    var notes = notesInput.value;
    var priority;

    priorityRadios.forEach(radio => {
        if (radio.checked) {
            priority = radio.value;
        }
    });
    if (name == null || name === "") return;
    if (date == null || date === "") return;
    const task = createTask(name, date, time, notes, priority);
    const selectedList = lists.find(list => list.id === selectedListId);
    selectedList.tasks.push(task)
    newTaskForm.reset()
    newTaskMenuControl();
    sortTasks();
    save();
    render();
})


function createTask(name, taskDate, time, notes, priority) {
    var today = new Date();
    var currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateCreated = currentDate + ' ' + time;


    var date = taskDate + ' ' + time;


    return { id: createUniqueId(), name, date, notes, priority, complete: false, dateCreated }

}













