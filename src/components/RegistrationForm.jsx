import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCookieFromBrowser,setCookie } from "../utils/cookie";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHendler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    setLoading(true)
    await axios("http://localhost:9000/users", { method: "POST", data: form })
      .then((res) => {
        if (res.data.token) {
          setCookie("Authorization", res.data.token);
          console.log(getCookieFromBrowser('Authorization'))
          setLoading(false);
          //document.location.replace("/");
        } else console.log(res.data);
      })
      .catch((e) => {
        setLoading(false)
        setError(true);
      });
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1> Rybna Lavka</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Registration</span>
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Name"
                  id="name"
                  type="text"
                  name="name"
                  onChange={changeHendler}
                />
                <label htmlFor="text">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Email"
                  id="email"
                  type="email"
                  name="email"
                  onChange={changeHendler}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Phone"
                  id="phone"
                  type="tel"
                  name="phone"
                  onChange={changeHendler}
                />
                <label htmlFor="text">Phone</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Password"
                  id="password"
                  type="password"
                  name="password"
                  onChange={changeHendler}
                />
                <label htmlFor="password">Password</label>
              </div> 
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Password"
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                />
                <label htmlFor="password">confirmPassword</label>
              </div> 
            </div>
          </div>
          <div className="card-action">
            <button className="btn yellow darken-4" onClick={registerHandler}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
