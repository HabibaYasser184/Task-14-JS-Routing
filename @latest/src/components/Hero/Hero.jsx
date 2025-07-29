import React from 'react'
import About from '../About/About'
import { Link, Outlet } from "react-router-dom";
export default function Hero() {
  return (
    <>
    <h1 className="ms-4 text-danger">Welcome to Hero Page</h1>
       <Outlet/>
                <nav>
                    <ul className="list-unstyled">
                        <li>
                            <Link className="link-offset-2 link-underline link-underline-opacity-10 ms-4"  to={'about'}>About</Link>
                        </li>
                      
                    </ul>
                </nav>
    </>
  )
}
