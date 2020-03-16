import React, { Component } from 'react';
import { List, Input, Button } from 'antd';
import axios from 'axios';

export default class BasicPage extends Component {
  state = {
    inputValue: '',
    list: [],
  }

  componentDidMount() {
    axios.get('/todolist').then(res => {
      this.setState({
        list: res.data,
      });
    });
  }

  clickAddBtn = () => {
    const { inputValue } = this.state;
    if (!inputValue) return;

    axios.post('/todolist/add', inputValue).then(res => {
      this.setState({
        inputValue: '',
        list: res.data,
      });
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
    axios.delete('/todolist/remove', { data: uid }).then(res => {
      this.setState({
        list: res.data,
      });
    });
  }

  render() {
    return (
      <List
        header={this.HeaderInput()}
        bordered
        dataSource={this.state.list}
        renderItem={item => (
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
