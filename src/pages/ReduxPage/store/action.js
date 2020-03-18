// action type 如果有很多，可以单独新建一个 actionTypes.js 文件
export const INIT_TODO = 'init_todo';
export const ADD_TODO = 'add_todo';
export const DELETE_TODO = 'remove_todo';

export function initToDo() {
  return {
    type: INIT_TODO,
  }
}

export function addToDo(task) {
  return {
    type: ADD_TODO,
    task,
  }
}

export function deleteToDo(index) {
  return {
    type: DELETE_TODO,
    index,
  }
}
