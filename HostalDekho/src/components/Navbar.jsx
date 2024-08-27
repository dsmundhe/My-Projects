import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
          <div className="logo">Hostel<span>Dekho</span></div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book">Book Now</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/collegelist">College List</Link>
          </li>
          {/* <li className="loginbtn">
            <Link to="/login" >LogIn</Link>
          </li> */}
        </ul>
      </div>
   
    </div>
  );
}

export default Navbar;
