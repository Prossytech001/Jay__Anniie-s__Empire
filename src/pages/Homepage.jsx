import React from 'react'
import Nav from '../components/Navbar/Nav'
import Hero from '../components/Hero/Hero'
import Feature from '../components/feature/Feature'
import Newarrival from "../components/Newarrival/Na"
import Explore from '../components/Explore/Explore'
import Footer from '../components/Footer/Footer'

const Homepage = () => {
  return (
    <div>
     
      <Hero/>
      <Newarrival/>
      <Feature/>
      <Explore/>
      
      
    </div>
  )
}

export default Homepage
