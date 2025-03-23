import React from 'react'
import './Product.css'

const Product = ({name,image,price,id}) => {
  return (
    <div className='product' key={id}>
        <img src={image} alt="image" />
        <div className="product-details">
            <span className="name">{name}</span>
            <span className='price'>Rs {price}/-</span>
            <button>Add +</button>
        </div>
    </div>
  )
}

export default Product