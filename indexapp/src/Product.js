import { useState } from "react";
// import Header from "./header";

function Product(props){
    // State- is the data of component 
    // every component can have a state,when state changes the component should also change
    // we can create the state variable using hook(useState)
    // Hook is a function which allows to connect with react features 
    let[isAvailable,setIsAvailable]=useState("yes");
    // function changeData(){
    //     setIsAvailable('no');
    // }
    // <h3>{naam}</h3>   
    //  <Header name='Shravan '  age='21' weight='72kg'></Header>
     
    // <Header name='Pavan' age='18' weight='62kg'></Header>
    // <button className='btn' onClick={setNaam('Thor')}>Click</button>
    // <button className='btn' onClick={doSomething}>Button</button>
    // <div className='Products'>
    //  <Product name='Samsung' Price='28$' url="https://th.bing.com/th/id/OIP.L1E1_WCzzqQWeEredCUmqgHaE8?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" ></Product>
    // <Product name='Vivo y30' Price='1400' url="https://th.bing.com/th/id/OIP.unuLcBx3Gu_d5uJ_yuxiaAHaGd?w=210&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"></Product>
    //  <Product name =' Iphone' Price='15000' url="https://th.bing.com/th/id/OIP.RMgSZevhD7HOhlr8MP_9KwHaHd?w=148&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"></Product>
    //  <Product name='Dell PC' Price='50000' url="https://th.bing.com/th/id/OIP.p-1HWbT2nIQ__27R0SwGhQHaHa?w=217&h=217&c=7&r=0&o=5&dpr=1.3&pid=1.7"></Product>
    //  </div>
    return(
        <header className='sra1'>
            {/* <p>{props.url}</p> */}
            <img className='img' src={props.url} alt="" />
            <h1>{props.name}</h1>
            <h1>{props.Price}</h1>
            <p>{isAvailable}</p>
            <button onClick={()=>{setIsAvailable("no")}}>Touch Me not</button>
            
         </header>
        // <header className="sra1">
        //     <h1>{"Coapps"}</h1>
        // </header>
    )
}
export default Product;