let todoItems = [];

const renderTodo = (todo) => {
  localStorage.setItem('todoItemsRef', JSON.stringify(todoItems));

  const list = document.querySelector('.js-todo-list');
  const item = document.querySelector(`[data-key="${todo.id}"`);

  if (todo.deleted) {
    item.remove();
    if (todoItems.length === 0) list.innerHTML = '';
    return;
  }

  const isDone = todo.done ? 'done' : '';
  const newItem = document.createElement('li');
  
  newItem.setAttribute('class', `todo-item ${isDone}`);
  newItem.setAttribute('data-key', todo.id);
  newItem.innerHTML = `
  <input type="checkbox" id="${todo.id}">
  <label for="${todo.id}" class="tick js-tick"></label>
  <span>${todo.text}</span>
  <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
  </button>
  `;

  if (item) {
    list.replaceChild(newItem, item);
  } else {
    list.append(newItem);
  }
};

const addTodo = (text) => {
  const todo = {
    text,
    done: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
};

const toggleDone = (key) => {
  const index = todoItems.findIndex((item) => item.id === Number(key));

  todoItems[index].done = !todoItems[index].done;
  renderTodo(todoItems[index]);
};

const deleteItem = (key) => {
  const index = todoItems.findIndex((item) => item.id === Number(key));
  const todo = {
    deleted: true,
    ...todoItems[index],
  };
  todoItems = todoItems.filter((item) => item.id !== Number(key));
  renderTodo(todo);
};

const form = document.querySelector('.js-form');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const input = document.querySelector('.js-todo-input');
  const text = input.value.trim();
  
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

const list = document.querySelector('.js-todo-list');

list.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('js-tick')) {
    const itemKey = evt.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }

  if (evt.target.classList.contains('js-delete-todo')) {
    const itemKey = evt.target.parentElement.dataset.key;
    deleteItem(itemKey);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('todoItemsRef');
  if (ref) {
    todoItems = JSON.parse(ref);
    todoItems.forEach((item) => {
      renderTodo(item);
    });
  }  
});
