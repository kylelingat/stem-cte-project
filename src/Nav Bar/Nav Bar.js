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
    return (
      <ul className="navBar">
        <li
          className="navBarItem"
          onClick={this.props.pageSwitchHandler.bind(this, "home")}
        >
        <a><i></i>Home</a>
        </li>
        <li
          className="navBarItem"
          onClick={this.props.pageSwitchHandler.bind(this, "students")}
        >
        <a><i></i>Students</a>
        </li>
        <li
          className="navBarItem"
          onClick={this.props.pageSwitchHandler.bind(this, "behaviors")}
        >
        <a><i></i>Behaviors</a>
        </li>
      </ul>
    );
  }
}
