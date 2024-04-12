import React from 'react';

const EmployeeList = ({ employees, onEmployeeClick }) => {
  return (
    <div className="employee-list">
      <h2>Employees</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            {/* Add more headers for other employee details as needed */}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} onClick={() => onEmployeeClick(employee.id)}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              {/* Add more table cells for other employee details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;


// import './App.css';
// // import Product from './Product';
// // import Header from './header';
// import LoginForm from './Login';
// import Dashboard from './Dashboard';
// // import EmployeeList from './EmployeeList';
// import EmployeeDetails from './EmployeeDetails';
// // import {useState} from 'react';
// function App() {
//   // let[naam,setNaam]=useState('Shrac');
//   // function doSomething(data){
//   //     console.log("I am Clicked",data);
//   //   }
//   return(
//     <div className='App'>
//       <LoginForm></LoginForm>
//       <Dashboard></Dashboard>
//       {/* <EmployeeList></EmployeeList> */}
//       <EmployeeDetails></EmployeeDetails>
     
//     </div>

//   );
// }


// export default App;
