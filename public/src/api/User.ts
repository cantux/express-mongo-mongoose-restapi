import fetch from 'isomorphic-fetch';

import { NewUserModel } from '../models/User';

export default class UserApi {
  public static getUsers = (name: string) => {
    return fetch(`http://localhost:3000/v1/users/` + name);
  }

  public static postUser = (data: NewUserModel) => {
    console.log('data: ', data);
    return fetch(`http://localhost:3000/v1/users`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  public static deleteUser = (id: string) => {
    return fetch(`http://localhost:3000/v1/users/` + id, {
      method: 'DELETE'
    });
  }
}
