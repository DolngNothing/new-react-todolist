import axios from 'axios'

const URL="https://5e9ec500fb467500166c4658.mockapi.io/todos/";

const todoList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      let n = { id: state.length, content: action.content, status: false }; 
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
