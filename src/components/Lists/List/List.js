import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { deleteList, listName, listDescription } = this.props;

    return (
      <div>
        <h3 onClick={deleteList}>{listName}</h3>
        <p>{listDescription}</p>
      </div>
    );
  }
}

export default List;
