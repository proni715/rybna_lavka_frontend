import React from 'react';
import './Navbar.css'

const Navbar = () =>{
    return(
    <nav className='nav'>
        <a href="/">Головна</a>
        <a href="/about">Про нас</a>
        <a href="/contacts">Контакти</a>
        <a href="/#">Магазин</a>
    </nav>        
    );
}

export default Navbar;
