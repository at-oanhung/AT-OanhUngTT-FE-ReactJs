import React, {Component} from 'react';
import TodoContent from './TodoContent';
import AddTodo from './AddTodo';
import Footer from './Footer';

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      todoItem: [
        {id: 1, name: 'Hello', isDelete: false, isComplete: false},
        {id: 2, name: 'Hi', isDelete: false, isComplete: false},
        {id: 3, name: 'Goodbye', isDelete: false, isComplete: false},
      ],
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
    let newTask = { 
      id: this.state.todoItem.length + 1,
      name: value, 
      isDelete: false,
      isComplete: false
    };
    let todoItem = this.state.todoItem.concat(newTask);
    this.setState({todoItem: todoItem});
    // this.setState({
    //   todoItem: this.state.todoItem.push({
    //     id: this.state.todoItem.length +1 ,
    //     name: value,
    //     isDelete: false
    //   })
    // })
    // console.log(this.state.todoItem);
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

  onAllTasks = () => {
    this.setState({todoItem: this.state.todoItem});
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
        if(!item.isComplete) {
          count++;
        }
      return count;
    })
  }

  render() {
    return (
      <div className="TodoItem">
        <AddTodo onAddList = {this.onInsert}/>
        <div className="content-todo">
          {
            this.state.todoItem.map(
              (item, index) => {
                if (!item.isDelete) {
                  return(
                    <TodoContent 
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
          onAllTasks = { this.onAllTasks }
          onActive = { this.onActive }
          onCompleted = {this.onCompleted }
          onClear = {this.onClearCompleted } />
      </div>
    );
  }
}

export default TodoItem;
