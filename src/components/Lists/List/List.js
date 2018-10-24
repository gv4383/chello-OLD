import React, { Component } from "react";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      listDescriptionInput: this.props.listDescription
    };
  }

  // Tracks user's input and stores in local state
  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Allows editing on a list's desccription
  toggleEditHandler = () => {
    this.setState({ editing: true });
  };

  // Sets editing to false
  cancelEditHandler = () => {
    this.setState({ editing: false });
  };

  // Curry submit handler so that it can take additional arguments (id and description)
  onSubmitHandler = (id, description) => event => {
    // Prevents page from reloading everytime a submit occurs
    event.preventDefault();

    // Calls editDescription function from props
    this.props.editDescription(id, description);

    // Sets editing state back to false
    this.setState({ editing: false });
  };

  render() {
    const { deleteList, listId, listName, listDescription } = this.props;
    const { editing, listDescriptionInput } = this.state;

    if (!editing) {
      return (
        <div>
          <h3>{listName}</h3>
          <p onClick={this.toggleEditHandler}>{listDescription}</p>
          <button onClick={deleteList}>Delete List</button>
        </div>
      );
    } else {
      return (
        <div>
          <h3>{listName}</h3>
          <form onSubmit={this.onSubmitHandler(listId, listDescriptionInput)}>
            <input
              value={listDescriptionInput}
              name="listDescriptionInput"
              onChange={this.onChangeHandler}
            />
            <button>Submit</button>
          </form>
          <button onClick={this.cancelEditHandler}>Cancel</button>
        </div>
      );
    }
  }
}

export default List;
