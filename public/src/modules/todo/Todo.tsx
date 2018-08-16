import * as React from 'react';
import { TodoModel } from '../../models/Todo';

interface TodoProps {
  todo: TodoModel;
}

export default class TodoList extends React.Component<TodoProps, {}> {
  markCompleted = (e) => {
    // call todoApi
    console.log('Single todo component completed called on id: ', this.props.todo._id);
  }

  render () {
    return (
      <div>
        Single Todo
        {JSON.stringify(this.props.todo)}
        <br/>
        <button onClick={this.markCompleted}>
          Mark Completed
        </button>
      </div>);
  }
}