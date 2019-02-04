import React, { Component } from "react";
import { TableHeader, TableBody } from "./Table.js";
import Modal from "react-modal";
import AddStudents from "./Add Students.js";
import "./Students.css";
import "./Modal Styles.css";

const customStyles = {
  content: {
    padding: "0px",
    display: "grid",
    gridTemplateRows: "20% 80%",
    border: "none",
    background: "none",
    boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.25)"
  }
};

var modalFirstName;
var modalLastName;
var modalGrade;

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
  openModal = index => {
    this.setState({ modalIsOpen: true });
    console.log(this.state.students[index]);
    modalFirstName = this.state.students[index].firstName;
    modalLastName = this.state.students[index].lastName;
    modalGrade = this.state.students[index].grade;
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

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
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modalHeader">
            <h1 className="modalHeaderText">
              Summary for {modalLastName}, {modalFirstName}
            </h1>
            <p className="closeModalButton" onClick={this.closeModal}>&#10006;</p>
          </div>
          <div className="modalContentContainer"></div>
        </Modal>
      </div>
    );
  }
}
