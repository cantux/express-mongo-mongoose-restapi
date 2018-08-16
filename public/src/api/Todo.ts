import { ajax } from 'rxjs/observable/dom/ajax';

import { TodoModel } from '../models/Todo';

export default class TodosApi {
  public static getTodos = (name: string) => {
    return ajax.getJSON<TodoModel[]>(`http://localhost:3000/api/todos/` + name);
  }

  public static postTodo = (id: string, body: TodoModel) => {
    return ajax.post(`http://localhost:3000/api/todos/` + id, body);
  }

  public static deleteTodo = (id: string) => {
    console.log('TodosApi deleteTodo called');
  }

  public static markTodoCompleted = (id: string) => {
    console.log('TodosApi markCompleted called');
  }
}