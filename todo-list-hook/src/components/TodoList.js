import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList(props) {
  const { todoItem, tabIndex } = props;
  
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
                onChangeStatus = { props.onChangeStatus }
                onDelete = { props.onDelete }
              />)
            }
            return '';
          }
        )
      }
    </div>
  );
}
