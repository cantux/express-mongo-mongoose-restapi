import * as React from 'react';
import './App.css';
import { UserList } from '../user/UserList';

const logo = require('../../assets/images/logo.svg');

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UserList/>
      </div>
    );
  }
}
