import React, { Component } from "react";
import "./Horizontal Nav.css";
import Home from "../Home/Home.js";
import Students from "../Students/Students.js";
import Behaviors from "../Behaviors/Behaviors.js";

export default class HorizontalNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currPageHeader;
    let currSecBorder;

    if (this.props.currPage === "home") {
      currPageHeader = "Home";
    } else if (this.props.currPage === "students") {
      currPageHeader = "Students";
    } else if (this.props.currPage === "behaviors") {
      currPageHeader = "Behaviors";
    }

    let horNavBarList;
    if (this.props.currPage === "home") {
      horNavBarList = (
        <ul>
          <li>Student Databasdasase</li>
          <li>Add Stuasdadsdents</li>
        </ul>
      );
    } else if (this.props.currPage === "students") {
      horNavBarList = (
        <ul>
          <li
            className={
              this.props.currStudentSection === "addStudents"
                ? "secBorder"
                : null
            }
            onClick={this.props.secSwitch.bind(this, "addStudents")}
          >
            Add Students
          </li>
          <li
            className={
              this.props.currStudentSection === "database" ? "secBorder" : null
            }
            onClick={this.props.secSwitch.bind(this, "database")}
          >
            Student Database
          </li>
        </ul>
      );
    } else if (this.props.currPage === "behaviors") {
      horNavBarList = (
        <ul>
          <li>Input Behaviors</li>
          <li>Behavior Table</li>
        </ul>
      );
    }
    return (
      <div className="horNavBar">
        <div className="horNavBar--wrapper">
          <div className="currPageHeader">{currPageHeader}</div>
          <div className="horNavBar--list">{horNavBarList}</div>
        </div>
      </div>
    );
  }
}
