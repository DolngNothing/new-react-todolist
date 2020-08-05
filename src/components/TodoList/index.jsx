import TodoContainer from "../../containers/TodoContainer";
import React from "react";
import axios from 'axios'

export default class TodoList extends React.Component {
  componentDidMount(){
    axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos").then((response)=>{
      console.log(response.data);
      this.props.getTodoList(response.data)
    })  
  }

  render() {
    return this.props.todoList.map((todo, index) => (
      <div>
        <TodoContainer value={todo} key={index} index={index} />
        <br />
      </div>
    ));
  }
}
