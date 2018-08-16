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
var TodoList = /** @class */ (function (_super) {
    __extends(TodoList, _super);
    function TodoList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.markCompleted = function (e) {
            // call todoApi
            console.log('Single todo component completed called on id: ', _this.props.todo._id);
        };
        return _this;
    }
    TodoList.prototype.render = function () {
        return (React.createElement("div", null,
            "Single Todo",
            JSON.stringify(this.props.todo),
            React.createElement("br", null),
            React.createElement("button", { onClick: this.markCompleted }, "Mark Completed")));
    };
    return TodoList;
}(React.Component));
export default TodoList;
//# sourceMappingURL=Todo.js.map