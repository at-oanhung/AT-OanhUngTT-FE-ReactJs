import React, {Component} from 'react';

import TodoContent from './TodoContent';

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      todoItem: [
        {id: 1, name: 'Hello', isDelete: false},
        {id: 2, name: 'Hi', isDelete: true},
        {id: 3, name: 'Goodbye', isDelete: false},
      ],
    }
  }

  // onChangeStatus = (id) => {
  //   this.setState({
  //     this.states.todoItem.map(
  //     (item, index) => {
  //       if (id == item.id) {
  //         return (...item, isDelete: !item.isDelete);
  //       }
  //       return item;
  //     })
  //   })
  // }

  render() {
    return (
      <div className="TodoItem">
        <input type="text" placeholder="What need to be done?"/>
        <br/>
        <div className="content-todo">
          {
            this.state.todoItem.map(
              (item, index) => 
              <TodoContent 
                key = {item.id} 
                content={item.name} 
                status={item.isDelete}
                onChangeStatus = {this.onChangeStatus}
              />
              )
          }
        </div>

        <div className="footer-todo">
          <span>item(s) left</span>
          <button>Clear completed</button>
          <button>Completed</button>
          <button>Active</button>
          <button>All Tasks</button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
