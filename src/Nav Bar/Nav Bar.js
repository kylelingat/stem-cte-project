import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserGraduate,
  faBrain
} from "@fortawesome/free-solid-svg-icons";
import "./Nav Bar.css";

export default class NavBar extends Component {
  //pageSwitchHandler is located in Main Wrap.js (parent element)


  render() {
    let homeActive = ["navBarItem"]
    let studentActive = ["navBarItem"]
    let behaviorActive = ["navBarItem"]
    let dbTestActive = ["navBarItem"]
    if(this.props.state.currPage === "home"){
      homeActive = ["navBarItem", "navActive"].join(' ');
    } else if (this.props.state.currPage === "students"){
      studentActive = ["navBarItem", "navActive"].join(' ');
    } else if (this.props.state.currPage === "behaviors"){
      behaviorActive = ["navBarItem", "navActive"].join(' ');
    } else if (this.props.state.currPage === "db-test"){
      dbTestActive = ["navBarItem", "navActive"].join(' ');
    }
    return (
      <ul className="navBar">
        <li
          className={homeActive}
          onClick={this.props.pageSwitchHandler.bind(this, "home")}
        >
                <i className="menu-icon">
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon></i>
        </li>
        <li
          className={studentActive}
          onClick={this.props.pageSwitchHandler.bind(this, "students")}
        >
                <i className="menu-icon"><FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon></i>
        </li>
        <li
          className={behaviorActive}
          onClick={this.props.pageSwitchHandler.bind(this, "behaviors")}
        >
                <i className="menu-icon"><FontAwesomeIcon icon={faBrain}></FontAwesomeIcon></i>
        </li>
      </ul>
    );
  }
}
