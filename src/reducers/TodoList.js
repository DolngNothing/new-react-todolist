import axios from 'axios'

const URL="http://localhost:8081/todos/";

const todoList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      let n = { content: action.content, status: false }; 
      axios.post(URL,n).then((response)=>{
        n=response.data
      });
      return [...state,n];
    }

    case "DELETE_TODO": {
      let newState = state.filter((value) => {
        return value.id !== action.id;
      });
      axios.delete(URL+action.id)
      return newState;
    }

    case "DONE_TODO": {
      let newTodo={id:action.todo.id,content:action.todo.content,status:!action.todo.status}
      let newState=[...state]
      newState.map(item=>{
        if(item.id===action.todo.id){
          return item.status=!item.status;
        }
        return item.status;
      })
      axios.put(URL+action.todo.id,newTodo)
      return newState;
    }

    case "GET_LIST" : {
      return [...action.list]
    }
    
    default:
      return state;
  }
};


export default todoList;
