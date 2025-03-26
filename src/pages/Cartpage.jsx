/*import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { feature } from '../components/feature/Featurefile';
import { IoMdArrowBack } from "react-icons/io";
import "../pages/Cartpage.css"
const CartPage = ({ cart, setCart }) => {
  const product = feature
  const navigate = useNavigate();

  const contactOnWhatsApp = () => {
    const phoneNumber = "8138597192"; // Your WhatsApp number

    // Generate the message with all products in the cart
    const productDetails = cart.map(product => `Product: ${product.name}, Price: ₦${product.price}`).join('\n');
    const message = `Hello, I came from your website. I'm interested in the following items:\n${productDetails}\nCan you provide more details?`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
   
  };

  
  return (
    <div className='cartt'>
     
       <button 
      onClick={() => window.history.back()} 
      className="back-button"
    >
      <IoMdArrowBack/>
    </button>
      
    
      <h1 className='cart__h1'>Your Cart</h1>
      {cart.length === 0 ? (
        <p className='cart__p'>Your cart is empty.</p>
      ) : (
        <ul className='cart__ul'>
          {cart.map((product, index) => (
            <li key={index} className='cart__li'>
              <div className="cart__container">
              
              <img src={product.image} alt={product.name} width="200" />
              </div>
              <div className="cart__container2">
              <h2>{product.name}</h2>
              <p className='cart__price'>&#8358;{product.price}</p>
              <p className='cart__p2'>{product.description}</p>
              <button onClick={() => handleRemoveFromCart(index)} className='cart__remove'>Remove from Cart</button>
              </div>
              
            </li>
          ))}
        </ul>
      )}

{cart.length > 0 && <button onClick={contactOnWhatsApp} className='cart__order'>Order Now</button>}
    </div>
  );
};

export default CartPage;*/

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { feature } from '../components/feature/Featurefile';
import { IoMdArrowBack } from "react-icons/io";
import "../pages/Cartpage.css"

const CartPage = ({ cart, setCart }) => {
  const product = feature;
  const navigate = useNavigate();

  const contactOnWhatsApp = () => {
    const phoneNumber = "8132993831"; // Your WhatsApp number

    // Generate the message with all products in the cart
    const productDetails = cart.map(product => `Product: ${product.name}, Price: ₦${product.price}`).join('\n');
    const message = `Hello, I came from your website. I'm interested in the following items:\n${productDetails}\nCan you provide more details?`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className='cartt'>
      <button 
        onClick={() => window.history.back()} 
        className="back-button"
      >
        <IoMdArrowBack/>
      </button>

      <h1 className='cart__h1'>Your Cart</h1>
      {cart.length === 0 ? (
        <p className='cart__p'>Your cart is empty.</p>
      ) : (
        <ul className='cart__ul'>
          {cart.map((product, index) => (
            <li key={index} className='cart__li'>
              <div className="cart__container">
                <img src={product.image} alt={product.name} width="200" />
              </div>
              <div className="cart__container2">
                <h2>{product.name}</h2>
                <p className='cart__price'>&#8358;{product.price}</p>
                <p className='cart__p2'>{product.description}</p>
                <button onClick={() => handleRemoveFromCart(index)} className='cart__remove'>Remove from Cart</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="btn__cart__order">

      {cart.length > 0 && (
        <button 
          onClick={contactOnWhatsApp} 
          className='cart__order'>
          Order Now (Total: ₦{calculateTotal()})
        </button>
      )}
      </div>
    </div>
  );
};

export default CartPage;

