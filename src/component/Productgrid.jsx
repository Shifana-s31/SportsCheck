import React from "react";
import jersyImage from "../assets/jersy.jpeg";
import ballImage from "../assets/ball.jpg";
import batImage from "../assets/bat.webp";
import boot2Image from "../assets/boot2.jpg";
import cricketImage from "../assets/cricket.jpg";
import cycleImage from "../assets/cycle.jpg";
import fullImage from "../assets/full.jpeg";
import bootImage from "../assets/boot.webp";
import troImage from "../assets/tro.webp";

const products = [
  { id: 1, name: "ASTON VILLA 2000-01 HOME KIT", category: "Retro Jersey", price: 300, oldPrice: 599, image: jersyImage },
  { id: 2, name: "FIFA WORLD CUP BALL 2022", category: "Special Edition", price: 849, oldPrice: 1999, image: ballImage },
  { id: 3, name: "cricket bat", category: "Special Edition", price: 350, oldPrice: 599, image: batImage },
  { id: 4, name: "Adidas Pro Football Boots", category: "Pro boots", price: 1500, oldPrice: 1699, image: boot2Image },
  { id: 5, name: "Cricket Full Kit", category: "Cricket Gear", price: 4500, oldPrice: 6099, image: cricketImage },
  { id: 6, name: "Sport Cycle 2024 Model", category: "Cycling", price: 15350, oldPrice: 17599, image: cycleImage },
  { id: 7, name: "Sports Full Set Combo", category: "Combo Kit", price: 350, oldPrice: 599, image: fullImage },
  { id: 8, name: "Nike Football Boots", category: "Boots", price: 999, oldPrice: 1599, image: bootImage },
  { id: 9, name: "Football kit ", category: "combo Kit", price: 599, oldPrice: 899, image: troImage },
];

function Productgrid() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection:"row",
        flexWrap:"wrap",
        gap: "25px",
        backgroundColor: "#f2f2f2",
        marginTop:"60px",
        zIndex:"1000",
        paddingTop: "20px 40px",
        marginTop:"60px"
      }}
    >
      {products.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
            paddingTop: "80px",
            marginTop:"60px",
            }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
          }}
        >
          {/* Product Image */}
          <div style={{ width: "100%", height: "230px", display: "flex", justifyContent: "center"}}>
           <img
              src={item.image}
              alt={item.name}
              style={{
                width: "90%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                position:"relative"
              }}
            />
          </div>

          {/* Product Category */}
          <p style={{ color: "#555", fontSize: "0.9rem", marginTop: "10px" }}>{item.category}</p>

          {/* Product Name */}
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              margin: "8px 0",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.name}
          </h3>

          {/* Price */}
          <p style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "10px" }}>
            <span style={{ textDecoration: "line-through", color: "gray", marginRight: "8px" }}>
              ₹{item.oldPrice}.00
            </span>
            ₹{item.price}.00
          </p>

          {/* Add to Cart Button */}
          <button
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "black",
              border: "1px solid black",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "5px",
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Productgrid;
