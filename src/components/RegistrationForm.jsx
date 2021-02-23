import axios from "axios";
import React, { useState } from "react";
import { setCookie } from "../utils/cookie";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const changeHendler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    console.log("pisun");
    
    await axios("https://rybna-lavka-api.herokuapp.com/users", {
      method: "POST",
      data: form,
    })
      .then((res) => {
        if (res.data.token) {
          setCookie("Authorization", res.data.token);
          
        } else console.log(res.data);
      })
      .catch((e) => {
        console.log(e)
      });
  };

  return (
    <div id="register-form">
      <p id="sign" align="center">
        Sign up
      </p>
      <div>
        <input
          placeholder="Name"
          id="email"
          type="text"
          name="name"
          onChange={changeHendler}
        />

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

        <input
          placeholder="Confirm password"
          id="password"
          type="password"
          name="password"
          onChange={changeHendler}
        />

        <input
          placeholder="Phone number"
          id="email"
          type="tel"
          name="phone"
          onChange={changeHendler}
        />

        <button id="submit" align="center" onClick={registerHandler}>
          Sign up
        </button>
        <p id="forgot" align="center">
          <a href="/auth">Have account?</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
