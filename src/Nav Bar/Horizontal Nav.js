import React, { Component } from "react";
import "./Horizontal Nav.css";
import Home from "../Home/Home.js";
import Students from "../Students/Students.js";
import Behaviors from "../Behaviors/Behaviors.js";

export default class HorizontalNav extends Component {
  constructor(props) {
    super(props);
  }

  pageSwitchHandler = (t) => {
    console.log(t);
  };

  render() {
    let currPageHeader;
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
          <li onClick={this.pageSwitchHandler.bind(this, 'bleh')}>Student Database</li>
          <li onClick={this.pageSwitchHandler.bind(this, 'blesaashhh')}>Add Students</li>
        </ul>
      );
    } else if (this.props.currPage === "behaviors") {
      horNavBarList = (
        <ul>
          <li>Studeasdasdnt Database</li>
          <li>Add Studeasdasnts</li>
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
