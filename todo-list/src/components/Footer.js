import React, {Component} from 'react';

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.clearCompleted = this.clearCompleted.bind(this);
  }
  
  clearCompleted(e) {
    this.props.onClear(e.target.value);
  }

  render() {
    return (
      <div className="footer-todo">
        <span>{this.props.item} item(s) left</span>
        <button onClick = { this.clearCompleted } >Clear completed</button>
        {  this.props.tab.map(
          tabContent => {
            return (
              <button
                key={tabContent.id}
                className={
                  `tab-link ${this.props.tabIndex === tabContent.id ? "active" : ""}`
                }
                onClick={() => this.props.changeTabIndex(tabContent.id)} >
                {tabContent.title}
              </button>
            );
          })
        }
      </div>
    );
  }
}
