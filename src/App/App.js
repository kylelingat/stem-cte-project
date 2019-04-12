import React, { Component } from "react";
import NavBar from "../Nav Bar/Nav Bar.js";
import Main from "../Main/Main.js";
import "./App.css";

class App extends Component {
  state = {
    currPage: localStorage.getItem("currPage")
  };

  pageSwitchHandler = (page) => {
    localStorage.setItem("currPage", page);
    this.setState({
      currPage: localStorage.getItem("currPage")
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar pageSwitchHandler={this.pageSwitchHandler} currPage={this.state.currPage} />
        <Main currPage={this.state.currPage} />
      </div>
    );
  }
}

export default App;
