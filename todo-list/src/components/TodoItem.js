import React, {Component} from 'react';

/**
* @Class TodoItem
* checkbox - changes Status work done and not done
* work not done - add class 'active'
* button Delete - delete work
* return value(checkStatus, deleteTodo) for TodoList
*/
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueTodo: this.props.id,
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
  }
  
  checkStatus(e) {
    this.props.onChangeStatus(e.target.value);
  }

  deleteTodo = (e) => {
    this.props.onDelete(e.target.value);
  }



  handleChange(event) {
    this.setState({
      valueTodo: event.target.value,
    });
  }

  render() {
    let nameClass = 'TodoItem';
    if (this.props.status) {
      nameClass += ' active';
    }

    return (
      <div className={ nameClass }>
        <input 
          type="checkbox"
          value= { this.state.valueTodo }
          onClick={ this.checkStatus }
          checked = {this.props.status }
          onChange={this.handleChange}
        />
        <label> { this.props.content } </label>
        <button value = { this.props.id } onClick = {this.deleteTodo}>X</button>
      </div>
    );
  }
}

export {TodoItem};
