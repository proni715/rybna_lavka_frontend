import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import photo from "./profilePhoto.jpg";
import axios from "axios";
import { getCookieFromBrowser } from "../utils/cookie";

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }
  async componentDidMount() {
    const token = getCookieFromBrowser("Authorization");
    await axios("https://rybna-lavka-api.herokuapp.com/users/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        this.setState({ user: res.data});
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    const { user } = this.state;
    return (
      <div className="page">
        <Navbar />
        <div className="page-container">
          <div>
            <br />
            <div id="profile-paper">
              <img id="poster" src={photo} alt="Profile photo" />
              <h1>{user.name}</h1>
              <div className="action-block">
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>Some information here</p>
                <p>Some information here</p>
                <p>Some information here</p>
                <p>Some information here</p>
                <p>Some information here</p>
                <p>Some information here</p>
              </div>
            </div>
            <br />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProfilePage;
