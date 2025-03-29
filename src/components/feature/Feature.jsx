/*import React from 'react'
import "./Feature.css"
import { useState } from 'react';
import { feature } from './Featurefile';

const Feature = () => {

    
    const [filteredfeature, setFilteredfeature] = useState(feature);

    const filterfeature = (category) => {
        if (category === 'All') {
            setFilteredfeature(feature);
        } else {
            const filtered = feature.filter(features => features.category === category);
            setFilteredfeature(filtered);
        }
    };
  return (
    <div className="feature">
      <div className="">
                <button onClick={() => filterfeature('All')}>All Products</button>
                <button onClick={() => filterfeature('Sex Toy')}>Sex Toys</button>
                <button onClick={() => filterfeature('Aphrodisiac')}>Aphrodisiacs</button>
                <button onClick={() => filterfeature('Skin Care')}>Skin Care</button>
                <button onClick={() => filterfeature('Ring Light')}>Ring Lights</button>
            </div>
            <div className="">
                {filteredfeature.map(product => (
                    <div key={product.id} className="">
                        <div className="p-4">
                            <img src={product.image} alt={product.name} className="" />
                            <h3 className="">{product.name}</h3>
                            <p className="">Category: {product.category}</p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Feature*/

import React, { useState, useEffect } from 'react';
import './Feature.css';
import { Star } from 'lucide-react';
import { IoIosAdd } from "react-icons/io";
import {Link} from 'react-router-dom';


import { feature } from './Featurefile';

const Feature = () => {
    const initialProducts = feature.map(product => ({ ...product, ratings: [0, 0, 0, 0, 0] }));

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(filteredProducts));
    }, [filteredProducts]);

    
    useEffect(() => {
        const savedProducts = localStorage.getItem('products');
        if (savedProducts) {
            try {
                const parsedProducts = JSON.parse(savedProducts);
                if (Array.isArray(parsedProducts) && parsedProducts.length > 0) {
                    setFilteredProducts(parsedProducts);
                } else {
                    setFilteredProducts(initialProducts);
                }
            } catch (error) {
                console.error('Error parsing saved products:', error);
                setFilteredProducts(initialProducts);
            }
        } else {
            setFilteredProducts(initialProducts);
        }
    }, []);
    

   

    const filterProducts = (category) => {
        if (category === 'All') {
            setFilteredProducts(initialProducts);
        } else {
            const filtered = initialProducts.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    const handleRating = (productId, ratingValue) => {
        const updatedProducts = filteredProducts.map(product => {
            if (product.id === productId) {
                const newRatings = [...product.ratings];
                newRatings[ratingValue - 1] += 1;
                return { ...product, ratings: newRatings };
            }
            return product;
        });
        setFilteredProducts(updatedProducts);
    };

    const calculateOverallPercentage = (ratings) => {
        const total = ratings.reduce((sum, count) => sum + count, 0);
        if (total === 0) return 0;
        const totalStars = ratings.reduce((sum, count, index) => sum + (count * (index + 1)), 0);
        return ((totalStars / (total * 5)) * 100).toFixed(1);
    };
 
    

    return (
        <div className="feature ">
            <h1 className="feature-h1">Feature Product</h1>
            <div className="feature_p">
            <p className="feature-p">Discover our curated selection of products designed to enhance your lifestyle. From sensual delights to skincare essentials and illuminating ring lights, explore products that cater to your unique needs.</p>
            </div>
           
            <div className="feature__btn">
                <button onClick={() => filterProducts('All')}>All Products <IoIosAdd className='add__fea'/></button>
                <button onClick={() => filterProducts('Sex Toy')}>Sex Toys <IoIosAdd className='add__fea'/></button>
                <button onClick={() => filterProducts('Aphrodisiac')}>Aphrodisiacs <IoIosAdd className='add__fea'/></button>
                <button onClick={() => filterProducts('Lip Beauty')}>Lip Beauty <IoIosAdd className='add__fea'/></button>
                <button onClick={() => filterProducts('Ring Light')}>Ring Lights <IoIosAdd className='add__fea'/></button>
            </div>

           
            
            <div className="featurecontainer">
                {filteredProducts.map(product => {
                    const overallPercentage = calculateOverallPercentage(product.ratings);
                    return (
                        
                        <div key={product.id} className="feature__card">
                            <div className="feature__container">
                            <Link to={`/product/${product.id}`} className='feature__link'>
                                <div className="img-feature">
                                <img src={product.image} alt={product.name} className="imgfeature" />
                                </div>
                               
                                <h3 className="produt__name">{product.name}</h3>
                                <p className="price__fea"> &#8358;{product.price}</p>
                                <p className="discount__fea">&#8358; {product.discount}</p>
                                 </Link>

                                <div className="star__fea flex items-center space-x-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className={`Ster`}
                                            onClick={() => handleRating(product.id, star)}
                                        />
                                    ))}
                                     <div className="">
                                     
                                </div>
                                </div>
                                
                               
                            </div>
                        </div>
                      
                    );
                })}
            </div>

        </div>
    );
};

export default Feature;

