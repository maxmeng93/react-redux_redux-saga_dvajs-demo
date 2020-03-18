import React, { Component } from 'react';
import { List, Input, Button } from 'antd';
import { Provider, connect } from 'react-redux';
import { initToDo, addToDo, deleteToDo } from './store/action';
import store from './store';

class TodoList extends Component {
  state = {
    inputValue: '',
  }

  inputValueChang = event => {
    this.setState({ 
      inputValue: event.target.value 
    });
  }

  clickAddBtn = () => {
    const { inputValue } = this.state;
    this.props.addToDo(inputValue);
    this.setState({
      inputValue: '',
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
        dataSource={this.props.todos}
        renderItem={(item, index) => (
          <List.Item 
            key={item.task + index}
            extra={<Button onClick={() => this.props.deleteToDo(index)}>删除</Button>}
          >
            {item.task}
          </List.Item>
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  const { todos } = state;
  return {
    todos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToDo: task => {
      dispatch(addToDo(task));
    },
    deleteToDo: index => {
      dispatch(deleteToDo(index));
    },
  }
}

TodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default class ReactReduxPage extends Component {
  componentDidMount() {
    store.dispatch(initToDo());
  }

  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }
}
