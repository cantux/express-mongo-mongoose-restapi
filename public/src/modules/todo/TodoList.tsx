import * as React from 'react';
import { TodoModel } from '../../models/Todo';

import Todo from './Todo';

interface TodoListProps {
  userid: string;
  todos: TodoModel[];
  postTodoCallback: (id: string, todo: TodoModel) => void;
}

interface TodoListStates {
  postedTodoDescription: string;
}

export default class TodoList extends React.Component<TodoListProps, TodoListStates> {
  state = {
    postedTodoDescription: ''
  };

  onPostTodoInputChange = (event) => {
    this.setState({
      postedTodoDescription: event.target.value
    });
  }

  createTodo = (e) => {
    this.props.postTodoCallback(this.props.userid, {description: this.state.postedTodoDescription});
  }

  render () {
    const todoList = this.props.todos.map((todo, index) => (<Todo key={index} todo={todo}/>));
    return (
      <div>
        <input
          value={this.state.postedTodoDescription}
          type="text"
          onChange={this.onPostTodoInputChange}
        />
        <button onClick={this.createTodo}>
          Todo Ekle
        </button>
        <br/>
        {
          todoList.length > 0 ?
          (
            <div>
            Todos:
            {todoList}
            </div>
          ) : <div>Todo Yok</div>

        }
      </div>
    );
  }
}