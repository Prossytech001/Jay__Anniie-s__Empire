import React, { useEffect, useState } from 'react';

import { useParams, Link,useNavigate } from 'react-router-dom';

import "../pages/Productpage.css";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";



const Productpage = ({ onAddToCart}) => {
    const { id } = useParams();
    const navigate = useNavigate();


    const [product, setProduct] = useState(null);

    useEffect(() => {
        const savedProducts = localStorage.getItem('products');
        if (savedProducts) {
            try {
                const parsedProducts = JSON.parse(savedProducts);
                const foundProduct = parsedProducts.find(item => item.id === id); // Compare as string
                if (foundProduct) {
                    setProduct(foundProduct);
                }
            } catch (error) {
                console.error('Error parsing saved products:', error);
            }
        }
    }, [id]);

    const handleRating = (ratingValue) => {
        if (product) {
            const newRatings = [...product.ratings];
            newRatings[ratingValue - 1] += 1;
            const updatedProduct = { ...product, ratings: newRatings };

            setProduct(updatedProduct);

            const savedProducts = JSON.parse(localStorage.getItem('products'));
            const updatedProducts = savedProducts.map(item => item.id === id ? updatedProduct : item);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
        }
    };

    if (!product) return <div>Product not found!</div>;

    const calculateAverageRating = (ratings) => {
        const totalRatings = ratings.reduce((sum, count) => sum + count, 0);
        if (totalRatings === 0) return 0;
        const totalStars = ratings.reduce((sum, count, index) => sum + (count * (index + 1)), 0);
        return (totalStars / totalRatings).toFixed(1);
    };

    const averageRating = calculateAverageRating(product.ratings);

    const contactOnWhatsApp = () => {
        const phoneNumber = "8132993831"; // Your WhatsApp number
        const productName = encodeURIComponent(product.name);
       // Encode the image URL
        const message = `Hello, I'm interested in ${productName}. I came from your website ,Can you provide more details? on ${productName}  `;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
      
        window.open(whatsappURL, "_blank");
      };
     

      const handleAddToCartClick = () => {
        onAddToCart(product);
        ; // Redirects to Cart Page after adding
      };
      

    return (
        <div className="pp__container">
              <button 
      onClick={() => navigate(-1)} 
      className="back-button"
    >
      <IoMdArrowBack/> 
    </button>
            <div className="pp__babe__container">
                <div className="pp__img">
                <img src={product.image} alt={product.name} className="" />

                
                </div>

                <div className="pp__content">
                <h1 className="pp__h1">{product.name}</h1>
                <p className="pp__p">&#8358;{product.price} <div className="discount__pp">&#8358;{product.discount}</div> </p>
                <p className="pp__r">Average Rating: {averageRating} / 5</p>
                <div className="pp__social">
                   <a href="https://www.facebook.com/share/162pjwVkn4/?mibextid=LQQJ4d"><IoLogoFacebook/></a> 
                    <a href="https://www.instagram.com/jay_anniies_empire?igsh=MXQ5cHQ2d3JqMjlqZQ%3D%3D&utm_source=qr"><AiFillInstagram/></a>
                    <a href="https://www.tiktok.com/@jay_anniies_empire?_t=ZM-8us9KEMoK4j&_r=1"><AiFillTikTok/></a>
                </div>
                <div className="pp__description"><span className='pp__detail'>DETAILS:</span>{product.description}</div>
                <div className="pp__contact">
                <button onClick={contactOnWhatsApp }>Order Now</button>
                
      
                <button onClick={handleAddToCartClick}>Add to Cart</button>
                
                </div>
               
                </div>
                
                
                

                
                

                
            </div>
        </div>
    );
};

export default Productpage;
