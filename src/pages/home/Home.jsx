import React from 'react'
import './Home.css'
import Nav from '../../components/nav/Nav'
import bg from '../../assets/bg0.gif'
import { category } from '../../category'

const Home = () => {
  return (
    <div className='home'>
        <div className="hero-bg">
            <img src={bg} alt="hero background" />
        </div>

        <div className="category-section">
            {category.slice(0,5).map((item,id)=>(
                <div className="category-card" key={id}>
                    <img src={item.image} alt="image" />
                    <span>{item.name}</span>
                </div>
      ))}

        </div>
        
    </div>
  )
}

export default Home