/*import React ,{useEffect, useState, useRef, useLocation}from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Nav.css'
import img1 from "../../assets/img/ANNIIE-logo.png"
import { GoSearch } from "react-icons/go";
import { CgMenuRight } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
const Nav = ({ searchTerm, setSearchTerm }) => {

    const [activeLink, setActiveLink] = useState("/");
    const location = useLocation();
    
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);



    const [isOpen, setIsOpen] = useState(false);
   const sidebarRef = useRef(null);


   
  const showSidebar1 = () => {
   setIsOpen(true)
};
       const hideSidebar1 = () => {
        setIsOpen(false);
};


useEffect(() => {
  const handleClickOutside = (event) => {
  if (sidebarRef.current && !sidebarRef.current.contains(event.target)){
    hideSidebar1();
  }
};
   if (isOpen) {
    document.addEventListener("mousedown", handleClickOutside);
   } else {
    document.removeEventListener("mousedown", handleClickOutside);
   }

   return () => document.removeEventListener("mousedown", handleClickOutside);
}, [isOpen]);
  



  return (
    <header className="nav  " >
        <nav className="nav__container flex justify-between items-center">
            <Link to="/" className="nav__logo">
            <img src={img1} alt="" className='logo-img w-15'/>
            </Link>
            <div className="input">
                <Link to="/shop">
            <input 
                    type="text" 
                    placeholder="name,price,category" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
                <button><GoSearch/></button>
                </Link>
                
            </div>
            <div className="xx2" onClick={showSidebar1}><CgMenuRight/></div>
           
       
            <div ref={sidebarRef} className={`sidebar2 ${isOpen ? "open" : ""}`}> 
          
      
    
          <div className="xx2" onClick={hideSidebar1}><RiCloseFill /></div>
         
         
         <Link to="/" className={activeLink === "/" ? "active" : ""} onClick={() => { setActiveLink("/"); hideSidebar1(); }}>
             <p>Home</p>
         </Link>
         <Link to="/shop" className={activeLink === "/shop" ? "active" : ""} onClick={() => { setActiveLink("/shop"); hideSidebar1(); }}>
             <p>Shop</p>
         </Link>
         <Link to="/contact" className={activeLink === "/Tcontact" ? "active" : ""} onClick={() => { setActiveLink("/contact"); hideSidebar1(); }}>
             <p>Contact</p>
         </Link>
     
     
     
     
     
     </div>
        </nav>
      
    </header>
  )
}

export default Nav/*
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Nav.css';
import img1 from "../../assets/img/ANNIIE-logo.png";
import { GoSearch } from "react-icons/go";
import { CgMenuRight } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";

const Nav = ({ searchTerm, setSearchTerm }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarClose = () => setIsSidebarOpen(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isSidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.menu-icon')) {
        handleSidebarClose();
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isSidebarOpen]);

  return (
    <header className="nav">
      <nav className="nav__container flex justify-between items-center">
        <Link to="/" className="nav__logo">
          <img src={img1} alt="" className='logo-img w-15'/>
        </Link>

        <div className="input">
          <Link to="/shop">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <button><GoSearch/></button>
          </Link>
        </div>

        {/* Menu Icon *//*}
        <div className="menu-icon" onClick={() => setIsSidebarOpen(true)}>
          <CgMenuRight/>
        </div>

        {/* Sidebar *//*}
        {isSidebarOpen && (
          <div className="sidebar-overlay fixed inset-0 bg-black bg-opacity-50 z-50" onClick={handleSidebarClose}>
            <div className="sidebar fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg z-50 p-4"
                 onClick={(e) => e.stopPropagation()}>
              <div className="close-icon" onClick={handleSidebarClose}>
                <RiCloseFill/>
              </div>
              <ul className="nav__menu">
                <li className="nav__item">
                  <Link to="/" className="nav__link" onClick={handleSidebarClose}>Home</Link>
                </li>
                <li className="nav__item">
                  <Link to="/shop" className="nav__link" onClick={handleSidebarClose}>Shop</Link>
                </li>
                <li className="nav__item">
                  <Link to="/contact" className="nav__link" onClick={handleSidebarClose}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Nav;*/

import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Navbar/Nav.css';
import img1 from "../../assets/img/ANNIIE-logo.png";
import { GoSearch } from "react-icons/go";
import { CgMenuRight } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";

const Nav = ({ searchTerm, setSearchTerm }) => {
    const [activeLink, setActiveLink] = useState("/");
    const location = useLocation();


    const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const showSidebar = () => {
        setIsOpen(true);
    };

    const hideSidebar = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                hideSidebar();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);




    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > lastScrollY) {
            setIsFixed(true); // Set navbar to fixed when scrolling down
          } else {
            setIsFixed(false); // Remove fixed position when scrolling up
          }
          setLastScrollY(window.scrollY);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, [lastScrollY]);

    return (
        <header className={`nav ${isFixed ? "fixed" : "static"}`}>
            <nav className="nav__container flex justify-between items-center">
                <Link to="/" className="nav__logo">
                    <img src={img1} alt="" className='logo-img w-15'/>
                </Link>

                <div className="input">
                    <Link to="/shop">
                        <input 
                            type="text" 
                            placeholder="name, price, category" 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        <button><GoSearch/></button>
                    </Link>
                </div>
                

                <div className="xx2" onClick={showSidebar}>
                    <CgMenuRight className='menu-icon'/>
                </div>

                <div ref={sidebarRef} className={`sidebar2 ${isOpen ? "open" : ""}`}>
                    <div className="xx2" onClick={hideSidebar}>
                        <RiCloseFill  className='close-icon'/>
                    </div>
                    <ul className='sidebars2'>
                    <li className="nav__item">
                    <Link to="/" className={`nav__link ${activeLink === "/" ? "active" : ""}`} onClick={() => { setActiveLink("/"); hideSidebar(); }}>
                        <p>Home</p>
                    </Link>
                    </li>
                    <li className="nav__item">
                    <Link to="/shop" className={`nav__link ${activeLink === "/shop" ? "active" : ""}`} onClick={() => { setActiveLink("/shop"); hideSidebar(); }}>
                        <p>Shop</p>
                    </Link>
                    </li>
                    <li className="nav__item">
                    <Link to="/contact" className={`nav__link ${activeLink === "/contact" ? "active" : ""}`} onClick={() => { setActiveLink("/contact"); hideSidebar(); }}>
                        <p>Contact</p>
                    </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Nav;



