import React from 'react'
import Shop from '../components/shopping/Shop'
import Nav from '../components/Navbar/Nav'
import Footer from '../components/Footer/Footer'

const Shoppingpage = ({ searchTerm, onAddToCart }) => {
  return (
    <div>

        <Shop searchTerm={searchTerm}  onAddToCart={onAddToCart}  />
       
      
    </div>
  )
}

export default Shoppingpage
