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
        <a className="nav-link">
                <i className="menu-icon">
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon></i>
                <span className="menu-title">Home</span>
                <i className="menu-arrow"></i>
              </a>
        </li>
        <li
          className={studentActive}
          onClick={this.props.pageSwitchHandler.bind(this, "students")}
        >
        <a className="nav-link">
                <i className="menu-icon"><FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon></i>
                <span className="menu-title">Students</span>
                <i className="menu-arrow"></i>
              </a>
        </li>
        <li
          className={behaviorActive}
          onClick={this.props.pageSwitchHandler.bind(this, "behaviors")}
        >
                <a className="nav-link">
                <i className="menu-icon"><FontAwesomeIcon icon={faBrain}></FontAwesomeIcon></i>
                <span className="menu-title">Behaviors</span>
                <i className="menu-arrow"></i>
              </a>
        </li>
        <li
          className={dbTestActive}
          onClick={this.props.pageSwitchHandler.bind(this, "db-test")}
        >
                <a className="nav-link">
                <i className="menu-icon"><FontAwesomeIcon icon={faBrain}></FontAwesomeIcon></i>
                <span className="menu-title">Database Testing</span>
                <i className="menu-arrow"></i>
              </a>
        </li>
      </ul>
    );
  }
}
