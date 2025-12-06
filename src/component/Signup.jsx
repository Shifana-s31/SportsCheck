import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    favoriteSport: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation or API calls here
    setSubmitted(true);
  };

  return (
        <div
      style={{
        position: "absolute",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "450px",
        width: "90%",
        backgroundColor: "black",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
        height: '89vh'
      }}
    >
      <form onSubmit={handleSubmit} style={{
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 0 15px rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: '400px',
        color: '#0e787b',
      }}>
        <h2 style={{textAlign: 'center', marginBottom: '20px', color:"white",fontFamily:"-moz-initial"}}>Join SportsCheck</h2>

        <label htmlFor="fullName" style={{fontWeight: 'bold', fontFamily:"-moz-initial",color:"white"}}>Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={{width: '100%', padding: '10px', marginBottom: '15px', borderRadius:'5px', border: '1px solid #ccc'}}
        />

        <label htmlFor="email" style={{fontWeight: 'bold',fontFamily:"-moz-initial",color:"white"}}>Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{width: '100%', padding: '10px', marginBottom: '15px', borderRadius:'5px', border: '1px solid #ccc'}}
        />

        <label htmlFor="password" style={{fontWeight: 'bold',fontFamily:"-moz-initial",color:"white"}}>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{width: '100%', padding: '10px', marginBottom: '15px', borderRadius:'5px', border: '1px solid #ccc'}}
        />

        <label htmlFor="confirmPassword" style={{fontWeight: 'bold',fontFamily:"-moz-initial",color:"white"}}>Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          style={{width: '100%', padding: '10px', marginBottom: '15px', borderRadius:'5px', border: '1px solid #ccc'}}
        />

        <button type="submit" style={{
          width: '100%',
          padding: '12px',
          backgroundColor: 'wheat',
          color: 'black',
          fontWeight: 'bold',
          fontSize: '1rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontFamily:"-moz-initial"
        }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
