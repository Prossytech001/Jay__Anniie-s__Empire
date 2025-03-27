import React from 'react'
import '../Explore/Explore.css'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <div className='explore'>
      <h1>Explore With Us In Finding Your Desire Product</h1>
      <Link to="/shop"><button>Shop Now</button></Link>
    </div>
  )
}

export default Explore
