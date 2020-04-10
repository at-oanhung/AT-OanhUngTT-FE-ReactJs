import React, { useState } from 'react';

export function AddTodo(props) {
  const [valueTodo, setValueTodo] = useState('');

  function handleChange(e) {
    setValueTodo(e.target.value);
  }

  function addList(e) {
    if(e.key === 'Enter'){
      if(valueTodo.trim()) {
        props.onAddList(valueTodo);
        setValueTodo ('');
      } else {
        alert('Please import todo!');
      }
    } 
  }

  return (
    <div className="AddTodo">
      <input 
        type="text"
        placeholder="What need to be done?" 
        value = { valueTodo }
        onChange = { handleChange}
        onKeyPress = { addList }
      />
    </div>
  );
}
