import { connect } from "react-redux";
import DoneTodoList from "../components/DoneTodoList";

const mapStateToProps = (state) => ({
  todoList: state.TodoList.filter((value, index) => {
      return value.status;
  })
});

export default connect(mapStateToProps)(DoneTodoList);