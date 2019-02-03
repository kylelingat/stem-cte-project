import React, { Component } from "react";
import "./Nav Bar.css";

export default class NavBar extends Component {
  //pageSwitchHandler is located in Main Wrap.js (parent element)
  render() {
    return (
      <div className="navBar">
      <div className="navBarItem" onClick={this.props.pageSwitchHandler.bind(this, 'home')} >Home</div>
      <div className="navBarItem" onClick={this.props.pageSwitchHandler.bind(this, 'students')} >Students</div>
      <div className="navBarItem" onClick={this.props.pageSwitchHandler.bind(this, 'behaviors')}>Behavior</div>
      <div className="navBarItem">test</div>
      </div>
    );
  }
}