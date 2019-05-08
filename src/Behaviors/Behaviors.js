import React, { Component } from "react";
import HorizontalNav from "../Horizontal Nav/Horizontal Nav.js";

export default class Behaviors extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="behaviorsContainer">
        <HorizontalNav currPage={this.props.currPage} pageSwitchHandler={this.props.pageSwitchHandler} />
      </div>
    );
  }
}
