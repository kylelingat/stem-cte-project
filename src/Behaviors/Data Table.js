import React, { Component } from "react";
import HorizontalNav from "../Horizontal Nav/Horizontal Nav.js";

export default class DataTable extends Component {
  render() {
    return (
      <div className="dataTableContainer">
        <HorizontalNav currPage={this.props.currPage}/>
      </div>
    );
  }
}
