var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import Todo from './Todo';
var TodoList = /** @class */ (function (_super) {
    __extends(TodoList, _super);
    function TodoList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            postedTodoDescription: ''
        };
        _this.onPostTodoInputChange = function (event) {
            _this.setState({
                postedTodoDescription: event.target.value
            });
        };
        _this.createTodo = function (e) {
            _this.props.postTodoCallback(_this.props.userid, { description: _this.state.postedTodoDescription });
        };
        return _this;
    }
    TodoList.prototype.render = function () {
        var todoList = this.props.todos.map(function (todo, index) { return (React.createElement(Todo, { key: index, todo: todo })); });
        return (React.createElement("div", null,
            React.createElement("input", { value: this.state.postedTodoDescription, type: "text", onChange: this.onPostTodoInputChange }),
            React.createElement("button", { onClick: this.createTodo }, "Todo Ekle"),
            React.createElement("br", null),
            todoList.length > 0 ?
                (React.createElement("div", null,
                    "Todos:",
                    todoList)) : React.createElement("div", null, "Todo Yok")));
    };
    return TodoList;
}(React.Component));
export default TodoList;
//# sourceMappingURL=TodoList.js.map