import React, {useState} from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  // const btnName = "Login"
  const [btnName, setBtnName] = useState("Login")
  const btnChange = () => {
    // if(btnName==="Login"){
    //    setBtnName("Logout")
    // }
    // if(btnName==="Logout"){
    //    setBtnName("Login")
    // }

    btnName==="Login"?setBtnName("Logout"):setBtnName("Login")
    
  }
 
    return (
      <div className="header">
        <div className="logon-container">
          <img
            className="logo"
            src= {LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
            <button className="login" onClick={()=> {btnChange()}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;