
// import { useState } from 'react';
import './App.css';
// import Header from './Header';
// import Loginsignup from './Components/Loginsignup/Loginsignup';
// import Product from './Product';
// import Login from './Login';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return(
    <div className='App'>
       <Navbar name='Shravan'/>
      {/* <Loginsignup/> */}
      <Navbar/>
    </div>
  )
}
  

export default App;
