import { Action } from 'redux';

import { UserModel, NewUserModel } from '../../models/User';
import UserApi from '../../api/User';

export enum UserListActionType {
  POST_USER = 'POSTUSER',
  SET_USER = 'SETUSER'
}

export interface UserListAction extends Action {
  type: UserListActionType | null;
  payload?: UserModel | NewUserModel;
}

export const postUser = (user: UserModel): UserListAction => ({type: UserListActionType.POST_USER, payload: user});

export const postUserThunk = (user: NewUserModel) => dispatch => (
  UserApi.postUser(user).then((body) => (dispatch(postUser(body))))
);