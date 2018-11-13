import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editName: false,
      listNameInput: this.props.listName,
      todoList: this.props.todoList
    };
  }

  // Tracks user's input and stores in local state
  onChangeHandler = event => {
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
  onSubmitHandler = (id, body) => event => {
    // Prevents page from reloading everytime a submit occurs
    event.preventDefault();

    // Calls editName function from props
    this.props.editListName(id, body);

    // Sets editing state back to false
    this.setState({ editName: false });
  };

  render() {
    const { deleteList, listId, listName } = this.props;
    const { editName, listNameInput, todoList } = this.state;

    // Iterates through todoList array in local state and renders and renders the todo items for that specific list
    const displayTodoList = todoList.map((listItem, i) => {
      return (
        <div key={i}>
          <p>{listItem}</p>
        </div>
      );
    });

    if (editName) {
      return (
        <div className="individual-list">
          <form
            name="editNameInput"
            onSubmit={this.onSubmitHandler(listId, listNameInput)}
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
    } else {
      return (
        <div className="individual-list">
          <h3 onClick={this.toggleEditNameHandler}>{listName}</h3>
          {todoList && displayTodoList}
          <button onClick={deleteList}>Delete List</button>
        </div>
      );
    }
  }
}

export default List;
