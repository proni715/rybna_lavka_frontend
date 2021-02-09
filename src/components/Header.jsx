import React from 'react';
import Navbar from './Navbar';
import './Header.css'

const Header = () =>{

    return(
        <header className="header">
            <img src="../../logo.png" alt="Рибна Лавка"/>
            <Navbar/>
        </header>
    );
}

export default Header;