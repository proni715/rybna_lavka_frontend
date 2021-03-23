import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//import routes from'../routes'

export const AboutPage = () => {
  return (
    <div className="page">
      <Navbar />
      <div id="about-back" className="page-container">
        <div>
          <h1 className="page-title">About Page</h1>
        </div>
        <div className="about-right-paper">
          <div className="about-right-title">
            <i className="material-icons">store</i>
            <h2>Where we located?</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="space"></div>
        <div className="about-left-paper">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="about-left-title">
            <h2>Where we located?</h2>
            <i className="material-icons">store</i>
          </div>
        </div>
        <div className="space"></div>
        <div className="about-right-paper">
          <div className="about-right-title">
            <i className="material-icons">store</i>
            <h2>Where we located?</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
