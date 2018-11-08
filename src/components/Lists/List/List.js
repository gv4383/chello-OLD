import React, { Component } from "react";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editName: false,
      editDescription: false,
      listNameInput: this.props.listName,
      listDescriptionInput: this.props.listDescription
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

  // Allows editing on a list's desccription
  toggleEditDescriptionHandler = () => {
    this.setState({ editDescription: true });
  };

  // Sets editing to false
  cancelEditHandler = () => {
    this.setState({
      editName: false,
      editDescription: false
    });
  };

  // Curry submit handler so that it can take additional arguments (id and description)
  onSubmitHandler = (id, body) => event => {
    // Prevents page from reloading everytime a submit occurs
    event.preventDefault();

    if (event.target.name === "editNameInput") {
      // Calls editName function from props
      this.props.editListName(id, body);

      // Sets editing state back to false
      this.setState({ editName: false });
    } else if (event.target.name === "editDescriptionInput") {
      // Calls editDescription function from props
      this.props.editDescription(id, body);

      // Sets editing state back to false
      this.setState({ editDescription: false });
    }
  };

  render() {
    const { deleteList, listId, listName, listDescription } = this.props;
    const {
      editName,
      editDescription,
      listNameInput,
      listDescriptionInput
    } = this.state;

    if (!editDescription && !editName) {
      return (
        <div className="individual-list">
          <h3 onClick={this.toggleEditNameHandler}>{listName}</h3>
          <p onClick={this.toggleEditDescriptionHandler}>{listDescription}</p>
          <button onClick={deleteList}>Delete List</button>
        </div>
      );
    } else if (editName) {
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
          <p>{listDescription}</p>
        </div>
      );
    } else if (editDescription) {
      return (
        <div className="individual-list">
          <h3>{listName}</h3>
          <form
            name="editDescriptionInput"
            onSubmit={this.onSubmitHandler(listId, listDescriptionInput)}
          >
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
