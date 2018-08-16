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
import UserApi from '../../api/User';
import { User } from './User';
var UserList = /** @class */ (function (_super) {
    __extends(UserList, _super);
    function UserList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            name: '',
            users: [],
            postedUser: { name: '', _id: '', todos: [], friends: [] },
            postedUserName: ''
        };
        _this.onGetNameInputChange = function (event) {
            _this.setState({
                name: event.target.value
            });
        };
        _this.onPostNameInputChange = function (event) {
            _this.setState({
                postedUserName: event.target.value
            });
        };
        _this.onPostUsersClicked = function () {
            UserApi.postUser(_this.state.postedUserName).subscribe(function (user) { return _this.setState({ postedUser: user.response }); });
        };
        _this.onGetUsersClicked = function () {
            UserApi.getUsers(_this.state.name).subscribe(function (users) { return _this.setState({ users: users }); });
        };
        _this.onDeleteUsersClicked = function (id) {
            UserApi.deleteUser(id).subscribe(function (ajaxResponse) {
                _this.setState(function (oldState) { return ({ users: ajaxResponse.response }); });
            });
        };
        return _this;
    }
    UserList.prototype.render = function () {
        var _this = this;
        var usersComponentList = this.state.users.map(function (user, index) { return (React.createElement(User, { key: index, user: user, deleteUserButtonClickedCallback: _this.onDeleteUsersClicked })); });
        return (React.createElement("div", null,
            React.createElement("input", { type: "text", value: this.state.postedUserName, onChange: this.onPostNameInputChange }),
            React.createElement("button", { onClick: this.onPostUsersClicked }, "Post User"),
            React.createElement("br", null),
            "Last Posted User is: ",
            JSON.stringify(this.state.postedUser),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("input", { type: "text", value: this.state.name, onChange: this.onGetNameInputChange }),
            React.createElement("button", { onClick: this.onGetUsersClicked }, "Search Users"),
            React.createElement("br", null),
            React.createElement("br", null),
            usersComponentList));
    };
    return UserList;
}(React.Component));
export { UserList };
//# sourceMappingURL=UserList.js.map