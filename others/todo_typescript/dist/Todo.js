var Todo = /** @class */ (function () {
    function Todo(text) {
        this.completed = false;
        this.id = 0;
        this.text = text;
        this.id = Math.random() * 44334223;
    }
    Todo.prototype.toggleCompleted = function () {
        this.completed = !this.completed;
    };
    Todo.prototype.add = function (place, group, optional) {
        var li = document.createElement("li");
        li.textContent = this.text;
        place === null || place === void 0 ? void 0 : place.appendChild(li);
        group.push(this);
        optional;
    };
    return Todo;
}());
export default Todo;
