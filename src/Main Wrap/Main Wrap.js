import React, { Component } from "react";
import "./Main Wrap.css";
import NavBar from "../Nav Bar/Nav Bar.js";
import HorizontalNav from '../Nav Bar/Horizontal Nav.js';
import Main from "../Main/Main.js";


export default class MainWrap extends Component {
  state = {
    currPage: localStorage.getItem("currPage")
  };

  

  pageSwitchHandler = (page) => {
    localStorage.setItem("currPage", page);
    this.setState({
      currPage: localStorage.getItem("currPage")
    });
  };

  render() {
    return (
      <div className="mainWrap">
        <NavBar pageSwitchHandler={this.pageSwitchHandler} state={this.state} />
        <Main currPage={this.state.currPage} localState={this.localState} />
      </div>
    );
  }
}
