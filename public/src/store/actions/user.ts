import { Action } from 'redux';

import { UserModel } from '../../models/User';

export enum UserListActionType {
  POST_USER = 'POSTUSER'
}

export interface UserListAction extends Action {
  type: UserListActionType | null;
  payload?: UserModel;
}