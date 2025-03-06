import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 
import "../styles/NavBar.css"; 

const NavBar: React.FC = () => {
  return (
    
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="Company Logo" />
        </Link>
      </div>
      <div className="navbar__menu">
        <Link to="/stores">Stores</Link>
        <Link to="/skus">SKUs</Link>
        <Link to="/planning">Planning</Link>
        <Link to="/chart">Charts</Link>
      </div>
      <div className="navbar__auth">
        <button className="login-btn">Sign In</button>
      </div>
    </nav>
    
  );
};

export default NavBar;
