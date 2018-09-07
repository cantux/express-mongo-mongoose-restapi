import * as React from 'react';

import UserApi from '../../api/User';
import { UserModel } from '../../models/User';

import { User } from './User';

interface UserListStates {
  users: UserModel[];
  name: string;
  postedUserName: string;
  postedUser: UserModel;
}

export class UserList extends React.Component<{}, UserListStates> {
  state = {
    name: '',
    users: [],
    postedUser: {name: '', _id: '', todos: [], friends: []},
    postedUserName: ''
  };

  onGetNameInputChange = (event) => {
   this.setState({
     name: event.target.value
   });
  }

  onPostNameInputChange = (event) => {
    this.setState({
      postedUserName: event.target.value
    });
  }

  onPostUsersClicked = () => {
    UserApi.postUser({name: this.state.postedUserName})
      .then((response) => (response.json())
        .then((user) => {
            this.setState(function(prevState: UserListStates, props: {}) {
              return {
                postedUser: user
              };
            });
          }
        )
      );
  }

  onGetUsersClicked = () => {
    UserApi.getUsers(this.state.name).then(
      (response) => (response.json()).then((users) => this.setState({users})));
  }

  onDeleteUsersClicked = (id: string) => {
    UserApi.deleteUser(id).then(
      (response) => (response.json()).then((users) => this.setState({users})));
  }

  render() {

    const usersComponentList = this.state.users.map((user: UserModel, index) => (
      <User
        key={index}
        user={user}
        deleteUserButtonClickedCallback={this.onDeleteUsersClicked}
      />));

    return (
      <div>
        <input
          type="text"
          value={this.state.postedUserName}
          onChange={this.onPostNameInputChange}
        />
        <button
          onClick={this.onPostUsersClicked}
        >
          Post User
        </button>
        <br/>
        Last Posted User is: {JSON.stringify(this.state.postedUser)}

        <br/>
        <br/>
        <br/>

        <input
          type="text"
          value={this.state.name}
          onChange={this.onGetNameInputChange}
        />
        <button
          onClick={this.onGetUsersClicked}
        >
          Search Users
        </button>
        <br/>
        <br/>
        {usersComponentList}

      </div>
    );
  }
}