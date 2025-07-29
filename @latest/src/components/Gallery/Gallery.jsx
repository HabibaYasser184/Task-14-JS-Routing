import React, { useEffect, useState } from 'react'



export default function Gallery() {

    let [counter, setCounter] = useState(0)
    let [userName, setUserName] = useState("Habiba")

    console.log("Render...");
    
    //  Render, Functions, Mounting, mounting nesting

    // Mounting Phase
    useEffect( () => {
        console.log("Mounting...");
        test();

    }, [])

    useEffect( () => {
        if(counter === 0)
            return;
        console.log("Update phase for counter...");
    }, [counter])

    useEffect( () => {
        if(userName === "Habiba")
            return;
        console.log("Update phase for userName...");
    }, [userName])

    // Updating phase
    useEffect( () => {
        if(counter === 0 && userName === "Habiba")
            return;
        console.log("Update phase...");
    }, [counter, userName])


    useEffect( () => {
        return () => {
            // unmounting
            console.log("Unmounting");
        }
    }, [])

    useEffect( () => {
        console.log("Mounting");

        let clr = setInterval( () => {
            console.log("Interval Fired");
        }, 1000 )
        
        return () => {
            // unmounting
            console.log("Unmounting");
            clearInterval(clr)
        }
    }, [])


    // Bad Bractice
    useEffect( () => {
        console.log("useEffect");
    })

    function sayHello() {
        console.log("SayHello");
        
    }
    sayHello();

    function test() {
        console.log("Hello from test");
    }

    function changeCounter() {
        setCounter( counter + 1 )
    }

    function changeUserName() {
        setUserName("Mohamed")
    }

    return (
        <>
        
            <div> 
                <h2 className="ms-4 text-danger"> Gallery</h2>
                <h2 className="ms-4">Counter: {counter}</h2>
                <h3 className="ms-4">Name: {userName}</h3>
                <button className='btn btn-primary ms-4' onClick={changeCounter}>Increase</button>
                <button className='btn btn-success ms-4' onClick={changeUserName}>Change Name</button>
            </div>
        </>
    )
}
