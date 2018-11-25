import React, { Component } from "react";

class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItemInput: this.props.listItem,
      editListItem: false
    };
  }

  onChangeHandler = event => {
    this.setState({ listItemInput: event.target.value });
  };

  editListItemOnClickHandler = () => {
    const { editListItem } = this.state;
    this.setState({ editListItem: !editListItem });
  };

  render() {
    const { listItem, deleteOnClickHandler } = this.props;
    const { listItemInput, editListItem } = this.state;

    if (editListItem) {
      return (
        <div className="todo-list-item">
          <input value={listItemInput} onChange={this.onChangeHandler} />
          <button>Submit</button>
          <button onClick={this.editListItemOnClickHandler}>Cancel</button>
        </div>
      );
    } else {
      return (
        <div className="todo-list-item">
          <p onClick={this.editListItemOnClickHandler}>{listItem}</p>
          <button onClick={deleteOnClickHandler}>X</button>
        </div>
      );
    }
  }
}

export default TodoListItem;
