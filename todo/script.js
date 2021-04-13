let todoForm = document.querySelector('.todo-form');
let textInputButton = document.querySelector('.todo-input');
let submitButton = document.querySelector('.todo-submit');
let todoList = document.querySelector('.todo-list');
let importantCheckbox = document.querySelector('.important-item');

submitButton.onclick = function (e) {
    e.preventDefault();
    if (textInputButton.value.replace(/^\s+/, "").length == 0) return false;
    
    const listItem = document.createElement('li');
    const itemText = document.createElement('span');
    const removeButton = document.createElement('button');
    const doneButton = document.createElement('button');
    
    listItem.classList.add('list-item');
    
    if (importantCheckbox.checked) listItem.classList.add('important-list');
    
    itemText.innerHTML = textInputButton.value;
    removeButton.classList.add('remove-element');
    doneButton.classList.add('done-element');
    listItem.append(itemText);
    listItem.insertAdjacentElement('afterbegin',doneButton);
    listItem.insertAdjacentElement('beforeend',removeButton);

    removeButton.onclick = () => listItem.remove();
    doneButton.onclick = () => listItem.classList.toggle('item-done');

    todoList.append(listItem);

    importantCheckbox.checked = false;
    textInputButton.value = '';
}
