import { ajax } from 'rxjs/observable/dom/ajax';
var UserApi = /** @class */ (function () {
    function UserApi() {
    }
    UserApi.getUsers = function (name) {
        return ajax.getJSON("http://localhost:3000/api/users/" + name);
    };
    UserApi.postUser = function (name) {
        return ajax.post("http://localhost:3000/api/users/" + name);
    };
    UserApi.deleteUser = function (id) {
        return ajax.delete("http://localhost:3000/api/users/" + id);
    };
    return UserApi;
}());
export default UserApi;
//# sourceMappingURL=User.js.map