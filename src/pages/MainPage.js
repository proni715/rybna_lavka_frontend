import React from 'react'
import Header from '../components/Header'
import { getCookieFromBrowser } from '../utils/cookie'


export const MainPage = () =>{
    return(
        <div className="container">
            <Header/>
            <div>
                <h1>Main Page</h1>
            </div>
        </div>
    )
}