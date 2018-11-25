import React, { Component } from "react";

import TodoListItem from "./TodoListItem/TodoListItem";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editName: false,
      addItem: false,
      listNameInput: this.props.listName,
      newListItem: ""
    };
  }

  // Tracks user's input and stores in local state
  onChangeHandler = event => {
    console.log(`${event.target.name}: ${event.target.value}`);
    this.setState({ [event.target.name]: event.target.value });
  };

  // Allows editing on a list's name
  toggleEditNameHandler = () => {
    this.setState({ editName: true });
  };

  // Sets editing to false
  cancelEditHandler = () => {
    this.setState({
      editName: false
    });
  };

  // Curry submit handler so that it can take additional arguments (id and description)
  editListNameOnSubmitHandler = (id, body) => event => {
    // Prevents page from reloading everytime a submit occurs
    event.preventDefault();

    // Calls editName function from props
    this.props.editListName(id, body);

    // Sets editing state back to false
    this.setState({ editName: false });
  };

  addNewListItemOnSubmitHandler = event => {
    event.preventDefault();

    const { listId, todoList, addNewListItem } = this.props;
    const { newListItem } = this.state;

    addNewListItem(listId, todoList, newListItem);
    this.setState({
      addItem: false,
      newListItem: ""
    });
  };

  // Deletes a list item when the item is clicked
  deleteOnClickHandler = itemId => {
    const { listId, deleteListItem } = this.props;
    console.log(`Click on list: ${this.props.listId}, item: ${itemId}`);

    deleteListItem(listId, itemId);
  };

  // Toggles conditional rendering that allows user to input a new to-do list item
  toggleAddOnClickHandler = () => {
    const { addItem } = this.state;
    console.log("Yay, you clicked the 'Add Item' button!");

    // Toggles addItem to its opposite state
    this.setState({ addItem: !addItem });
  };

  render() {
    const { deleteList, listId, listName, todoList } = this.props;
    const { editName, addItem, listNameInput, newListItem } = this.state;

    // Iterates through todoList array in local state and renders and renders the todo items for that specific list
    const displayTodoList = todoList.map((listItem, i) => {
      return (
        // <div key={i}>
        //   <p>{listItem}</p>
        //   <button onClick={() => this.deleteOnClickHandler(i)}>X</button>
        // </div>

        <div key={i}>
          <TodoListItem
            listItem={listItem}
            deleteOnClickHandler={() => this.deleteOnClickHandler(i)}
          />
        </div>
      );
    });

    if (editName && !addItem) {
      return (
        <div className="individual-list">
          <form
            name="editNameInput"
            onSubmit={this.editListNameOnSubmitHandler(listId, listNameInput)}
          >
            <input
              value={listNameInput}
              name="listNameInput"
              onChange={this.onChangeHandler}
            />
            <button>Submit</button>
          </form>
          <button onClick={this.cancelEditHandler}>Cancel</button>
        </div>
      );
    } else if (!editName && addItem) {
      return (
        <div className="individual-list">
          <h3>{listName}</h3>
          {todoList && displayTodoList}
          <form onSubmit={this.addNewListItemOnSubmitHandler}>
            <input
              placeholder="Enter a new to-do item."
              value={newListItem}
              name="newListItem"
              onChange={this.onChangeHandler}
            />
            <button>Add!</button>
          </form>
          <button onClick={this.toggleAddOnClickHandler}>Cancel</button>
          <button onClick={deleteList}>Delete List</button>
        </div>
      );
    } else {
      return (
        <div className="individual-list">
          <h3 onClick={this.toggleEditNameHandler}>{listName}</h3>
          {todoList && displayTodoList}
          <button onClick={this.toggleAddOnClickHandler}>Add Item</button>
          <button onClick={deleteList}>Delete List</button>
        </div>
      );
    }
  }
}

export default List;
