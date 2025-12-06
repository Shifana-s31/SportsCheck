import React from "react";

function About() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",   // vertically center
        alignItems: "center",       // horizontally center
        color: "white",
        textAlign: "center",
        backgroundColor:"black"
      }}
    >
      <h2 style={{ color: "white", fontFamily: "-moz-initial" }}>
        About SportsCheck
      </h2>

      <p
        style={{
          maxWidth: "700px",
          marginTop: "20px",
          fontSize: "1.2rem",
          fontFamily: "-moz-initial"
        }}
      >
        SportsCheck is your trusted destination for high-quality sports
        equipment, fitness gear, and activewear. We are committed to
        inspiring athletes, fitness enthusiasts, and beginners with premium
        products that support a healthy and active lifestyle.
      </p>
    </div>
  );
}

export default About;
