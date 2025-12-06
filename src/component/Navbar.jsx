import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "wheat",
        padding: "10px",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "60px",
        zIndex:"1000"
      }}
    >
      {/* Logo */}
      <h2
        style={{
          color: "black",
          fontFamily: "-moz-initial",
          fontWeight: "bold",
        }}
      >
        🏆 SportsCheck
      </h2>

      {/* Search Bar */}
      <div style={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Search products..."
          style={{
            width: "45%",
            padding: "8px 12px",
            borderRadius: "20px",
            border: "1px solid gray",
            outline: "none",
            fontSize: "1rem",
  }}
/>
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "18px" }}>
        <Link to="/Signin" style={linkStyle}>Sign in</Link>
        <Link to="/About" style={linkStyle}>About</Link>
        <Link to="/Cart" style={linkStyle}>Cart</Link>
        <Link to="/Contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "black",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.1rem",
  fontFamily: "-moz-initial"
};

export default Navbar;
