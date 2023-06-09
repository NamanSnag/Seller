import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setLogin } from "../../store";

import "./style.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
    confirmPassword: null,
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const url = `/api/auth/seller/login`;
    const res = await axios.post(url, credentials);
    console.log(res.data.data);
    let payload = {
      user: res.data.data,
      token: res.data.token
    };
    dispatch(setLogin(payload));
    alert('Successfully logged in')
    navigate('/');
  };

  return (
    <div className="login">
      <div className="authContainer">
      <h2>Login</h2>

        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="authInput"
        />

        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="authInput"
        />

        <input
          type="password"
          placeholder="confirmPassword"
          id="confirmPassword"
          onChange={handleChange}
          className="authInput"
        />

        <button onClick={handleClick} className="lButton">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
