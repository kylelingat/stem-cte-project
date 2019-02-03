import React from "react";

export const TableHeader = () => {
  return (
      <thead className="currStudents--head">
        <tr className="currStudents--tableHeading">
          <th>First Name</th>
          <th>Last Name</th>
          <th>Grade</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

  );
};

export const TableBody = props => {
  const rows = props.students.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.firstName}</td>
        <td>{row.lastName}</td>
        <td>{row.grade}</td>
        <td>View Profile</td>
        <td className="currStudents--removeStudent">
          <div onClick={() => props.removeStudents(index)} >&#10006;</div>
        </td>
      </tr>
    );
  });

  return <tbody className="currStudents--body">{rows}</tbody>;
};
