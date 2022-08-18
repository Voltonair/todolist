// Global variables
let board = document.querySelector('.to-do-board');
let taskContainer = document.querySelector('.container-task');
let taskbar = document.querySelector('.add-task');
let form = document.querySelector('.add-form');

// Add submit event
form.addEventListener('submit', addItem)

// Function to add item
function addItem (e) {
    e.preventDefault();

    if (taskbar.value !== '') { // If value is not empty

        if(taskContainer.querySelector(".message") != null){
            taskContainer.querySelector(".message").remove()
        } // Select 'message' div and remove if not empty

        let div = document.createElement('div')
        div.className = 'item-task';
        div.innerHTML = taskbar.value;
        taskContainer.insertAdjacentElement('beforeend', div);

        // Delete button variable and set to div
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.textContent = 'X';
        div.appendChild(deleteBtn);
        taskbar.value = '';

        // Add remove event listener
        deleteBtn.addEventListener('click', () => {
            div.remove();

            // if taskContainer children is empty creates and attaches div
            if (taskContainer.children.length === 0) {
                const message = document.createElement('div');
                message.className = 'message';
                message.textContent = 'There are no pending tasks.'
                taskContainer.appendChild(message);
            }
        })

} else {}
}