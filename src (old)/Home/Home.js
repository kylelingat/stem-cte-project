import React, { Component } from "react";
import "./Home.css";
import _ from "lodash";
import Datasheet from "react-datasheet";
import Select from "react-select";
import "react-datasheet/lib/react-datasheet.css";



export default class Home extends Component {
  grabData = () => {
    console.log(this.state.grid);
    this.setState({
      entries: this.state.entries + 1,
      grid: [
        ...this.state.grid,
        [
          { readOnly: true, value: this.state.entries },
          { value: 1 },
          { value: 3 },
          { value: 3 },
          { value: 3 },
          { value: 4 },
          { value: 5 }
        ]
      ]
    });
  };


  constructor(props) {
    super(props);
    this.state = {
      entries: 1,
      grid: [
        [
          { readOnly: true, value: "" },
          { value: "Timestamp", readOnly: true },
          { value: "Goal", readOnly: true },
          { value: "Outcome", readOnly: true },
          { value: "If inappropriate, prompting needed?", readOnly: true },
          { value: "Comment", readOnly: true },
          { value: "% of appropriateness", readOnly: true }
        ]
      ]
    };
  }

  
  render() {
    return (
      <div className="behaviorsContainer">
        <Datasheet
          data={this.state.grid}
          valueRenderer={cell => cell.value}
          onContextMenu={(e, cell, i, j) =>
            cell.readOnly ? e.preventDefault() : null
          }
          onCellsChanged={changes => {
            const grid = this.state.grid.map(row => [...row]);
            changes.forEach(({ cell, row, col, value }) => {
              grid[row][col] = { ...grid[row][col], value };
            });
            this.setState({ grid });
          }}
        />
        <div onClick={this.grabData}>test</div>
        
      </div>
    );
  }
}

