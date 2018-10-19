import React, { Component } from "react";
import axios from "axios";

import List from "./List/List";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }

  componentDidMount = () => {
    axios.get("/api/lists").then(response => {
      this.setState({ lists: response.data });
    });
  };

  render() {
    const { lists } = this.state;

    const displayLists = lists.map((list, i) => {
      return <p key={i}>{list}</p>;
    });

    return (
      <div>
        {/* <List /> */}
        <h2>Lists</h2>
        {displayLists}
      </div>
    );
  }
}

export default Lists;
