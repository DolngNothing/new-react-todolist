import { connect } from "react-redux";
import Todo from "../components/Todo";

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => {
    dispatch({ type: "DELETE_TODO", id });
  },
  doneTodo: (todo) => {
    dispatch({ type: "DONE_TODO", todo });
  },
});

export default connect(null, mapDispatchToProps)(Todo);
