import React, { Component } from "react";
import HorizontalNav from "../Horizontal Nav/Horizontal Nav.js";
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <HorizontalNav currPage={this.props.currPage}/>
      </div>
    );
  }
}
