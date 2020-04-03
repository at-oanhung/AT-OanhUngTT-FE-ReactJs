import React, {Component} from 'react';
import TodoItem from './TodoItem';

/**
* @Class TodoList
* About component - TodoItem
*/
class TodoList extends Component {
  render() {
    const { todoItem, tabIndex } = this.props;
    const todoList = ( tabIndex ) => {
      switch (tabIndex) {
        case 1:
          return todoItem.filter(item => item.isComplete);
        case 2:
          return todoItem.filter(item => !item.isComplete);
        default:
          return todoItem;
      }
    };

    return (
      <div className="TodoList">
        {
          todoList(tabIndex).map(
            (item, index) => {
              if (!item.isDelete) {
                return(
                  <TodoItem 
                  key = { item.id }
                  id = { item.id }
                  content= { item.name } 
                  status= { item.isComplete }
                  onChangeStatus = {this.props.onChangeStatus}
                  onDelete = {this.props.onDelete} 
                />)
              }
              return '';
            }
          )
        }
      </div>
    );
  }
}

export default TodoList;
