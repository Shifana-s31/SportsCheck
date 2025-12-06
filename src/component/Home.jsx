import React from "react";
import sportsImage from "../assets/sports.png";  // ✅ Correct image import
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${sportsImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",      // Full viewport width
        height: "100vh",     // Full viewport height
        color: "white",
        display: "flex",
        flexDirection: "column", // Stack heading and paragraph vertically
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
        overflow: "hidden",  // Prevent scrollbars if any
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "15px",
          letterSpacing: "2px",
          color: "white",
          fontFamily: "-moz-initial",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textShadow: "2px 2px 6px black",
        }}
      >
        Welcome to 🏆 SportsCheck
      </h1>
      <p
        style={{
          fontSize: "1.4rem",
          maxWidth: "700px",
          margin: "0 auto",   // center paragraph block
          lineHeight: "1.6",
          color: "white",
          textShadow: "1px 1px 4px black",
          fontFamily: "-moz-initial",
          textAlign: "center",
        }}
      >
        Your one-stop destination for premium sports gear, fitness equipment,
        activewear, and accessories. Quality products for every athlete!
      </p><br/><br/>
    <button className="btn btn-primary" type="submit" onClick={() => navigate('/Productgrid')}>Shop Now</button>
    </div>
  );
}

export default Home;
