import React, { Component } from "react";
import "./Horizontal Nav.css";
import Modal from "react-modal";
import AddStudents from "../Students/Add Students.js";

Modal.setAppElement("#root");

export default class HorizontalNav extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let navList;
    if (this.props.currPage === "home") {
      navList = (
        <div className="horNavWrap">
          <h1>Home</h1>
          <ul className="horNavUl">
            <li>Home</li>
          </ul>
        </div>
      );
    } else if (this.props.currPage === "students") {
      navList = (
        <div className="horNavWrap horNavStudents">
          <h1>Students</h1>
          <div className="studentButtonsNavContainer">
            <div
              className="studentButtonsNav"
              onClick={this.props.addStudModalHandler}
            >
              Add
            </div>
            <Modal
              contentLabel="Example Modal"
              isOpen={this.props.addStudModal}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.props.addStudModalHandler}
            >
              <AddStudents retrieveStudents={this.props.retrieveStudents} />
            </Modal>
            <div
              className="studentButtonsNav"
              onClick={this.props.delModeHandler}
            >
              {this.props.delModeState === false ? "Del" : "Cancel"}
            </div>
          </div>
          <ul className="horNavUl">
            <li>Students</li>
          </ul>
        </div>
      );
    } 
    else if (this.props.currPage === "behaviors") {
      navList = (
        <div className="horNavWrap">
          <h1>Behaviors</h1>
          <ul className="horNavUl">
            <li>Behaviors</li>
            <li onClick={this.props.sectionSwitchHandler.bind(this, 'dataTable')}>Table</li>
          </ul>
        </div>
      );
    } 
    return <div>{navList}</div>;
  }
}
