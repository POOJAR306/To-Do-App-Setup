// Vanilla JS To-Do App (front-end only)
// Features: add task, mark complete (toggle), delete task, clear completed, instant UI updates
// Uses localStorage to persist tasks between reloads (optional but helpful for testing)

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const countSpan = document.getElementById('count');
const clearCompletedBtn = document.getElementById('clear-completed');

let todos = loadTodos();

function saveTodos(){
  try {
    localStorage.setItem('vanilla_todos_v1', JSON.stringify(todos));
  } catch(e) {
    console.warn('Could not save to localStorage', e);
  }
}

function loadTodos(){
  try {
    const raw = localStorage.getItem('vanilla_todos_v1');
    if(raw) return JSON.parse(raw);
  } catch(e) {
    console.warn('Could not load from localStorage', e);
  }
  return [];
}

function render(){
  list.innerHTML = '';
  if(todos.length === 0){
    const el = document.createElement('div');
    el.className = 'empty';
    el.textContent = 'No tasks yet — add one above ✨';
    list.appendChild(el);
  } else {
    todos.forEach(todo => {
      const li = document.createElement('li');
      li.className = 'todo-item';
      li.dataset.id = todo.id;

      const left = document.createElement('div');
      left.className = 'todo-left';

      const check = document.createElement('button');
      check.className = 'check' + (todo.completed ? ' checked' : '');
      check.setAttribute('aria-label', 'Toggle complete');
      check.innerHTML = todo.completed ? '✓' : '';

      const text = document.createElement('div');
      text.className = 'todo-text' + (todo.completed ? ' completed' : '');
      text.textContent = todo.text;

      left.appendChild(check);
      left.appendChild(text);

      const controls = document.createElement('div');
      controls.className = 'controls';

      const del = document.createElement('button');
      del.className = 'control-btn';
      del.setAttribute('aria-label', 'Delete task');
      del.textContent = 'Delete';

      controls.appendChild(del);

      li.appendChild(left);
      li.appendChild(controls);

      list.appendChild(li);
    });
  }
  updateCount();
}

function updateCount(){
  const total = todos.length;
  const remaining = todos.filter(t => !t.completed).length;
  countSpan.textContent = `${remaining} / ${total} remaining`;
}

// Add handler
form.addEventListener('submit', e => {
  e.preventDefault(); // prevent page reload
  const val = input.value.trim();
  if(!val) return;
  const todo = {
    id: Date.now().toString(),
    text: val,
    completed: false
  };
  todos.unshift(todo); // newest on top
  saveTodos();
  render();
  input.value = '';
  input.focus();
});

// Event delegation for toggle and delete
list.addEventListener('click', e => {
  const li = e.target.closest('.todo-item');
  if(!li) return;
  const id = li.dataset.id;
  // Toggle when checking the check button or clicking the text
  if(e.target.closest('.check') || e.target.classList.contains('todo-text')){
    todos = todos.map(t => t.id === id ? {...t, completed: !t.completed} : t);
    saveTodos();
    render();
    return;
  }
  // Delete
  if(e.target.closest('.control-btn')){
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    render();
    return;
  }
});

// Clear completed
clearCompletedBtn.addEventListener('click', () => {
  todos = todos.filter(t => !t.completed);
  saveTodos();
  render();
});

// Initial render
render();
