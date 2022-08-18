let board = document.querySelector('.to-do-board');
let taskContainer = document.querySelector('.container-task');
let taskbar = document.querySelector('.add-task');
let form = document.querySelector('.add-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (taskbar.value !== '') {

        if(taskContainer.querySelector(".message") != null){
            taskContainer.querySelector(".message").remove()
        }

        let div = document.createElement('div')
        div.className = 'item-task';
        div.innerHTML = taskbar.value;
        taskContainer.insertAdjacentElement('beforeend', div);

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.textContent = 'X';
        div.appendChild(deleteBtn);
        taskbar.value = '';

        deleteBtn.addEventListener('click', () => {
            div.remove();

            if (taskContainer.children.length === 0) {
                const message = document.createElement('div');
                message.className = 'message';
                message.textContent = 'There are no pending tasks.'
                taskContainer.appendChild(message);
            }
        })

} else {}
})