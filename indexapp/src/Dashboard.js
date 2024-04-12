import React from 'react';

const Dashboard = ({ userName, employeeData }) => {
  return (
    <div className="dashboard">
      <h2>Welcome, {userName}</h2>
      <div className="summary-container">
        {/* Add summary widgets here based on employeeData */}
        {employeeData && (
          <>
            <div className="summary-card">
              <h3>Total Employees</h3>
              <p>{employeeData.length}</p>
            </div>
            {/* Add more widgets for other data like recent hires etc. */}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;