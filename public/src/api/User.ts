import { ajax } from 'rxjs/observable/dom/ajax';

import { UserModel } from '../models/User';

export default class UserApi {
  public static getUsers = (name: string) => {
    return ajax.getJSON<UserModel[]>(`http://localhost:3000/api/users/` + name);
  }

  public static postUser = (name: string) => {
    return ajax.post(`http://localhost:3000/api/users/` + name);
  }

  public static deleteUser = (id: string) => {
    return ajax.delete(`http://localhost:3000/api/users/` + id);
  }
}
