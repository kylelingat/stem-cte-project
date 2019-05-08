import React, { Component } from "react";
import "./Main.css";
import Home from "../Home/Home.js";
import Students from "../Students/Students.js";
import Behaviors from "../Behaviors/Behaviors.js";
import DataTable from "../Behaviors/Data Table.js";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    if (this.props.currPage === "home") {
      return (
        <div className="mainContainer"><Home currPage={this.props.currPage} /></div>
      )
    } else if (this.props.currPage === "students") {
      return (
        <div className="mainContainer">
          <Students
            currPage={this.props.currPage}
            students={this.props.students}
            retrieveStudents={this.props.retrieveStudents}
          /></div>
      )
    } else if (this.props.currPage === "behaviors") {
      return (
        <div className="mainContainer">
          <Behaviors
            currPage={this.props.currPage}
            pageSwitchHandler={this.props.pageSwitchHandler}
          />
        </div>
      )
    } else if (this.props.currPage === "dataTable") {
      return (
        <div className="mainContainer">
        hello
        </div>
      )
    } else return null;

    // return (
    //   <div className="mainContainer">
    //     {this.props.currPage === "home" ? (
    //       <Home currPage={this.props.currPage} />
    //     ) : null}
    //     {this.props.currPage === "students" ? (
    // <Students
    //   currPage={this.props.currPage}
    //   students={this.props.students}
    //   retrieveStudents={this.props.retrieveStudents}
    // />
    //     ) : null}
    //     {this.props.currPage === "behaviors" ? (
    // <Behaviors
    //   currPage={this.props.currPage}
    //   pageSwitchHandler={this.props.pageSwitchHandler}
    // />
    //     ) : null}
    //     {this.props.currPage === "dataTable" ? (
    //       <h1>aaaaaaaaaaaa</h1>
    //     ) : null}
    //   </div>
    // );
  }
}
