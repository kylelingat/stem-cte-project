import React, { Component } from "react";
import { TableHeader, TableBody } from "./Table.js";
import AddStudents from "./Add Students.js";
import "./Students.css";

export default class Students extends Component {
  state = {
    students: []
  };

  removeStudents = index => {
    const { students } = this.state;

    this.setState({
      students: students.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = students => {
    this.setState({students: [...this.state.students, students]});
}

  render() {
    return (
      <div>
        <table>
          <TableHeader />
          <TableBody
            students={this.state.students}
            removeStudents={this.removeStudents}
          />
        </table>
        <AddStudents handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
