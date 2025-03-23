import React, { useState } from "react";
import "./Home.css";
import Nav from "../../components/nav/Nav";
import bg from "../../assets/bg0.gif";
import { category } from "../../category";
import Product from "../../components/Product/Product";
import {dummydata} from '../../dummyData'

const Home = () => {
  let [cate,setCate]=useState(dummydata);
  function filterProducts(category){
    const updateData = dummydata.filter((item)=>(item.category===category));
    setCate(updateData);
  }
  return (
    <div className="home">
      <div className="hero-bg">
        <img src={bg} alt="hero background" />
      </div>

      <div className="category-section">
        {category.slice(0, 5).map((item, id) => (
          <div className="category-card" key={id} onClick={()=>(filterProducts(item.name))}>
            <img src={item.image} alt="image" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <h1>Trending Products</h1>
      <div className="product-section">
        {cate.slice(0,5).map((item,idx)=>(
          <Product key={idx} name={item.name} image={item.image} price={item.price} id={item.id}/>
        ))} 
      </div>
    </div>
  );
};

export default Home;
