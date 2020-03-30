import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Todo</h1>
        </header>

        <TodoItem/>
      </div>
    </div>
  );
}

export default App;
