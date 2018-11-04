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
    axios.post("/api/lists").then(response => {
      this.setState({
        lists: response.data
      });
    });
  };

  // Edits the list's name
  editListName = (id, listName) => {
    axios.put(`/api/lists/name/${id}`, { listName }).then(response => {
      this.setState({
        lists: response.data
      });
    });
  };

  // Edits the list's description
  editListDescription = (id, description) => {
    axios
      .put(`/api/lists/description/${id}`, { description })
      .then(response => {
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

  // Executes when a button is clicked
  onClickHandler = () => {
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
            editListName={this.editListName}
            editDescription={this.editListDescription}
          />
        </div>
      );
    });

    return (
      <div>
        <h2>Lists</h2>
        <button onClick={this.onClickHandler}>Add New List!</button>
        {displayLists}
      </div>
    );
  }
}

export default Lists;
