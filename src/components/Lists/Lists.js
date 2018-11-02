import React, { Component } from "react";
import axios from "axios";

import List from "./List/List";

class Lists extends Component {
  constructor(props) {
    super(props);

    // Local State
    this.state = {
      listName: "",
      lists: []
    };
  }

  // Gets list of list names from server and stores in local state
  componentDidMount = () => {
    axios.get("/api/lists").then(response => {
      this.setState({ lists: response.data });
    });
  };

  // Tracks user's input and stores in local state
  onChangeHandler = event => {
    this.setState({ listName: event.target.value });
  };

  // Adds a new list name to the list of list names in server
  addList = () => {
    axios
      .post("/api/lists", { listName: this.state.listName })
      .then(response => {
        this.setState({
          lists: response.data
        });
      });
  };

  // Edits the list's description
  editListDescription = (id, description) => {
    axios.put(`/api/lists/${id}`, { description }).then(response => {
      this.setState({
        lists: response.data
      });
    });
  };

  // Deletes a list
  deleteList = id => {
    axios.delete(`/api/lists/${id}`).then(response => {
      this.setState({
        lists: response.data
      });
    });
  };

  // Allows user to submit new list name by pressing enter
  onSubmitHandler = event => {
    // Prevents page from reloading everytime a submit occurs
    event.preventDefault();

    this.addList();

    // resets local user input state
    this.setState({
      listName: ""
    });
  };

  render() {
    const { lists } = this.state;

    // Iterates through lists array in local state and renders a List component
    const displayLists = lists.map(list => {
      return (
        <div key={list.id}>
          <List
            listId={list.id}
            deleteList={() => this.deleteList(list.id)}
            listName={list.listName}
            listDescription={list.description}
            editDescription={this.editListDescription}
          />
        </div>
      );
    });

    return (
      <div>
        <h2>Lists</h2>
        <form onSubmit={this.onSubmitHandler}>
          <input
            placeholder="Create a new list!"
            value={this.state.listName}
            onChange={this.onChangeHandler}
          />
          <button>Create!</button>
        </form>
        {displayLists}
      </div>
    );
  }
}

export default Lists;
