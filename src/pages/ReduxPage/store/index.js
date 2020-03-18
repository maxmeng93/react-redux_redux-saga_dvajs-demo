import { createStore } from 'redux';
import reducer from './reducer';

// state 初始状态，也可以在 reducer 中传入
const INIT_STATE = {
  todos: JSON.parse(localStorage.getItem('todoList')) || [],
};

console.log(INIT_STATE)

let store = createStore(reducer, INIT_STATE);

export default store;
