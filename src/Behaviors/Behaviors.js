import React, { Component } from "react";
import HorizontalNav from "../Horizontal Nav/Horizontal Nav.js";
import InputBehaviors from "./Input.js"
import DataTable from './Data Table.js'

let section;
export default class Behaviors extends Component {
  constructor(props) {
    super(props)

    this.state = {
      section: null
    }
  }

  sectionSwitchHandler = (section) => {
    this.setState({
      section: section
    })
    console.log('ss')
  }
  render() {
    return (
      <div className="behaviorsContainer">
        <HorizontalNav currPage={this.props.currPage} sectionSwitchHandler={this.sectionSwitchHandler} />
        {this.state.section === "dataTable" ? <DataTable></DataTable> : <InputBehaviors students={this.props.students} studentOptions={this.props.studentOptions} retrieveStudents={this.props.retrieveStudents}></InputBehaviors>}
      </div>
    );
  }
}
