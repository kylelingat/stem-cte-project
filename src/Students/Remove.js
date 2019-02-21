import React, { Component } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";



  
export default class RemoveStudentModal extends Component {
  render() {
    return (
          <div className="removeStudentModal">
            <div className="rsm-centerContainer">
              <div className="rsm-exclamationIcon">
                <FontAwesomeIcon icon={faExclamation} />
              </div>
            </div>
            <div className="rsm-confirmText">
              <h1>Are you sure?</h1>
              <h2>
                Remove {this.props.modalStudent.lastName}, {this.props.modalStudent.firstName}
              </h2>
            </div>
            <div className="rsm-buttonBar">
              <div
                className="rsm-buttons rsm-cancel"
                onClick={this.props.onRequestClose}
              >
                Cancel
              </div>
              <div
                className="rsm-buttons rsm-remove"
                onClick={this.props.deleteStudent}
              >
                Remove {this.props.modalStudent.firstName}
              </div>
            </div>
          </div>
    );
  }
}
