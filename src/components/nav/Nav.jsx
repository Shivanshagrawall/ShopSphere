import React from 'react'
import './Nav.css'
import { FaShopify } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
const Nav = () => {
    let dispatch=useDispatch();
    let items=useSelector(state=>state);
    console.log(items);
    
  return (
    <div className='nav'>
        <div className="top-nav">
            <Link to='/'><div className="logo">
                <span>ShopSphere</span>
                <FaShopify/>
            </div>
            </Link>
            <div className="search-box">
                <input type="text" placeholder='Search Items...' />
                <button><FaSearch /></button>
            </div>
            <Link to='/cart'>
            
            <div className="cart-box">
            <FaCartShopping />
            <span>{items.cart.length}</span>
            </div></Link>
        </div>
        <div className="bottom-nav">
            <Link to='/'><li>Home</li></Link>
            <Link to='/shop'><li>Shop</li></Link>
            <Link to='/cart'><li>Cart</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
        </div>
    </div>
  )
}

export default Nav