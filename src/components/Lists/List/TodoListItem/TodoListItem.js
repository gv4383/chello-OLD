import React, { Component } from "react";

class TodoListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listItem, deleteOnClickHandler } = this.props;

    return (
      <div className="todo-list-item">
        <p>{listItem}</p>
        <button onClick={deleteOnClickHandler}>X</button>
      </div>
    );
  }
}

export default TodoListItem;
