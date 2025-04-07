import React, { useState } from "react";
import "./Shop.css";
import { category } from "../../category";
import { dummydata } from "../../dummyData";
import Product from "../../components/Product/Product";
import { FaShopify } from "react-icons/fa";

const Shop = () => {
  let [cate, setCate] = useState(dummydata);

  function filterProducts(category) {
    if (category === "All") {
      setCate(dummydata);
    } else {
      const updateData = dummydata.filter((item) => item.category === category);
      setCate(updateData);
    }
  }

  return (
    <div className="shop">
      <div className="heading">
        <span>Shop</span>
        <FaShopify />
      </div>
      <div className="category-section">
        {category.map((item, id) => (
          <div
            className="category-card"
            key={id}
            onClick={() => filterProducts(item.name)}
          >
            <img src={item.image} alt="image" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="product-section">
        {cate.map((item, idx) => (
          <Product
            key={idx}
            name={item.name}
            image={item.image}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
