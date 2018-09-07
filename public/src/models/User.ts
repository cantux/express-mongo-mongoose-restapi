import { TodoModel } from './Todo';

export interface UserModel {
  name: string;
  _id: string;
  todos: TodoModel[];
  friends: UserModel[];
}

export interface NewUserModel {
  name: string;
}