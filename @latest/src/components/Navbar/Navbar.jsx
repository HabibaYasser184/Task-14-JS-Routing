import React from 'react'
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                 
                  
                      <h4 className=' navbar-brand  fs-4 fst-italic text-info-emphasis '>HabiShop</h4>
     
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link" to={'/'} aria-current="page">Home
                            <span className="visually-hidden">(current)</span></NavLink>
                        </li>
                      
                   
                        <li className="nav-item">
                         <NavLink className="nav-link" to={'/products'}>Products</NavLink>
                        </li>
                      
                        
                    </ul>
            
                    </div>
                </div>
                </nav>

            
        </>
    )
}