import React, { Component } from "react";
import logo from "./logo.svg";
import Lists from "./components/Lists/Lists";

// import "./App.css";
import "./sass/css/main.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Chello</h1>
        </header>
        <body>
          <Lists />
        </body>
      </div>
    );
  }
}

export default App;
