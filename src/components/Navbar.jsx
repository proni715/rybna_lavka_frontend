import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="white" role="navigation">
      <div id='nav' className="nav-wrapper container">
        <img id='logo' src="../../logo.png" alt="Рибна Лавка" />
        <ul className="right hide-on-med-and-down">
          <li>
            <li>
              <a href="/">ГОЛОВНА</a>
            </li>
            <li>
              <a href="/about">ПРО НАС</a>
            </li>
            <li>
              <a href="/contacts">КОНТАКТИ</a>
            </li>
            <li>
              <a href="/store">ТОВАРИ</a>
            </li>
          </li>
        </ul>
      </div>
    </nav>
    
  );
};

export default Navbar;
