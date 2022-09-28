import React from "react";
import Evalu8 from "../images/Evalu8.png"

export default function NavBar(){
  return(
    <nav className='nav'>
      <img className='img'  src= {Evalu8} alt="Evalu8Image" />
    <h1 className='header'>Your Next Home</h1>
     <ul className='nav-items'>
      <li>Homes</li>
        <li>Top Picks</li>
         <li>Categories</li>
        <li>SignUp</li>
      <li>Login</li>
      
    </ul>
  </nav>
  )
}