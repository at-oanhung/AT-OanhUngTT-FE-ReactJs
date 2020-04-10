import React, { useState } from 'react';
import { Header } from './components/Header';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';

export function App() {
  const [todoItem, setTodoItem] = useState([
        {id: 1, name: 'Hello', isDelete: false, isComplete: false},
        {id: 2, name: 'Hi', isDelete: false, isComplete: true},
        {id: 3, name: 'Goodbye', isDelete: false, isComplete: false},
      ]);

  function onChangeStatus(id) {
    setTodoItem(
      todoItem.map(
        item => {
          if(parseInt(id) === item.id) {
            return ({...item, isComplete: !item.isComplete});
          }
          return item;
      })
    )
  }

  function onDelete(id) {
    setTodoItem(
      todoItem.map(
        item => {
          if(parseInt(id) === item.id) {
            return ({...item, isDelete: !item.isDelete});
          }
          return item;
      })
    )
  }

  function onInsert(value) {
    let newTodo = { 
      id: todoItem.length +1,
      name: value,
      isDelete: false,
      isComplete: false
    };
    let todoItemNew = todoItem.concat(newTodo);
    setTodoItem(todoItemNew);
  }

  function countTodo() {
    let count = 0;
    todoItem.map(
      item => {
        if(!item.isComplete && !item.isDelete) {
          count++;
        }
      return count;
    })
    return count;
  }
  
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <AddTodo onAddList = { onInsert }/>
        <TodoList
          todoItem = { todoItem }
          onChangeStatus = { onChangeStatus }
          onDelete = { onDelete }/>
        <Footer
          item = { countTodo() }/>
      </div>
    </div>
  );
}
