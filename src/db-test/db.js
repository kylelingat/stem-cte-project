import React, { Component } from "react";
import "./db.css";
import axios from "axios";
import Modal from "react-modal";
import ReactTable from "react-table";
import AddStudents from "../Students/Add Students.js"
import "react-table/react-table.css";
var students;

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

Modal.setAppElement("#root");
export default class DbTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: students,
      modalIsOpen: false,
      modalStudent: {}
    };
  }

  openStudProfHandler = () => {
    this.setState({ modalIsOpen: true });
  };

  closeStudProfHandler = () => {
    this.setState({ modalIsOpen: false });
    this.setState({ modalStudent: {} });
  };

  componentDidMount = () => {
    axios
      .get(`https://v4pq771b89.execute-api.us-west-2.amazonaws.com/dev/get`)
      .then(res => {
        students = res.data.message.rows;
        this.setState({
          students: students
        });
      });
  };

  onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: e => {
        console.log(rowInfo);
        this.setState({ modalIsOpen: true });
        this.setState({
          modalStudent: {
            firstName: rowInfo.original.first_name,
            lastName: rowInfo.original.last_name,
            gradeLevel: rowInfo.original.grade_level,
            studId: rowInfo.original.student_id
          }
        });
      }
    };
  };

  render() {
    const columns = [
      {
        Header: "First Name",
        accessor: "first_name"
      },
      {
        Header: "Last Name",
        accessor: "last_name"
      },
      {
        Header: "Grade",
        accessor: "grade_level"
      }
    ];

    return (
      <div className="dbTestContainer">
        <div className="addStudentsContainer">
        <AddStudents />
        </div>
        <div className="reactTableContainer">
          <ReactTable
            data={this.state.students}
            columns={columns}
            defaultPageSize={10}
            showPaginationBottom={false}
            className="dbTable"
            resizable={false}
            getTrProps={this.onRowClick}
          />
        </div>
        <Modal
          contentLabel="Example Modal"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeStudProfHandler}
          style={studentModal}
        >
          <div className="modalHeader">
            <h1 className="modalHeaderText">
              Summary for {this.state.modalStudent.lastName},{" "}
              {this.state.modalStudent.firstName}
            </h1>
            <p className="closeModalButton" onClick={this.closeStudProfHandler}>
              &#10006;
            </p>
          </div>
          <div className="modalContentContainer" />
        </Modal>
      </div>
    );
  }
}
