import React from 'react'
import '../Footer/Footer.css'
import logo from "../../assets/img/ANNIIE-logo.png"
import { RiMessage3Fill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footr'>
        <div className="footer__cotent">
            <div className="footer__logo">
                <img src={logo} alt="" />
                <ul>
                <li><RiMessage3Fill/>stephaniejavanj@gmail.com</li>
                <li><FaPhone/>+2348132993831</li>
                <li><IoLocationSharp/>Edepie coconut street Yenagoa, Bayelsa State</li>
               </ul>
            </div>
            
            
               
            <div className="footer__social">
               <div className="About__footer">
                <h1>About us</h1>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
               </div>
               <div className="link__footer">
                <h1>Quick Links</h1>
                <div className="social__fotlink">
                <a href="https://www.facebook.com/share/162pjwVkn4/?mibextid=LQQJ4d"><IoLogoFacebook/></a>
                <a href="https://www.instagram.com/jay_anniies_empire?igsh=MXQ5cHQ2d3JqMjlqZQ%3D%3D&utm_source=qr"><AiFillInstagram/></a>
                <a href="https://www.tiktok.com/@jay_anniies_empire?_t=ZM-8us9KEMoK4j&_r=1"><AiFillTikTok/></a>
                </div>
                
               </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
