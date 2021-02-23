import axios from "axios";
import React, { useState } from "react";
import { setCookie } from "../utils/cookie";
import "./animate.css";
const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHendler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const authHandler = async () => {
    
    
    await axios("https://rybna-lavka-api.herokuapp.com/auth", {
      method: "POST",
      data: form,
    })
      .then((res) => {
        if (res.data.token) {
          setCookie("Authorization", res.data.token);
          window.location.replace("http://localhost:3000/");
        } else console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div id="login-form">
      <p id="sign" align="center">
        Sign in
      </p>
      <div>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={changeHendler}
        />
        <input
          placeholder="Password"
          id="password"
          type="password"
          name="password"
          onChange={changeHendler}
        />

        <button id="submit" align="center" onClick={authHandler}>
          Sign in
        </button>
        <p id="forgot" align="center">
          <a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
