import React, { useState } from 'react';

export function TodoItem(props) { 
  const [valueTodo, setValueTodo] = useState(props.id);

  //class 
  let nameClass = 'TodoItem';
  if(props.status) {
    nameClass += ' active';
  }

  function handleChange(e) {
    setValueTodo(e.target.value);
  }

  function checkStatus(e) {
    props.onChangeStatus(e.target.value);
  }
  function deleteTodo(e) {
    props.onDelete(e.target.value);
  }

  return (
    <div className={ nameClass }>
      <input 
        type="checkbox"
        value= { valueTodo }
        checked = { props.status }
        onChange= { handleChange }
        onClick= { checkStatus }/>
      <label> { props.content } </label>
      <button 
        value = { props.id } 
        onClick = { deleteTodo }>
        X
      </button>
    </div>
  );
}
