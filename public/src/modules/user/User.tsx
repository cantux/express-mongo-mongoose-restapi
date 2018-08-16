import * as React from 'react';
import { UserModel } from '../../models/User';

import TodoList from '../todo/TodoList';
import FriendList from '../friend/FriendList';

import TodosApi from '../../api/Todo';
import { TodoModel } from '../../models/Todo';

export interface UserProps {
  user: UserModel;
  deleteUserButtonClickedCallback: (id: string) => void;
}

interface UserStates {
  todos: TodoModel[];
}

export class User extends React.Component<UserProps, UserStates> {
  constructor (props: UserProps) {
    super(props);
    this.state = { todos: props.user.todos };
  }

  postTodo = (userid, description) => {
    TodosApi.postTodo(userid, description).subscribe((ajaxResponse) => {
      this.setState((oldState) => ({todos: ajaxResponse.response}));
    });
  }

  onDeleteButtonClicked = () => {
    this.props.deleteUserButtonClickedCallback(this.props.user._id);
  }

  render () {
    const user = this.props.user;
    return (
      <div>
        Name: {user.name}
        <br/>
        Id: {user._id}
        <br/>
        <button
          onClick={this.onDeleteButtonClicked}
        >
          Delete User
        </button>
        <br/>
        <TodoList todos={this.state.todos} userid={user._id} postTodoCallback={this.postTodo}/>
        <br/>
        <FriendList friends={user.friends}/>
      </div>
    );
  }
}