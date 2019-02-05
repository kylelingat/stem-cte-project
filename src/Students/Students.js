import React, { Component } from "react";
import { TableHeader, TableBody } from "./Table.js";
import Modal from "react-modal";
import AddStudents from "./Add Students.js";
import "./Students.css";
import "./Modal Styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
library.add(faExclamation);
var modalFirstName;
var modalLastName;
var modalGrade;
var indexToRemove;

const studentModal = {
  content: {
    padding: "0px",
    display: "grid",
    gridTemplateRows: "20% 80%",
    border: "none",
    background: "none",
    boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.25)"
  }
};

const removeStudentModal = {
  content: {
    padding: "0px",
    top: "140px",
    border: "none",
    width: "450px",
    height: "395px",
    background: "none",
    boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.25)",
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: "0",
    right: "0"
  }
};

Modal.setAppElement("#root");
export default class Students extends Component {
  constructor(props) {
    super(props);
    this.openViewProfileModal = this.openViewProfileModal.bind(this);
    this.state = {
      students: JSON.parse(localStorage.getItem("studentArray") || "[]"),
      hasArray: localStorage.getItem("hasStudentArray"),
      modalIsOpen: false,
      removeDialogOpen: false
    };
  }

  openViewProfileModal = index => {
    this.setState({ modalIsOpen: true });
    console.log(this.state.students[index]);
    modalFirstName = this.state.students[index].firstName;
    modalLastName = this.state.students[index].lastName;
    modalGrade = this.state.students[index].grade;
  };

  closeViewProifleModal = () => {
    this.setState({ modalIsOpen: false });
  };

  openRemoveStudModal = index => {
    this.setState({
      removeDialogOpen: true
    });
    indexToRemove = index;
    modalFirstName = this.state.students[index].firstName;
    modalLastName = this.state.students[index].lastName;
    modalGrade = this.state.students[index].grade;
  };

  cancelRemoveHandler = () => {
    this.setState({
      removeDialogOpen: false
    });
  };

  removeStudents = index => {
    var retrieveStudArr = JSON.parse(localStorage.getItem("studentArray"));
    retrieveStudArr.splice(index, 1);
    localStorage.setItem("studentArray", JSON.stringify(retrieveStudArr));
    const { students } = this.state;
    this.setState({
      students: students.filter((character, i) => {
        return i !== index;
      }),
      removeDialogOpen: false
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
              removeStudents={this.openRemoveStudModal}
              openModal={this.openViewProfileModal}
            />
          </table>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeViewProifleModal}
          style={studentModal}
          contentLabel="Example Modal"
        >
          <div className="modalHeader">
            <h1 className="modalHeaderText">
              Summary for {modalLastName}, {modalFirstName}
            </h1>
            <p
              className="closeModalButton"
              onClick={this.closeViewProifleModal}
            >
              &#10006;
            </p>
          </div>
          <div className="modalContentContainer" />
        </Modal>

        <Modal
          isOpen={this.state.removeDialogOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.cancelRemoveHandler}
          style={removeStudentModal}
          contentLabel="Example Modal"
        >
          <div className="removeStudentModal">
            <div className="rsm-centerContainer">
              <div className="rsm-exclamationIcon">
                <FontAwesomeIcon icon={faExclamation} />
              </div>
            </div>
            <div className="rsm-confirmText">
              <h1>Are you sure?</h1>
              <h2>
                Remove {modalLastName}, {modalFirstName}
              </h2>
            </div>
            <div className="rsm-buttonBar">
              <div
                onClick={this.cancelRemoveHandler}
                className="rsm-buttons rsm-cancel"
              >
                Cancel
              </div>
              <div
                onClick={this.removeStudents.bind(this, indexToRemove)}
                className="rsm-buttons rsm-remove"
              >
                Remove
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
