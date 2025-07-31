import React from 'react'
import images from '../../assets/404_page-not-found (1).png'
export default function NotFound() {
    return (
        <>
           <div className="text-center mt-5">
      <h1 className="text-danger">404 - Page Not Found</h1>
        <img src={images} alt="Not Found" className="img-fluid custom-width" />
      
    </div>
           
        </>
    )
}