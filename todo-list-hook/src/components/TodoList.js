import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList(props) {
  const { todoItem } = props;
    
  return (
    <div className="TodoList">
      {
        todoItem.map(
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
