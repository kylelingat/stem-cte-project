import React, { Component } from "react";
import { TableHeader, TableBody } from "./Table.js";
import Modal from "react-modal";
import AddStudents from "./Add Students.js";
import "./Students.css";

Modal.setAppElement("#root");
export default class Students extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.state = {
      students: JSON.parse(localStorage.getItem("studentArray") || "[]"),
      hasArray: localStorage.getItem("hasStudentArray"),
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  removeStudents = index => {
    var retrieveStudArr = JSON.parse(localStorage.getItem("studentArray"));
    retrieveStudArr.splice(index, 1);
    localStorage.setItem("studentArray", JSON.stringify(retrieveStudArr));
    const { students } = this.state;
    this.setState({
      students: students.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = students => {
    var studentArray = JSON.parse(localStorage.getItem("studentArray") || "[]");

    studentArray.push(students);
    localStorage.setItem("studentArray", JSON.stringify(studentArray));
    this.setState({
      students: JSON.parse(localStorage.getItem("studentArray") || "[]")
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
              openModal={this.openModal}
            />
          </table>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>
      </div>
    );
  }
}
