import Mock from 'mockjs';

Mock.mock('/todolist', 'get', () => {
  return JSON.parse(localStorage.getItem('todoList')) || [];
});

Mock.mock('/todolist/add', 'post', request => {
  const list = JSON.parse(localStorage.getItem('todoList')) || [];
  const addItem = { 
    uid: new Date().getTime(), 
    value: request.body,
  }
  const newList = [addItem, ...list];

  localStorage.setItem('todoList', JSON.stringify(newList));
  return newList;
});

Mock.mock('/todolist/remove', 'delete', request => {
  console.log(request);
  const list = JSON.parse(localStorage.getItem('todoList')) || [];
  const newList = list.filter(e => e.uid !== request.body);
  localStorage.setItem('todoList', JSON.stringify(newList));

  return newList;
});
