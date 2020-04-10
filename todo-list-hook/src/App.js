import React, { useState, useEffect } from 'react';
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
  const [tab] = useState([
        {id: 1, title: 'Completed'},
        {id: 2, title: 'Active'},
        {id: 3, title: 'All Tasks'},
      ]);
  const [tabIndex, setTabIndex] = useState(3);

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

  function onClearCompleted() {
    setTodoItem(
      todoItem.map(
        item => {
          if(item.isComplete) {
            return ({...item, isDelete: true});
          }
          return item;
      })
    )
  }
  
  function onShowTab(value) {
    setTabIndex(value);
  }
  
  const numberTodo = countTodo();
  useEffect(() => {
    document.title = `Todo (${numberTodo})`;
  }, [numberTodo]);

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todoList'));
    if(todoList) {
      setTodoItem(todoList);
    } else {
      localStorage.setItem('todoList', JSON.stringify(todoItem));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoItem));
  },[todoItem]);
  
  useEffect(() => {
    const tabName = JSON.parse(localStorage.getItem('tabName'));
    if(tabName) {
      setTabIndex(tabName);
    } else {
      localStorage.setItem('tabName', JSON.stringify(tabIndex));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('tabName', JSON.stringify(tabIndex));
  },[tabIndex]);

  return (
    <div className="App">
      <div className="container">
        <Header/>
        <AddTodo onAddList = { onInsert }/>
        <TodoList
          todoItem = { todoItem }
          onChangeStatus = { onChangeStatus }
          onDelete = { onDelete }
          tabIndex = { tabIndex }/>
        <Footer
          item = { numberTodo } 
          onClear = { onClearCompleted }
          changeTabIndex = { onShowTab }
          tab = { tab }
          tabIndex = { tabIndex }/>
      </div>
    </div>
  );
}
