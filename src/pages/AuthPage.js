import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { getCookieFromBrowser, setCookie } from "../utils/cookie";
import { Redirect } from "react-router-dom";

export const AuthPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHendler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const authHandler = async () =>{
    await axios("http://localhost:9000/auth", { method: "POST", data: form })
      .then((res) => {
        if (res.data.token) { 
          setCookie('Authorization',res.data.token)
          //console.log(getCookieFromBrowser('Authorization'))
          setLoading(false);
          document.location.replace('/')
        } 
        else console.log(res.data)
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      });
    }

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col s6 offset-s3">
          <h1> Rybna Lavka</h1>
          <div className="card blue darken-1">
            <div className="card-content white-text">
              <span className="card-title">Authorization</span>
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
                    placeholder="Password"
                    id="password"
                    type="password"
                    name="password"
                    onChange={changeHendler}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
            </div>
            <div className="card-action">
              <button
                className="btn yellow darken-4"
                onClick={
                  authHandler
                }
                >Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
