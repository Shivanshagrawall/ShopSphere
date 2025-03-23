import React from 'react'
import './Product.css'
import { useDispatch } from 'react-redux'
import { AddItem } from '../../redux/cartSlice';

const Product = ({name,image,price,id}) => {
  let dispatch=useDispatch();
  return (
    <div className='product' key={id}>
        <img src={image} alt="image" />
        <div className="product-details">
            <span className="name">{name}</span>
            <span className='price'>Rs {price}/-</span>
            <button onClick={()=>{
              dispatch(AddItem({name:name,image:image,price:price,id:id}))
              alert("Item Added to Cart...")
            }}>Add +</button>
        </div>
    </div>
  )
}

export default Product