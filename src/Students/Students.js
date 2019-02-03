import React, { Component } from "react";
import { TableHeader, TableBody } from "./Table.js";
import AddStudents from "./Add Students.js";
import "./Students.css";

var testObj = {
  firstName: "John",
  lastName: "Smith",
  grade: "12"
};

localStorage.setItem("test", JSON.stringify(testObj));

var saveState;

localStorage.setItem("test1", JSON.stringify(testObj));
saveState = localStorage.getItem("test1");

export default class Students extends Component {
  state = {
    students: [
      JSON.parse(saveState),
      { firstName: "John", lastName: "Smith", grade: "12" },
      { firstName: "John", lastName: "Smith", grade: "12" },
      { firstName: "John", lastName: "Smith", grade: "12" }
    ]
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
    var newStateObj = JSON.parse(saveState);
    testObj.grade = 111;
    console.log(testObj);
    console.log(newStateObj);
    this.setState({ students: [...this.state.students, students] }, () => {
      console.log(...this.state.students);

      // localStorage.setItem("test1", JSON.stringify(this.state));
      // saveState = localStorage.getItem('test1');
      // console.log(JSON.parse(saveState))
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
          <table >
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
