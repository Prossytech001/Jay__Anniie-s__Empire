import React from 'react'
import "../shopping/Shop.css"
import { Link } from 'react-router-dom'
import { feature } from './Shopfile'
import { useState, useEffect,useRef  } from 'react'
import "../Navbar/Nav"
import { FaStar } from "react-icons/fa6";

const Shop = ({searchTerm, onAddToCart}) => {


   

    const [visibleProducts, setVisibleProducts] = useState(6); 
    const [filteredProducts, setFilteredProducts] = useState(feature);
    const loader = useRef(null);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredProducts(feature);
            setVisibleProducts(6);
        } else {
            const filtered = feature.filter(product => 
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.price.toString().includes(searchTerm)
            );
            setFilteredProducts(filtered);
            setVisibleProducts(6);
        }
    }, [searchTerm, feature]);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisibleProducts(prevCount => prevCount + 6); // Load more products when loader is in view
            }
        }, { threshold: 1.0 });
    
        if (loader.current) {
            observer.observe(loader.current);
        }
    
        return () => {
            if (loader.current) {
                observer.unobserve(loader.current);
            }
        };
    }, [filteredProducts]); // Watch filteredProducts so the observer resets when new results are loaded



   
    
    
  return (
    <div >
        <div className="shop__header bg-gradient-to-r from-blue-500 to-purple-600 text-white ">
        <h1>Discover Our Exclusive Collection</h1>
        <p>Welcome to [Your Store Name], where we bring you the finest selection of unique and high-quality products. Browse through our collection, find what you love, and make it yours. Happy shopping!</p>
        </div>
            {filteredProducts.length === 0 ? (
                <div className="text-center text-gray-500">No products found</div>
            ) : (
                <div>
                    <div className="featurecontainer shopping__boby">
                        {filteredProducts.slice(0, visibleProducts).map(product => (
                            <div key={product.id} className="feature__card">
                                <div className="feature__container">
                                <Link to={`/product/${product.id}`} className='feature__link'>
                                                               <div className="img-feature">
                                                               <img src={product.image} alt={product.name} className="imgfeature" />
                                                               </div>
                                                               </Link>
                                <div className="product-details p-3">
                                    <h3 className="produt__name">{product.name}</h3>
                                    <p className="price__fea">&#8358;{product.price}</p>
                                    <p className="discount__fea">&#8358; {product.discount}</p>
                                    <p className="shop__star"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                                    <button 
                                        className="shop__cart" 
                                        onClick={() => onAddToCart(product)}>
                                        Add to Cart
                                    </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div ref={loader} className="loader h-10" >loading...</div>
                </div>
            )}
        </div>
  )
}

export default Shop
