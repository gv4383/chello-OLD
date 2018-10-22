import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { click, listName, listDescription } = this.props;

    return (
      <div>
        <h3 onClick={click}>{listName}</h3>
        <p>{listDescription}</p>
      </div>
    );
  }
}

export default List;
