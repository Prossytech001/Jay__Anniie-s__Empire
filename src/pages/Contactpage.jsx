/*import React from 'react';

const ContactUs = () => {
    return (
        <div className="contact-us-section bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="contact__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7151.564274103048!2d6.355140366851148!3d4.9515366789569155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106a01db10652889%3A0xa9678c9dda7a90b6!2sOkpoi%20street%20edepie!5e1!3m2!1sen!2sng!4v1742571186261!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg">Need help or have any questions? Feel free to reach out to us on WhatsApp or through our social media channels. We're here to help you!</p>
            <div className="mt-4">
                <a href="https://wa.me/YOUR_NUMBER" className="">WhatsApp Us</a>
                <a href="#" className="">Visit Our Socials</a>
            </div>
        </div>
    );
};

export default ContactUs;*/

import React from 'react';
import "../pages/Contactpage.css";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { RiMessage3Fill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <div className="contact-us-section">
            <div className="ctact">
             <h2 className="text__contact">Contact Us</h2>
             <p className="p__contact">Need help or have any questions? Feel free to reach out to us on WhatsApp or through our social media channels. We're here to help you!</p>
            <div className="contact__map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7151.564274103048!2d6.355140366851148!3d4.9515366789569155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106a01db10652889%3A0xa9678c9dda7a90b6!2sOkpoi%20street%20edepie!5e1!3m2!1sen!2sng!4v1742571186261!5m2!1sen!2sng" 
                    
                    
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
           
            <div className="cantact-p mt-4 space-x-4">
                 <div className="footer__logo">
                            <ul className='logo--ul--contact'>
                                <li><RiMessage3Fill/>stephaniejavanj@gmail.com</li>
                                <li><FaPhone/>+2348132993831</li>
                                <li><IoLocationSharp/>Edepie coconut street Yenagoa, Bayelsa State</li>
                               </ul>
                               </div>
                <a 
                    href="https://wa.me/8132993831" 
                    className="whatsapp "
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    WhatsApp Us
                </a>
                
            </div>
            </div>
        </div>
    );
};

export default ContactUs;

