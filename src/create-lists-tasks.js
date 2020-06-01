import { save, render, lists, setSelectedListId} from './save-and-render';

const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')




function createList(name) {
    return { id: createUniqueId(), name: name, tasks: [] }
}

function createUniqueId(){
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







