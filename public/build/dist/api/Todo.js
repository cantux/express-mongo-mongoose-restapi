import { ajax } from 'rxjs/observable/dom/ajax';
var TodosApi = /** @class */ (function () {
    function TodosApi() {
    }
    TodosApi.getTodos = function (name) {
        return ajax.getJSON("http://localhost:3000/api/todos/" + name);
    };
    TodosApi.postTodo = function (id, body) {
        return ajax.post("http://localhost:3000/api/todos/" + id, body);
    };
    TodosApi.deleteTodo = function (id) {
        console.log('TodosApi deleteTodo called');
    };
    TodosApi.markTodoCompleted = function (id) {
        console.log('TodosApi markCompleted called');
    };
    return TodosApi;
}());
export default TodosApi;
//# sourceMappingURL=Todo.js.map