let board = document.querySelector('.to-do-board');
let taskContainer = document.querySelector('.container-task');
let taskbar = document.querySelector('.add-task');
let button = document.querySelector('.add-btn');
let noTasksMsg = document.querySelector('.message');


button.addEventListener('click', () => {

    if (taskContainer === null) {
        noTasksMsg.style.display = 'flex';
    } else {
        noTasksMsg.style.display = 'none';
    }

    let div = document.createElement('div');
    div.className = 'item-task';
    div.innerHTML = taskbar.value;
    taskContainer.insertAdjacentElement('beforeend', div)

    let deleteButton = document.createElement('button')
    deleteButton.className = 'deleteBtn';
    deleteButton.textContent = "X";
    div.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        div.remove();
    })

})