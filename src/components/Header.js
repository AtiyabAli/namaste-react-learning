import React, { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  // const btnName = "Login"
  const [btnName, setBtnName] = useState("Login");
  const btnChange = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  // useEffect(() => {
  //   console.log("useEffect is called");
  // }, []);

  return (
    <div className="header">
      <div className="logon-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About us with Link</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us us with Link</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnChange();
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
