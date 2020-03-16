import React, { Component } from 'react';
import { List, Input, Button } from 'antd';

export default class BasicPage extends Component {
  state = {
    inputValue: '',
    list: [],
  }

  componentDidMount() {
    this.setState({
      list: JSON.parse(localStorage.getItem('todoList')) || [],
    });
  }

  clickAddBtn = () => {
    const { inputValue, list } = this.state;
    if (!inputValue) return;
    
    const newList = [
      { uid: new Date().getTime(), value: inputValue }, 
      ...list,
    ];
    localStorage.setItem('todoList', JSON.stringify(newList));

    this.setState({
      inputValue: '',
      list: newList,
    });
  }

  inputValueChang = event => {
    this.setState({ 
      inputValue: event.target.value 
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

  deleteTask = uid => {
    const { list } = this.state;
    const newList = list.filter(item => item.uid !== uid);
    
    localStorage.setItem('todoList', JSON.stringify(newList));

    this.setState({
      list: newList,
    });
  }

  render() {
    return (
      <List
        header={this.HeaderInput()}
        bordered
        dataSource={this.state.list}
        renderItem={(item, index) => (
          <List.Item 
            key={item.uid}
            extra={<Button onClick={() => this.deleteTask(item.uid)}>删除</Button>}
          >
            {item.value}
          </List.Item>
        )}
      />
    );
  }
}

// export default () => {
//   const [list, setList] = useState(['aaa', 'bbb']);
//   const [inputValue, setInputValue] = useState('');

//   useEffect(() => {

//   })

//   const clickAddBtn = () => {
//     console.log('add')
//   }

//   const inputValueChang = event => {
//     console.log(event)
//     const value = event.target.value;
//     setInputValue(value);
//     console.log(value);
//   }

//   const HeaderInput = () => (
//     <Input 
//       value={inputValue}
//       onChange={inputValueChang}
//       placeholder="请输入你要添加的任务"
//       suffix={
//         <Button onClick={clickAddBtn} type="primary">添加</Button>
//       } 
//     />
//   )

//   return (
//     <div>
//       <List
//         header={<HeaderInput />}
//         bordered
//         dataSource={list}
//         renderItem={item => (
//           <List.Item key={item}>{item}</List.Item>
//         )}
//       />
//     </div>
//   )
// }
