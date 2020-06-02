import { save, render, lists, setSelectedListId, selectedListId } from './save-and-render';

const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const newTaskForm = document.querySelector('[data-new-task-form]');
const taskNameInput = document.querySelector('[data-task-name-input]');
const deadlineInput = document.querySelector('[data-deadline-input]');
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
    console.log('yes');
    var taskName = taskNameInput.value;
    var deadline = deadlineInput.value;
    var notes = notesInput.value;
    var priority = priorityRadios.forEach(radio => {
        if (radio.checked) {
            return radio.value;
        }
    });
    if (taskName == null || taskName === "") return;
    if (deadline == null || deadline === "") return;
    if (notes == null || notes === "") return;
    const task = createTask(taskName, deadline, notes, priority);
    const selectedList = lists.find(list => list.id === selectedListId);
    selectedList.tasks.push(task)
    save();
    render();
})

function createTask(taskName, deadline, notes, priority) {
    return { id: createUniqueId(), name: taskName, deadline, notes, priority}
}









