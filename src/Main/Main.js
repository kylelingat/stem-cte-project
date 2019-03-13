import React, { Component } from "react";
import "./Main.css";
import Home from "../Home/Home.js";
import Students from "../Students/Students.js";
import Behaviors from "../Behaviors/Behaviors.js";
import HorizontalNav from "../Nav Bar/Horizontal Nav.js";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.currPage === "home") {
      return (
        <div className="mainPageContainer">
          <HorizontalNav currPage={this.props.currPage} />
        </div>
      );
    } else if (this.props.currPage === "students") {
      return (
        <div className="mainPageContainer">
          <HorizontalNav currPage={this.props.currPage} />
        </div>
      );
    } else if (this.props.currPage === "behaviors") {
      return (
        <div className="mainPageContainer">
          <HorizontalNav currPage={this.props.currPage} />
        </div>
      );
    }
    return null;
  }
}
