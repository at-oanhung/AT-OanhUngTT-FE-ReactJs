import React, {Component} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <TodoList/>
        </div>
      </div>
    );
  }
}

export default App;
