import React, { Component } from "react";
import Lists from "./components/Lists/Lists";

// import "./App.css";
import "./sass/css/main.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>Chello</h1>
        </header>
        <div>
          <Lists />
        </div>
      </div>
    );
  }
}

export default App;
