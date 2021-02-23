import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
//import routes from'../routes'

export const AboutPage = () =>{
    return(
        <div className="page">
            <Navbar/>
            <div className="page-container">
                <h1>About Page</h1>
            </div>
            <Footer/>
        </div>
    )
}