import React, { Component } from "react";
import { TableHeader, TableBody } from "./Table.js";
import AddStudents from "./Add Students.js";
import "./Students.css";

var testObj = {
  firstName: "John",
  lastName: "Smith",
  grade: "12"
};

var testArray = [];

var retrieveArray = localStorage.getItem("test");
console.log(retrieveArray);

export default class Students extends Component {
  state = {
    students: JSON.parse(retrieveArray)
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
    testArray.push(students);
    window.localStorage.setItem("test", JSON.stringify(testArray));
    retrieveArray = localStorage.getItem("test");
    this.setState({ students: JSON.parse(retrieveArray) }, () => {
      console.log(testArray);
    });
  };

  render() {
    return (
      <div className="studentsContainer">
        <AddStudents
          handleSubmit={this.handleSubmit}
          saveState={this.saveState}
        />
        <div className="studentsTable">
          <table>
            <TableHeader />
            <TableBody
              students={this.state.students}
              removeStudents={this.removeStudents}
            />
          </table>
        </div>
      </div>
    );
  }
}
