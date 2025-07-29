import React, { useState } from 'react'

export default function Home() {

    let [counter, setCounter] = useState(0)
 
    
    function Increse(param){
        setCounter(counter + param)        
    }
    
    return (
        <>
        <h1 className="ms-4 text-danger"> Welcome to Home Page</h1>
        <h1 className="ms-4">Counter: {counter}</h1>
        <button className='btn btn-primary ms-4' onClick={function(){Increse(10)}}>Increse Counter</button>
        
        <div className={ counter > 20 ? 'bg-info d-block' : 'd-none'}>
            <h2 className="ms-4">Counter: {counter}</h2>
        </div>
     
        </>
    )
} 
