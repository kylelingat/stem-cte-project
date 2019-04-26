import React, { Component } from "react";
import HorizontalNav from "../Horizontal Nav/Horizontal Nav.js";

export default class Behaviors extends Component {
  render() {
    return (
      <div className="behaviorsContainer">
        <HorizontalNav currPage={this.props.currPage} />
      </div>
    );
  }
}
