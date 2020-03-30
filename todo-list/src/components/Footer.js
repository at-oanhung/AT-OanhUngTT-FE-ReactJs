import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer-todo">
        <span>item(s) left</span>
        <button>Clear completed</button>
        <button>Completed</button>
        <button>Active</button>
        <button>All Tasks</button>
      </div>
    );
  }
}

export default Footer;
