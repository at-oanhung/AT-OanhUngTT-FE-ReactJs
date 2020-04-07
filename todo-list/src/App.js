import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import './App.css';
import {TodoList} from './components/TodoList';
import {Header} from './components/Header';
import {AddTodo} from './components/AddTodo';
import {Footer} from './components/Footer';

/**
* @Class App
* About component - Header, AddTodo, TodoList, Footer
* Data: todoItem(id,name,isDelete,isComplete) inside 
*   isDelete check status Delete
*   isComplete check status work
* AddTodo - @param {value} - add list
* TodoList
* Footer - @param {tabIndex} - show data TodoList
*/
export class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItem: [
        {id: 1, name: 'Hello', isDelete: false, isComplete: false},
        {id: 2, name: 'Hi', isDelete: false, isComplete: true},
        {id: 3, name: 'Goodbye', isDelete: false, isComplete: false},
      ],
      tab: [
        {id: 1, title: 'Completed'},
        {id: 2, title: 'Active'},
        {id: 3, title: 'All Tasks'},
      ],
      tabIndex: 3,
    }
    this.countTodo = this.countTodo.bind(this);
  }

  onChangeStatus = (id) => {
    this.setState({
      todoItem: this.state.todoItem.map(
      item => {
        if(parseInt(id) === item.id) {
          return ({...item, isComplete: !item.isComplete});
        }
        return item;
      })
    })
  }

  onInsert = (value) => {
    this.state.todoItem.push({
      id: this.state.todoItem.length +1,
      name: value,
      isDelete: false,
      isComplete: false
    })
    this.setState({
      todoItem: this.state.todoItem
    })
  }

  onDelete = (id) => {
    this.setState({
      todoItem: this.state.todoItem.map(
      item => {
        if(parseInt(id) === item.id) {
          return ({...item, isDelete: !item.isDelete});
        }
        return item;
      })
    })
  }

  onShowTab = (value) => {
    this.setState({
      tabIndex: value,
    });
  }

  onClearCompleted = () => {
    this.setState({
      todoItem: this.state.todoItem.map(
      item => {
        if(item.isComplete) {
          return ({...item, isDelete: true});
        }
        return item;
      })
    })
  }

  countTodo() {
    let count = 0;
    this.state.todoItem.map(
      item => {
        if(!item.isComplete && !item.isDelete) {
          count++;
        }
      return count;
    })
    return count;
  }

  render() {
    let countItem =  this.countTodo();
    return (
      <div className="App">
        <Helmet>
          <title>{ `Todo (${countItem})` }</title>
        </Helmet>
        <div className="container">
          <Header/>
          <AddTodo onAddList = {this.onInsert}/>
          <TodoList 
            todoItem = { this.state.todoItem }
            tabIndex = { this.state.tabIndex }
            onChangeStatus = {this.onChangeStatus}
            onDelete = {this.onDelete} />
          <Footer 
            item = { countItem }
            changeTabIndex = { this.onShowTab }
            onClear = {this.onClearCompleted }
            tab = {this.state.tab}
            tabIndex = {this.state.tabIndex} />
        </div>
      </div>
    );
  }
}
