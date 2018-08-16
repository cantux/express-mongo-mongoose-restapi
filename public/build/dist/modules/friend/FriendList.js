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
import Friend from './Friend';
var FriendList = /** @class */ (function (_super) {
    __extends(FriendList, _super);
    function FriendList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FriendList.prototype.render = function () {
        var friendList = this.props.friends.map(function (friend, index) { return (React.createElement(Friend, { key: index, friend: friend })); });
        return (React.createElement("div", null, friendList.length > 0 ?
            (React.createElement("div", null,
                "Friends:",
                friendList)) : React.createElement("div", null, "Friends Yok")));
    };
    return FriendList;
}(React.Component));
export default FriendList;
//# sourceMappingURL=FriendList.js.map