import React from 'react'
import './Nav.css'
import { FaShopify } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className='nav'>
        <div className="top-nav">
            <div className="logo">
                <span>ShopSphere</span>
                <FaShopify/>
            </div>
            <div className="search-box">
                <input type="text" placeholder='Search Items...' />
                <button><FaSearch /></button>
            </div>
            <div className="cart-box">
            <FaCartShopping />
            <span>0</span>
            </div>
        </div>
        <div className="bottom-nav">
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
            <li>Contact</li>
        </div>
    </div>
  )
}

export default Nav