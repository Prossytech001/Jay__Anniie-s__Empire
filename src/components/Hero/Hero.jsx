import React from 'react'
import './Hero.css'
import img1 from "../../assets/img/clientpic.png"
import { SiShopify } from "react-icons/si";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Welcome to our store</h1>
        <p className="hero__desc">Discover our curated selection of products designed to enhance your lifestyle. From sensual Sex Toys for intimate satisfaction, to vibrant LED Lights for perfect ambience — we've got it all!
        Shop Your Desires. Chat With Us To Order. Shop for the best products</p>
        <div className="hero__btn ">
            <Link to="/shop" className="btn1">Shop Now <SiShopify/></Link>
            <Link to="/contact" className='hero_btn2'>Contact Us</Link>
        </div>
      </div>
      <div className="hero__img">
        <img src={img1} alt="" className="hero__img" />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className='svg' viewBox="0 -60 1440 320"><path  fill-opacity="1" d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,250.7C672,256,768,224,864,213.3C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  )
}

export default Hero
