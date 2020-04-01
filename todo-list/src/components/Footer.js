import React, {Component} from 'react';

class Footer extends Component {
  allTasks = (e) => {
    this.props.onAllTasks(e.target.value);
  }
  
  active = (e) => {
    this.props.onActive(e.target.value);
  }

  completed = (e) => {
    this.props.onCompleted(e.target.value);
  }
  
  clearCompleted = (e) => {
    this.props.onClear(e.target.value);
  }
  
  render() {
    return (
      <div className="footer-todo">
        <span>{this.props.item} item(s) left</span>
        <button onClick = { this.clearCompleted } >Clear completed</button>
        <button onClick = { this.completed } >Completed</button>
        <button onClick = { this.active }>Active</button>
        <button onClick = { this.allTasks } >All Tasks</button>
      </div>
    );
  }
}

export default Footer;
