import Mock from 'mockjs';

Mock.mock('/todolist', 'get', () => {
  return JSON.parse(localStorage.getItem('todoList')) || [];
});

Mock.mock('/todolist/add', 'post', request => {
  const list = JSON.parse(localStorage.getItem('todoList')) || [];
  const addItem = { 
    task: request.body,
    completed: false, 
  }
  const newList = [addItem, ...list];

  localStorage.setItem('todoList', JSON.stringify(newList));
  return newList;
});

Mock.mock('/todolist/remove', 'delete', request => {
  const list = JSON.parse(localStorage.getItem('todoList')) || [];
  const newList = list.filter((e, i) => i !== request.body);
  localStorage.setItem('todoList', JSON.stringify(newList));

  return newList;
});
