import React from 'react';

const EmployeeDetails = ({ employee }) => {
  if (!employee) {
    return <p>Loading employee details...</p>;
  }

  return (
    <div className="employee-details">
      <h2>Employee Details</h2>
      <ul>
        <li>Name: {employee.name}</li>
        <li>Email: {employee.email}</li>
        <li>ID: {employee.id}</li>
        {/* Add more list items for other employee details */}
      </ul>
    </div>
  );
};

export default EmployeeDetails;