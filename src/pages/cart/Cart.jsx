import React, { useState } from 'react'
import './Cart.css'
import Card from '../../components/CartCard/Card'
import { useSelector } from 'react-redux'
import emptyCart from '../../assets/emptycart.png'

const Cart = () => {
    let items=useSelector(state=>state);
    let total=items.cart.reduce((a,b)=>a+b.price,0);
  return (
    <div className='cart'>
        {items.cart.length<=0 ? <div className='empty-cart'>
            <img src={emptyCart} alt="empty card" />
            <h2>Empty Cart</h2>
        </div>:
        <div className="cartcard-section">
            {items.cart.map((item,idx)=>(
                <Card key={idx} name={item.name} price={item.price} image={item.image} id={item.id}/>
            ))}
            <div className="price-section">
                <span>Total Products: {items.cart.length}</span>
                <span>Total Price : {total}</span>
            </div>
        </div>
       }
    </div>
  )
}

export default Cart