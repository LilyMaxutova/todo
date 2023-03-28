let todos = [];
let todosNode = document.querySelector('.todo');
let btn = document.querySelector('button');
let input = document.querySelector('input');

function addTodo(text) {
  let todo = {
    text,
    done: false,
    id: `${Math.random()}`
  };

  todos.push(todo);
}

function deleteTodo(id) {
  todos.forEach(todo => {
    if (todo.id === id) {
      todo.done = true
    }
  })
}

function render() {
  let html = '';
  
  todos.forEach(todo => {
    if (todo.done) return;

    html += `
      <div>
        ${todo.text}
        <button data-id ='${todo.id}'>сделано</button>
      </div>
    `;
  })

  todosNode.innerHTML = html;
}

btn.addEventListener('click',() => {
  let value = input.value;
  addTodo(value);
  render();
});

todosNode.addEventListener('click', function(e) {
  if (e.target.tagName !== 'BUTTON') return;
  let id = e.target.dataset.id;
  
  deleteTodo(id);

  render();
});




