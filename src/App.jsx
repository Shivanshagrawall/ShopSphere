import React from 'react'
import Home from './pages/home/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>      
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App