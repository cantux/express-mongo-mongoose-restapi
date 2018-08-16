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
import TodoList from '../todo/TodoList';
import FriendList from '../friend/FriendList';
import TodosApi from '../../api/Todo';
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(props) {
        var _this = _super.call(this, props) || this;
        _this.postTodo = function (userid, description) {
            TodosApi.postTodo(userid, description).subscribe(function (ajaxResponse) {
                _this.setState(function (oldState) { return ({ todos: ajaxResponse.response }); });
            });
        };
        _this.onDeleteButtonClicked = function () {
            _this.props.deleteUserButtonClickedCallback(_this.props.user._id);
        };
        _this.state = { todos: props.user.todos };
        return _this;
    }
    User.prototype.render = function () {
        var user = this.props.user;
        return (React.createElement("div", null,
            "Name: ",
            user.name,
            React.createElement("br", null),
            "Id: ",
            user._id,
            React.createElement("br", null),
            React.createElement("button", { onClick: this.onDeleteButtonClicked }, "Delete User"),
            React.createElement("br", null),
            React.createElement(TodoList, { todos: this.state.todos, userid: user._id, postTodoCallback: this.postTodo }),
            React.createElement("br", null),
            React.createElement(FriendList, { friends: user.friends })));
    };
    return User;
}(React.Component));
export { User };
//# sourceMappingURL=User.js.map