import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = (state) => ({
  todoList: state.TodoList,
});

const mapDispatchToProps = (dispatch) => ({
  getTodoList: (list) => {
    dispatch({ type: "GET_LIST", list });
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
