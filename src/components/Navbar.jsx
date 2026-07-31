import React, { useContext } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {


  const {is_loggedin} = useContext(UserContext)
 
  
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ShopEase</Link>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
 { 
 
 is_loggedin ? 
    <div className="auth-buttons">
        <Link to="" className="login-btn">
          Profile
        </Link>

      </div>
 
     :
    <div className="auth-buttons">
        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/register" className="register-btn">
          Register
        </Link>
    </div>


}
      
    </nav>
  );
};

export default Navbar;