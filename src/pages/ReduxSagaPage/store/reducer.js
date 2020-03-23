import { combineReducers } from 'redux';
import { INIT_TODO, ADD_TODO, DELETE_TODO } from './action';

function todos(todos = [], action) {
  const newTodos = JSON.parse(JSON.stringify(todos));
  let data;

  switch (action.type) {
    case INIT_TODO:
      return JSON.parse(localStorage.getItem('todoList'));
    case ADD_TODO:
      data =  [
        { task: action.task, completed: false },
        ...newTodos,
      ];
      localStorage.setItem('todoList', JSON.stringify(data));
      return data;
    case DELETE_TODO:
      data = newTodos.filter((e, i) => i !== action.index);
      localStorage.setItem('todoList', JSON.stringify(data));
      return data;
    default:
      return newTodos;
  }
}

const todoApp = combineReducers({
  todos,
});

export default todoApp;
