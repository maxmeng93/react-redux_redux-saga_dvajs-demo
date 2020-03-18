import React, { Component } from 'react';
import { List, Input, Button } from 'antd';
import { initToDo, addToDo, deleteToDo } from './store/action';
import store from './store';

export default class ReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: store.getState().todos,
    }

    // 订阅一个监听器，state改变时会调用监听器
    this.unsubscribe = store.subscribe(this.listener);
  }

  componentDidMount() {
    store.dispatch(initToDo());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  listener = () => {
    const { todos } = store.getState();
    this.setState({
      todos,
    });
  }

  clickAddBtn = () => {
    const { inputValue } = this.state;
    store.dispatch(addToDo(inputValue));
    this.setState({
      inputValue: '',
    });
  }

  inputValueChang = event => {
    this.setState({ 
      inputValue: event.target.value 
    });
  }

  deleteTask = index => {
    store.dispatch(deleteToDo(index));
  }

  HeaderInput = () => (
    <Input 
      value={this.state.inputValue}
      onChange={this.inputValueChang}
      placeholder="请输入你要添加的任务"
      suffix={
        <Button onClick={this.clickAddBtn} type="primary">添加</Button>
      } 
    />
  )
  
  render() {
    return (
      <List
        style={{width: 500}}
        header={this.HeaderInput()}
        bordered
        dataSource={this.state.todos}
        renderItem={(item, index) => (
          <List.Item 
            key={item.task + index}
            extra={<Button onClick={() => this.deleteTask(index)}>删除</Button>}
          >
            {item.task}
          </List.Item>
        )}
      />
    );
  }
}
