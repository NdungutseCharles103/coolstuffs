export default class Todo {
    text: string;
    completed: boolean = false;
    id: number = 0;
    constructor(text: string) {
        this.text = text;
        this.id = Math.random()*44334223
    }


    toggleCompleted(){
        this.completed = !this.completed
    }

    add(place: HTMLElement | null, group: this[], optional?: any){
        const li: HTMLLIElement = document.createElement("li")
        li.textContent = this.text
        place?.appendChild(li)
        group.push(this)
        optional

    }
}