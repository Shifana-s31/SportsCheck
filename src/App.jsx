import React from "react"
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import SignIn from "./component/Signin"
import About from "./component/About"
import Contact from "./component/Contact"
import Cart from "./component/Cart"
import SignUp from "./component/Signup"
import Signup from "./component/Signup"
import Signin from "./component/Signin"
import Productgrid from "./component/Productgrid"
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Productgrid" element={<Productgrid/>}/>
        
      </Routes>
    </Router>
      
  )
}

export default App
