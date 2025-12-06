import React from "react"
function Cart(){
return(
<div
  style={{
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",   // vertically center
    alignItems: "center", 
    backgroundColor:"black"      // horizontally center
  }}
>
  <h2 style={{ fontFamily: "-moz-initial", color:"white"}}>Your Cart🛒 Is Empty</h2>
</div>
);
}
export default Cart;