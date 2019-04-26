import React, { Component } from "react";

export default class StudentModal extends Component {
  render() {
    return (
      <div className="studentModalContent">
        <div className="modalHeader">
          <h1 className="modalHeaderText">
            Summary for {this.props.modalStudent.lastName},{" "}
            {this.props.modalStudent.firstName}
          </h1>
          <p
            className="closeModalButton"
            onClick={this.props.closeStudProfHandler}
          >
            &#10006;
          </p>
        </div>
        <div className="modalContentContainer">
          {/* <div onClick={this.props.openRemoveHandler}>delete</div> */}
          <div className="studentModalBox">
            <h1>Basic Information</h1>
            <div>
              <table className="basicInfoTable">
                <tbody>
                  <tr>
                    <td className="basicInfoHeaders">First Name:</td>
                    <td>{this.props.modalStudent.firstName}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="basicInfoHeaders">Last Name:</td>
                    <td>{this.props.modalStudent.lastName}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="basicInfoHeaders">Grade Level:</td>
                    <td>{this.props.modalStudent.gradeLevel}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
