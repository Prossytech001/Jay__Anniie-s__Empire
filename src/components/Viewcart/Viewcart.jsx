import React from 'react'
import "../Viewcart/Viewcart.css"
import{Link} from "react-router-dom"
import { BsCart4 } from "react-icons/bs";

const Viewcart = ({cart}) => {
  return (
    <div className='view__cart'>
      <Link to="/cart" className='vie__cart1'>
        <button className='showlength'>{cart?.length || 0}</button>
        <BsCart4/>
      </Link>  
    </div>
  )
}

export default Viewcart

/*18 Ac/Dc STANDING FAN WITH SOLAR */
