import React, { Component } from "react";
import "./Nav Bar.css";

export default class NavBar extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }



  render() {
    return (
      <div className="navBar">
      <div className="navBarItem" onClick={this.props.pageSwitchHandler.bind(this, 'home')} >Home</div>
      <div className="navBarItem" onClick={this.props.pageSwitchHandler.bind(this, 'students')} >Students</div>
      <div className="navBarItem">Data</div>
      <div className="navBarItem">test</div>
      </div>
    );
  }
}
