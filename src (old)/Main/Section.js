import React, { Component } from "react";
import DbTest from "../Students/Students.js";
import AddStudents from "../Students/Add Students.js";

export default class Section extends Component {
  render() {
    let currSection;
    if (this.props.currStudentSection === "database") {
      currSection = <DbTest retrieveStudents={this.props.retrieveStudents} />;
    } else if (this.props.currStudentSection === "addStudents") {
      currSection = <AddStudents />;
    }
    return <div className="contentContainer">{currSection}</div>;
  }
}
