import React, { Component } from "react";
import "./Nav Bar.css";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            currPage: this.props.currPage
        };
      }

      
  render() {
    return (
      <ul className="navBar">
        <li onClick={this.props.pageSwitchHandler.bind(this, "home")}>Home</li>
        <li onClick={this.props.pageSwitchHandler.bind(this, "students")}>Students</li>
        <li onClick={this.props.pageSwitchHandler.bind(this, "behaviors")}>Behaviors</li>
      </ul>
    );
  }
}
