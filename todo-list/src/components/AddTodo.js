import React, {Component} from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueTodo: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  addList = (e) => {
    if(e.key === 'Enter'){
      if(this.state.valueTodo.trim()) {
        this.props.onAddList(this.state.valueTodo);
        this.setState ({
          valueTodo: '',
        })
      } else {
        alert('Please import todo!');
      }
    } 
  }

  handleChange(event) {
    this.setState({
      valueTodo: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          placeholder="What need to be done?"
          value= {this.state.valueTodo}
          onChange={this.handleChange}
          onKeyPress={ this.addList }
        />
      </div>
    );
  }
}

export default AddTodo;
