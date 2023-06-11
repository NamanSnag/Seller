import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../store";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleLogout = async() => {
    dispatch(setLogout());
    alert("User logged out");
    navigate('/')
  }

  return (
    <div className="navbar">
      <nav className="navContainer">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9360/9360923.png"
              alt="logo"
            />
            <p>
              <span style={{ color: "#ffaa00" }}>S</span>eller
            </p>
          </div>
        </Link>
        {user ? (
          <div className="navItems">
            <button
              className="navButton"
              style={{
                color: "yellow",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              {user.businessName}
            </button>
            <button className="navButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <Link to={"/"} >
            <button className="navButton">Register</button>
            </Link>
            <Link to={"/login"} >
            <button className="navButton" >
              Login
            </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
