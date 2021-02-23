import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
//import routes from'../routes'

export const AboutPage = () =>{
    return(
        <div className="page">
            <Navbar/>
            <div id="about-back" className="page-container">
                <div>
                    <h1>About Page</h1>
                </div>        
            </div>
            <Footer/>
        </div>
    )
}