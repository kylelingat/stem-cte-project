import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import StudentModal from "./Student Modal.js";
import RemoveStudentModal from "./Del Modal.js";
import Modal from "react-modal";

import HorizontalNav from "../Horizontal Nav/Horizontal Nav.js";

export default class Students extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    delMode: false,
    delStudModal: false,
    addStudModal: false,
    studInfoModal: false
  };

  addStudModalHandler = () => {
    this.setState({ addStudModal: !this.state.addStudModal });
  };

  delModeHandler = () => {
    this.setState({ delMode: !this.state.delMode });
  };

  delStudModalHandler = () => {
    this.setState({ delStudModal: !this.state.delStudModal });
  };

  closeStudProfHandler = () => {
    this.setState({ studInfoModal: false });
    this.setState({ modalStudent: {} });
  };

  onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: e => {
        this.setState({
          modalStudent: {
            firstName: rowInfo.original.first_name,
            lastName: rowInfo.original.last_name,
            gradeLevel: rowInfo.original.grade_level,
            studId: rowInfo.original.student_id
          }
        });
        if (this.state.delMode === false) {
          this.setState({ studInfoModal: true });
        } else if (this.state.delMode === true) {
          console.log("del", rowInfo.original.student_id);
          this.delStudModalHandler();
        }
      }
    };
  };

  deleteStudent = () => {
    // this.modalLoading()
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
        this.setState({ delStudModal: false });
        // this.modalLoading()
        this.props.retrieveStudents();
      })
      .catch(function(error) {
        console.log(error);
      });
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
      <div className="studentsContainer">
        <HorizontalNav
          currPage={this.props.currPage}
          retrieveStudents={this.props.retrieveStudents}
          addStudModal={this.state.addStudModal}
          addStudModalHandler={this.addStudModalHandler}
          delModeHandler={this.delModeHandler}
          delModeState={this.state.delMode}
        />
        <div className="studentInformation">
          <ReactTable
            data={this.props.students}
            columns={columns}
            defaultPageSize={20}
            showPaginationBottom={false}
            className="dbTable"
            resizable={false}
            getTrProps={this.onRowClick}
            // loading={this.state.modalLoading}
          />
          <Modal
            contentLabel="Example Modal"
            isOpen={this.state.studInfoModal}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeStudProfHandler}
          >
            <StudentModal
              modalStudent={this.state.modalStudent}
              openRemoveHandler={this.openRemoveHandler}
              closeStudProfHandler={this.closeStudProfHandler}
            />
          </Modal>
          <Modal
            isOpen={this.state.delStudModal}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.delStudModalHandler}
            // style={removeStudentModal}
            modalStudent={this.state.modalStudent}
          >
            <RemoveStudentModal
              deleteStudent={this.deleteStudent}
              onRequestClose={this.delStudModalHandler}
              modalStudent={this.state.modalStudent}
            />
          </Modal>
        </div>
      </div>
    );
  }
}
