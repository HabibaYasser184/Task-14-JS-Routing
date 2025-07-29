 import React,  { useState } from 'react';

// import About from "../About/About";
// import Footer from "../Footer/Footer";

// import Navbar from "../Navbar/Navbar";
// import Parent from "../Parent/Parent";



 export default function About(){

let  [counter,setCounter]= useState(0);

 function Increase(param) {
    setCounter(counter + param)
 }
    
  return (

<>


<h2  className='ms-4'>Welcome to About Page</h2>
<h1 className='ms-4'>Counter:{counter}</h1>

<button className='btn btn-success ms-4' onClick={function(){Increase(10)}}>Increase Counter</button>
<div className={counter > 20 ? 'bg-danger d-block':'d-none'}>
    <h2>Counter:{counter}</h2>
</div>











</>




  )
}