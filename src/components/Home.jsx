import React from "react";
import TodoFormContainer from "../containers/TodoFormContainer";
import TodoListContainer from "../containers/TodoListContainer";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <TodoListContainer />
                <TodoFormContainer />
            </div>
        )
    }
}