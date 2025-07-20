let todos = [];

function addTodo() {
    const input = document.getElementById("todoInput");
    const title = input.value.trim();
    if (title) {
        todos.push({ title });
        input.value = "";
        render();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    render();
}

function createTodoComponent(todo, index) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const button = document.createElement("button");
    
    h2.innerHTML = idx + "." + todo.title;
    button.innerHTML = "Delete";
    button.setAttribute('class','click')
    button.onclick = () => deleteTodo(index);

    div.setAttribute('class','zuee')
    div.appendChild(h2);
    div.appendChild(button);
    idx++;
    return div;
}

function render() {
    const todosDiv = document.getElementById("todos");
    todosDiv.innerHTML = "";
    idx = 1;
    for (let i = 0; i < todos.length; i++) {
        const element = createTodoComponent(todos[i], i);
        todosDiv.appendChild(element);
    }
}