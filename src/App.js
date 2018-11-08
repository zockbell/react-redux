import React, { Component, Fragment } from 'react';
import './App.css';
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <Fragment>
        <TodoList />
      </Fragment>
    );
  }
}

export default App;
