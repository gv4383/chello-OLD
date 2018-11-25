import React, { Component } from "react";

class TodoListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-list-item">
        <p>List Item</p>
        <button>X</button>
      </div>
    );
  }
}

export default TodoListItem;
