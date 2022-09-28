import React from "react";
import Houses from '../images/Houses.png'

export default function MainContent(){
  return(
    <section className="container">
      <img className='house-image' src={Houses} alt="houses" />
        <h1>Explore rentals on Evalu8</h1>
        <p>Take a deep dive and browse homes or apartments for rent and local insights to find what is right for you.</p>
    </section>
  )
}