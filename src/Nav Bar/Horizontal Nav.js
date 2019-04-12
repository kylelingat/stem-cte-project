import React, { Component } from "react";
import "./Horizontal Nav.css";
import Home from "../Home/Home.js";
import Students from "../Students/Students.js";
import Behaviors from "../Behaviors/Behaviors.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faUserMinus,
  faBrain
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import AddStudents from "../Students/Add Students.js"

const addStudModal = {
  content: {
    padding: "0px",
    height: "400px",
    width: "400px",
    border: "none",
    background: "blue",
    boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.25)"
  }
};

export default class HorizontalNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addStudentModal: false,
    };
  }

  openAddStudModal = () => {
    this.setState({ addStudentModal: true });
  }
  closeAddStudModal = () => {
    this.setState({ addStudentModal: false });
  };

  render() {
    let currPageHeader;
    let currSecBorder;
    let rightNav;

    if (this.props.currPage === "home") {
      currPageHeader = "Home";
    } else if (this.props.currPage === "students") {
      currPageHeader = "Students";
    } else if (this.props.currPage === "behaviors") {
      currPageHeader = "Behaviors";
    }

    let horNavBarList;
    if (this.props.currPage === "home") {
      horNavBarList = (
        <ul>
          <li>Student Databasdasase</li>
          <li>Add Stuasdadsdents</li>
        </ul>
      );
    } else if (this.props.currPage === "students") {
      horNavBarList = (
        <ul>
          {/* <li
            className={
              this.props.currStudentSection === "addStudents"
                ? "secBorder"
                : null
            }
            onClick={this.props.secSwitch.bind(this, "addStudents")}
          >
            Add Students
          </li> */}
          <li
            className={
              this.props.currStudentSection === "database" ? "secBorder" : null
            }
            onClick={this.props.secSwitch.bind(this, "database")}
          >
            Student Database
          </li>
        </ul>
      );

      rightNav = (
        <div className="rightNavGrid">
          <i className="menu-icon">
            <FontAwesomeIcon icon={faUserPlus} onClick={this.openAddStudModal}  />
          </i>
          <i className="menu-icon">
            <FontAwesomeIcon icon={faUserMinus} />
          </i>
        </div>
      );
    } else if (this.props.currPage === "behaviors") {
      horNavBarList = (
        <ul>
          <li>Input Behaviors</li>
          <li>Behavior Table</li>
        </ul>
      );
    }
    return (
      <div className="horNavBar">
        <div className="horNavBar--wrapper">
          <div className="currPageHeader">
            {currPageHeader}
            <div className="rightNav">{rightNav}</div>
          </div>

          <div className="horNavBar--list">{horNavBarList}</div>
        </div>
        <Modal
          contentLabel="Example Modal"
          isOpen={this.state.addStudentModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeAddStudModal}
          style={addStudModal}
        >
        <AddStudents             retrieveStudents={this.props.retrieveStudents}/>
        </Modal>
      </div>
    );
  }
}
