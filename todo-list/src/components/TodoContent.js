import React from 'react';

function TodoContent(props) {
  const item = props;
  const nameClass = 'TodoContent';
  // let checkStatus = (e) => {
  //   console.log(e.target.value);
  //   props.onChangeStatus(e.target.value);
  // }

  // if(item.status){
  //   nameClass += ' active';
  // }

  return (
    <div className={ nameClass }>
      <input 
        type="checkbox" 
        value=" { item.content }"
      />
      <label> { item.content } </label>
    </div>
    );
}

export default TodoContent;
