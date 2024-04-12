import './App.css';
// import Product from './Product';
// import Header from './header';
import LoginForm from './Login';
import Dashboard from './Dashboard';
// import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';
// import {useState} from 'react';
function App() {
  // let[naam,setNaam]=useState('Shrac');
  // function doSomething(data){
  //     console.log("I am Clicked",data);
  //   }
  return(
    <div className='App'>
      <LoginForm></LoginForm>
      <Dashboard></Dashboard>
      {/* <EmployeeList></EmployeeList> */}
      <EmployeeDetails></EmployeeDetails>
     
    </div>

  );
}


export default App;
