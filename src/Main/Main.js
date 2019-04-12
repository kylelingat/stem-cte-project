import React, { Component } from "react";
import "./Main.css";
import Home from "../Home/Home.js";
import Students from "../Students/Students.js";
import Behaviors from "../Behaviors/Behaviors.js";

export default class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        {this.props.currPage === "home" ? <Home /> : null}
        {this.props.currPage === "students" ? <Students /> : null}
        {this.props.currPage === "behaviors" ? <Behaviors /> : null}
      </div>
    );
  }
}
