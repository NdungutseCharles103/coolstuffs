import Todo from "./Todo.js";

const textinput: HTMLInputElement | HTMLElement | any = document.getElementById('textinput')
const button: HTMLElement | any = document.getElementById('addButton')
const lists: HTMLElement | null = document.querySelector('.lists')
const draggable: HTMLDivElement  = document.querySelector('.draggable')!;
const droppable: HTMLDivElement  = document.querySelector('.droppable')!;

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

draggable.addEventListener('drag', (e: DragEvent)=> {
    console.log(e);
})
// draggable.ondrag((e: DragEvent)=> {
//     console.log(e);
// })

