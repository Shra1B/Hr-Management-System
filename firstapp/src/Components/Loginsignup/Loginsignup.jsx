
import React, { useState } from "react";
import './Loginsignup.css'
// import Header from "../Header";

// import Login from "../../Login";
const Loginsignup=()=>{
    const[action,setAction]=useState("Login")
    return(
        <div className="container">
            <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
            </div>
            {action==="Login"?<div></div>:<div className="input">
                <img className="input-img" src="https://cdn-icons-png.flaticon.com/128/9706/9706582.png" alt="name"></img>
                <input type="text"placeholder="Enter Name "></input>
                </div>}
            <div className="inputs">
                {/* <div className="input">
                    <img className="input-img" src="https://cdn-icons-png.flaticon.com/128/9706/9706582.png" alt="name"></img>
                    <input type="text"placeholder="Enter Name "></input>
                </div> */}
                <div className="input">
                    <img className="input-img" src="https://cdn-icons-png.flaticon.com/128/646/646094.png" alt="name"></img>
                    <input type="email" placeholder="Enter  Email"></input>
                </div>
                <div className="input">
                    <img className="input-img" src="https://cdn-icons-png.flaticon.com/128/3064/3064155.png" alt="name"></img>
                    <input type="password"placeholder="Enter Password"></input>
                </div>
                
                
            </div>
            {action==="Signup"?<div></div>:<div className="forgot-password">Lost Password?<span>Click Here!</span></div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit grey":"submit"} onClick={()=>{setAction("Signup")}}>Signup</div>
                <div className={action==="Signup"?"submit grey":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
            {/* <Header></Header> */}
        </div>
        
    )
}
export default Loginsignup