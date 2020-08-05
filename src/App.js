import React from "react";
import "./App.css";
// import TodoFormContainer from "./containers/TodoFormContainer";
// import TodoListContainer from "./containers/TodoListContainer";
import DoneTodoListContainer from "./containers/DoneTodoListContainer"
import { HashRouter, Route, Link } from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.Fragment>
          <HashRouter>
            <ul>
              <li>
                <Link to="/">go to list</Link>
              </li>
              <li>
                <Link to="/doneTodoList">go to done list</Link>
              </li>
            </ul>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/doneTodoList" component={DoneTodoListContainer}></Route>
          </HashRouter>
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
