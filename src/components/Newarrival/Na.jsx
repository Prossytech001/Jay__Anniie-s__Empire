
import React, {useState, useEffect} from 'react'
import "../Newarrival/Na.css"
import {reviews} from '../Newarrival/Nafile'
import img1 from './../../../public/ledimg/led16.jpg'
import { Link } from 'react-router-dom'

const Na = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
     const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
     }, 3000); // change every 10 seconds

     return () => 
        clearInterval(interval);
   }, []);
  return (
    <div className="Art-review-container">
        <div className="arraval">
        <div className="art__content">
            <h1>New Arrival</h1>
            <p>Stay ahead of the trend with our exclusive New Arrivals! From innovative gadgets to must-have beauty essentials, we bring you the latest and greatest products to enhance your lifestyle. Discover unique, high-quality items designed to delight and impress.

✨ Handpicked Selection of Trending Products
✨ Premium Quality & Unmatched Style
✨ Limited Stock – Grab Yours Before They're Gone!</p>
        </div>
    <div className="Art-review">
        {reviews.map((review, index) => (
            <div 
                key={index} 
                className={`review ${index === currentIndex ? "active" : ""}`}
            >
                <div className="review__space">
                <div className="aboutimage">
                    <img src={review.image} alt=""  className='Na__img'/>
                </div>

                <div className="details">
                    <h3 className='detailsh3'>{review.name}</h3>
                    <p className='detailsp'>{review.description}</p>
                    <h3 className='quoteh3'><span className='quo'>"</span>Your favorite {review.category}<span className='quo'>"</span></h3>
                   <Link to="/shop"><button>Shop Now</button></Link> 
                </div>
                </div>
            </div>
        ))}
    </div>
    </div>
</div>
   
  )
}

export default Na

