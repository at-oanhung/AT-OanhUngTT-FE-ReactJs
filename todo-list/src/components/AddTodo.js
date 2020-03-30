import React, {Component} from 'react';

class AddTodo extends Component {
  // constructor(props) {
  //   super(props);
  // }

  addList = (e) => {
    if(e.key === 'Enter'){
      this.props.onAddList(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          placeholder="What need to be done?" 
          onKeyPress={ this.addList }
        />
      </div>
    );
  }
}

export default AddTodo;
