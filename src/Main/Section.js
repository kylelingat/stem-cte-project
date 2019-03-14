import React, { Component } from "react";
import DbTest from "../Students/Students.js";

export default class Section extends Component {
  render() {
    let currSection;
    if (this.props.currPage === "students" && this.props.currSection === "addStudents") {
      currSection = <DbTest />;
    }
    return <div className="contentContainer">{currSection}</div>;
  }
}
