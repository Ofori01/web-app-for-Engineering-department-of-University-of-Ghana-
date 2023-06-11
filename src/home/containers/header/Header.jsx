import React from 'react'
import './header.css';
import image from '../../assets/image.jpg'
const Header = () => {
  return (
    <div className='login-app__header section_padding' id = "home">
      <div className='login-app__header-content'>
        <h1 className='gradient__text'>Join us let's learn to build something amazing together</h1>
        <p>
          Technology is rapidly growing with changing demands in the industry, it is pertinent for an Engineer to be at the pinancle of their skill set. At the Engineering School of the University of Ghana, We uphold Intergrity and Innovation to train future-ready engineers. 
        </p>
        <div className='login-app__header-content__input'>
          <input type="email" placeholder='Your email' />
          <button type = 'button'> Join Us </button>

        </div>
      </div>
      <div className=' login-app__header-image'>
         <img src = {image} alt = "school of engineeering"/>
        </div>
    </div>
  )
}

export default Header
