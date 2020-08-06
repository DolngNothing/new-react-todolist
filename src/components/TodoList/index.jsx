import TodoContainer from "../../containers/TodoContainer";
import React from "react";
import axios from 'axios'
import { List, message, Avatar, Spin } from 'antd';
import './todoList.css'

export default class TodoList extends React.Component {

  componentDidMount() {
    axios.get("http://localhost:8081/todos/").then((response) => {
      console.log(response.data);
      this.props.getTodoList(response.data)
    })
  }

  render() {
    return (<List
      size="large"
      className="list"
      dataSource={this.props.todoList}
      renderItem={(todo, index) =>
        <List.Item className="item" style={{width:'auto'}}>
          <TodoContainer value={todo} key={index} index={index} />
        </List.Item>}
    />)
  }
}
