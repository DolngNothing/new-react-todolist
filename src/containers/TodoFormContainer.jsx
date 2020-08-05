import { connect } from "react-redux";
import TodoForm from "../components/TodoForm";

const mapDispatchToProps = (dispatch) => ({
  addTodo: (id,content) => {
    dispatch({ type: "ADD_TODO", id,content});
  },
});

export default connect(null, mapDispatchToProps)(TodoForm);
