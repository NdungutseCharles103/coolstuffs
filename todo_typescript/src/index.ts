import Todo from "./Todo.js";

const textinput: HTMLInputElement | HTMLElement | any = document.getElementById('textinput')
const button: HTMLElement | any = document.getElementById('addButton')
const lists: HTMLElement | null = document.querySelector('.lists')
document.addEventListener("load", () => {
    console.log("hello");
})

const todos: Todo[] = [];
console.log(button.textContent);

button.addEventListener("click", (e: FormDataEvent) => {
    console.log("adding");
    e.preventDefault()
    const todo = new Todo(textinput?.value)
    todo.add(lists, todos)
    textinput.value = "";
})

