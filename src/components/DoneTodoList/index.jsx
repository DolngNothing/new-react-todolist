import React from "react";
import TodoContainer from "../../containers/TodoContainer";

export default class DoneTodoList extends React.Component {
    componentDidMount(){
        console.log("1111")
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