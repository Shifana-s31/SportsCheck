import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "450px",
        width: "90%",
        backgroundColor: "black",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
      }}
    >
      <h2
        style={{
          marginBottom: "10px",
          fontFamily: "-moz-initial",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          fontSize:"20x"
        }}
      >
        Sign In / Sign Up
      </h2>

      <form onSubmit={handleSubmit}>

        {/* EMAIL */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              color: "white",
              marginBottom: "6px",
              fontFamily:"-moz-initial"
            }}
          >
            Email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",              // full width input
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              outline: "none",
              transition: "0.3s",
            }}
          />
        </div>

        {/* PASSWORD */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "6px",
              color: "white",
              fontFamily:"-moz-initial"
            }}
          >
            Password
          </label>

          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              outline: "none",
              transition: "0.3s",
            }}
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "wheat",
            color: "black",
            border: "none",
            borderRadius: "6px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "10px",
            fontFamily:"-moz-initial"
          }}
        >
          Sign In
        </button>
    
  <p style={{ color: "white", fontFamily: "-moz-initial", display:"flex",justifyContent:"center",flexDirection:"column", alignItems:"center",fontWeight:"bold"}}>
    Forget password?
  
  <Link style={{ color: "white", fontFamily: "-moz-initial", display:"flex",justifyContent:"center",flexDirection:"column", alignItems:"center",fontWeight:"bold"}} to="/Signup">Create account?</Link>
 </p>
      </form>
    </div>
  );
}

export default Signin;
