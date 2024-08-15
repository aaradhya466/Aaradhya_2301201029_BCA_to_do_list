// Get the todo list element
const todoList = document.getElementById('todo-list');

// Get the add todo form element
const addTodoForm = document.getElementById('add-todo');

// Get the todo input element
const todoInput = document.getElementById('todo-input');

// Array to store todo list items
let todoItems = [];

// Function to render todo list items
function renderTodoList() {
    todoList.innerHTML = '';
    todoItems.forEach((item) => {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
            <span class="checkbox ${item.done ? 'done' : ''}"></span>
            <span>${item.text}</span>
        `;
        todoItem.addEventListener('click', () => {
            item.done = !item.done;
            renderTodoList();
        });
        todoList.appendChild(todoItem);
    });
}

// Function to add new todo item
function addTodoItem(text) {
    const todoItem = {
        text: text,
        done: false,
    };
    todoItems.push(todoItem);
    renderTodoList();
}

// Add event listener to add todo form
addTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (text) {
        addTodoItem(text);
        todoInput.value = '';
    }
});

// Initialize todo list
renderTodoList();