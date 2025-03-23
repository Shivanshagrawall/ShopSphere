import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <form action="https://formspree.io/f/xvgkalle" method='POST'>
            <input type="text" name="username" placeholder='Enter your Name...' required />
            <input type="email" name="email" placeholder='Enter your Email...' required />
            <textarea name="message" placeholder='Enter your Message...' required></textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Contact