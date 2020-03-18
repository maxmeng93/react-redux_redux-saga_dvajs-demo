import React, { Component } from 'react';
import { List, Input, Button } from 'antd';
import axios from 'axios';

export default class BasicPage extends Component {
  state = {
    inputValue: '',
    todos: [],
  }

  componentDidMount() {
    axios.get('/todolist').then(res => {
      this.setState({
        todos: res.data,
      });
    });
  }

  clickAddBtn = () => {
    const { inputValue } = this.state;
    if (!inputValue) return;

    axios.post('/todolist/add', inputValue).then(res => {
      this.setState({
        inputValue: '',
        todos: res.data,
      });
    });
  }

  inputValueChang = event => {
    this.setState({ 
      inputValue: event.target.value 
    });
  }

  deleteTask = index => {
    axios.delete('/todolist/remove', { data: index }).then(res => {
      this.setState({
        todos: res.data,
      });
    });
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
