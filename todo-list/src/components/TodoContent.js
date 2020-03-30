import React, {Component} from 'react';

class TodoContent extends Component {
  // constructor(props) {
  //   super(props);
  // }
  
  checkStatus = (e) => {
    this.props.onChangeStatus(e.target.value);
  }

  render() {
    let nameClass = 'TodoContent';
    if (this.props.status) {
      nameClass += ' active';
    }

    return (
      <div className={ nameClass }>
        <input 
          type="checkbox" 
          value= { this.props.id }
          onClick={ this.checkStatus }
        />
        <label> { this.props.content } </label>
      </div>
    );
  }
}

export default TodoContent;
