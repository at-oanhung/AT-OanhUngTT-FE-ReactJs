import React from 'react';

export function Footer(props) {
  function clearCompleted(e) {
    props.onClear(e.target.value);
  }

  return (
    <div className="footer-todo">
      <span> { props.item } item(s) left</span>
      <button onClick = { clearCompleted }> Clear completed </button>
      { props.tab.map(
        tabContent => {
          return (
            <button
              key={tabContent.id}
              className={
                `tab-link ${props.tabIndex === tabContent.id ? "active" : ""}`
              }
              onClick={() => props.changeTabIndex(tabContent.id)} >
              {tabContent.title}
            </button>
          );
        })
      }
    </div>
  );
}
