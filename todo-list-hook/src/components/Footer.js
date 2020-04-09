import React from 'react';

export function Footer(props) {
  return (
    <div className="footer-todo">
      <span> { props.item } item(s) left</span>
      <button> Clear completed </button>
      <button> Completed </button>
      <button> Active </button>
      <button> All Task </button>
    </div>
  );
}
