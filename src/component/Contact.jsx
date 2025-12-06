import React from "react";

function Contact() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",   // vertically center
        alignItems: "center",       // horizontally center
        backgroundColor:"black",
        textAlign: "center"
      }}
    >
      <h2 style={{ color: "white", fontFamily:"-moz-initial" }}>Contact Us</h2><br />
      <p style={{fontWeight:"bold", fontFamily:"-moz-initial",color:"white"}}>We’re always here to help you find the right sports gear!

<p style={{fontFamily:"-moz-initial",color:"white"}}>📍 Location:
SportsCheck Store,
Main Road, Kozhikode, Kerala</p>

<p style={{fontFamily:"-moz-initial",color:"white"}}>📞 Phone:
+91 98765 43210</p>

<p style={{ fontFamily:"-moz-initial",color:"white"}}>📧 Email:
support@sportscheck.in</p>

<p style={{ fontFamily:"-moz-initial",color:"white"}}>🕒 Working Hours:
Monday – Saturday: 9:30 AM – 8:30 PM
Sunday: 10:00 AM – 6:00 PM</p>

💬 For product inquiries, orders, and support, feel free to reach out anytime! </p></div>
      
  );
}

export default Contact;
