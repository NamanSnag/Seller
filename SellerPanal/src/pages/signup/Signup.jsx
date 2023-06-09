import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import axios from "axios";
import { base_URL } from "../../base";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    email: null,
    businessName: null,
    password: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const url = `${base_URL}/api/auth/seller/register`;
    await axios.post(url, credentials);
    alert('Successfully registered');
    navigate('/login');
  };

  return (
    <div className="signup">
      <div className="authContainer">
        <h2>Signup</h2>

        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="authInput"
        />

        <input
          type="text"
          placeholder="businessName"
          id="businessName"
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

        <button onClick={handleClick} className="lButton">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
