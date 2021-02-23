import React from "react";
import "./Navbar.css";
import { getCookieFromBrowser, removeCookie } from "../utils/cookie";

const Navbar = () => {
  const isLoggedIn = getCookieFromBrowser("Authorization");
  const delCookie = async () => {
    removeCookie("Authorization");
  };
  return (
      <nav className="white" role="navigation">
        <div id="nav" className="nav-wrapper container">
          <img id="logo" src="../../logo.png" alt="Рибна Лавка" />
          <ul className="right hide-on-med-and-down">
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
            {isLoggedIn ? (
              <li>
                <a href="/" onClick={delCookie}>
                  ВИЙТИ
                </a>
              </li>
            ) : (
              <li>
                <a href="/auth">УВІЙТИ</a>
              </li>
            )}
          </ul>
          <ul id="nav-mobile" className="side-nav">
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
            {isLoggedIn ? (
              <li>
                <a href="/" onClick={delCookie}>
                  ВИЙТИ
                </a>
              </li>
            ) : (
              <li>
                <a href="/auth">УВІЙТИ</a>
              </li>
            )}
          </ul>
          <a href="/" data-activates="nav-mobile" className="button-collapse">
            <i id="menu-icon" className="material-icons">
              menu
            </i>
          </a>
        </div>
      </nav>
  );
};

export default Navbar;
