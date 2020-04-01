import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <TodoItem/>
      </div>
    </div>
  );
}

export default App;
