import React, {Component} from 'react';
import TodoContent from './TodoContent';
import AddTodo from './AddTodo';

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      todoItem: [
        {id: 1, name: 'Hello', isDelete: false},
        {id: 2, name: 'Hi', isDelete: false},
        {id: 3, name: 'Goodbye', isDelete: false},
      ],
    }
  }

  onChangeStatus = (id) => {
    this.setState({
      todoItem: this.state.todoItem.map(
      item => {
        if(parseInt(id) === item.id) {
          console.log(id);
          return ({...item, isDelete: !item.isDelete});
        }
        return item;
      })
    })
  }

  onInsert = (value) => {
    let newTask = { 
      id: this.state.todoItem.length + 1, 
      name: value, 
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

  render() {
    return (
      <div className="TodoItem">
        <AddTodo onAddList = {this.onInsert}/>
        <div className="content-todo">
          {
            this.state.todoItem.map(
              (item, index) => 
              <TodoContent 
                key = { item.id }
                id = { item.id }
                content= { item.name } 
                status= { item.isDelete }
                onChangeStatus = {this.onChangeStatus}
              />
            )
          }
        </div>
      </div>
    );
  }
}

export default TodoItem;
