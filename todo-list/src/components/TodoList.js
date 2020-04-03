import React, {Component} from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import Footer from './Footer';

/**
* @Class TodoList
* Data: todoItem(id,name,isDelete,isComplete) inside 
*   isDelete check status Delete
*   isComplete check status work
* About - AddTodo, TodoItem, Footer
* AddTodo - @param {value} - add list
* Footer - @param {tabIndex} - show data TodoList
*/
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todoItem: [
        {id: 1, name: 'Hello', isDelete: false, isComplete: false},
        {id: 2, name: 'Hi', isDelete: false, isComplete: false},
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
    const { todoItem, tabIndex } = this.state;
    const todo = ( tabIndex ) => {
      switch (tabIndex) {
        case 2:
          return todoItem.filter(item => !item.isComplete);
        case 1:
          return todoItem.filter(item => item.isComplete);
        default:
          return todoItem;
      }
    };

    return (
      <div className="TodoList">
        <AddTodo onAddList = {this.onInsert}/>
        <div className="content-todo">
          {
            todo(tabIndex).map(
              (item, index) => {
                if (!item.isDelete) {
                  return(
                    <TodoItem 
                    key = { item.id }
                    id = { item.id }
                    content= { item.name } 
                    status= { item.isComplete }
                    onChangeStatus = {this.onChangeStatus}
                    onDelete = {this.onDelete} 
                  />)
                }
                return '';
              }
            )
          }
        </div>
        <Footer 
          item = { this.countTodo() }
          changeTabIndex = { this.onShowTab }
          onClear = {this.onClearCompleted }
          tab = {this.state.tab}
          tabIndex = {this.state.tabIndex} />
      </div>
    );
  }
}

export default TodoList;
