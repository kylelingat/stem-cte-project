import React, { Component } from "react";
import "./Main.css";
import Home from "../Home/Home.js";
import Students from "../Students/Students.js";
import Behaviors from "../Behaviors/Behaviors.js";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="mainContainer">
        {this.props.currPage === "home" ? (
          <Home currPage={this.props.currPage} />
        ) : null}
        {this.props.currPage === "students" ? (
          <Students
            currPage={this.props.currPage}
            students={this.props.students}
            retrieveStudents={this.props.retrieveStudents}
          />
        ) : null}
        {this.props.currPage === "behaviors" ? (
          <Behaviors
            currPage={this.props.currPage}
            // students={this.state.students}
          />
        ) : null}
      </div>
    );
  }
}
