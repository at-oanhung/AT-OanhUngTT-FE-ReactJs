import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <TodoItem/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
