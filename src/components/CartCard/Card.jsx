import React from 'react'
import './Card.css'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice';

const Card = ({name,image,price,id}) => {
    let dispatch=useDispatch();
  return (
    <div className='cartcard'>
        <div className="left-card">
            <img src={image} alt="" />
            <div className="name-price">
                <span>{name}</span>
                <span>Rs. {price}/-</span>
            </div>
        </div>
        <div className="right-card">
            <button onClick={()=>{dispatch(RemoveItem(id))
            alert("Items Removed from Cart...")}}>Remove <MdOutlineDeleteOutline /></button>
        </div>
    </div>
  )
}

export default Card