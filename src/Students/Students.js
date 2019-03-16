import React, { Component } from "react";
import RemoveStudentModal from "./Remove.js";
import StudentModal from "./Student Modal.js";
import "./db.css";
import axios from "axios";
import Modal from "react-modal";
import ReactTable from "react-table";
import AddStudents from "../Students/Add Students.js";
import "react-table/react-table.css";
import "./Students.css";
import "./Modal Styles.css";


var students;

const studentModal = {
  content: {
    padding: "0px",
    height: "400px",
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
export default class DbTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: students,
      modalIsOpen: false,
      modalStudent: {},
      modalLoading: false,
      isRemoveModalOpen: false
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
    this.retrieveStudents();
  };

  retrieveStudents = () => {
    axios
      .get(`https://v4pq771b89.execute-api.us-west-2.amazonaws.com/dev/get`)
      .then(res => {
        students = res.data.message.rows;
        this.setState({
          students: students
        });
      });
  };

  deleteStudent = () => {
    this.modalLoading()
    axios
      .delete(
        "https://v4pq771b89.execute-api.us-west-2.amazonaws.com/dev/delete",
        {
          data: {
            student_id: this.state.modalStudent.studId
          }
        }
      )
      .then(response => {
        console.log(response);
        this.setState({ isRemoveModalOpen: false });
        this.modalLoading()
        this.retrieveStudents();
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  openRemoveHandler = () => {
    this.setState({
      modalIsOpen: false,
      isRemoveModalOpen: true
    });
  };

  cancelRemoveHandler = () => {
    this.setState({
      isRemoveModalOpen: false
    });
    console.log('t')
  };

  onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: e => {
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

  modalLoading = () => {
    if (this.state.modalLoading === false) {
      this.setState({
        modalLoading: true
      });
    } else if (this.state.modalLoading === true) {
      this.setState({
        modalLoading: false
      });
    }
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
        <div className="reactTableContainer">
          <ReactTable
            data={this.state.students}
            columns={columns}
            defaultPageSize={10}
            showPaginationBottom={false}
            className="dbTable"
            resizable={false}
            getTrProps={this.onRowClick}
            loading={this.state.modalLoading}
          />
        </div>
        <Modal
          contentLabel="Example Modal"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeStudProfHandler}
          style={studentModal}
        >
        <StudentModal
        modalStudent={this.state.modalStudent}
        openRemoveHandler={this.openRemoveHandler}
        closeStudProfHandler={this.closeStudProfHandler}
        ></StudentModal>
        </Modal>

        <Modal
          isOpen={this.state.isRemoveModalOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.cancelRemoveHandler}
          style={removeStudentModal}
          modalStudent={this.state.modalStudent}
        >
          <RemoveStudentModal 
          deleteStudent={this.deleteStudent}
          onRequestClose={this.cancelRemoveHandler}
          modalStudent={this.state.modalStudent}
          />
        </Modal>
      </div>
    );
  }
}
