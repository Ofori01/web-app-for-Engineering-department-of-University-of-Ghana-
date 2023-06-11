import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
  

  <>
    <p> <a href = "#home">Home</a></p>
          <p> <a href = "#about">About School Of Engineering</a></p>
          <p> <a href = "#departments">Departments</a></p>
          <p> <a href = "#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('login', {replace: true});}
  

  

  return (
    <div className='login-app__navbar'>
      <div className='login-app__navbar-links'>
        <div className='login-app-links_logo'>
          <img src= {logo} alt = "logo" />

        </div>
        <div className='login-app__navbar-links_container'> 
          <Menu />
        </div>
      </div>
        <div className='login-app__navbar-sign'>
          <p onClick={handleClick}>Sign in</p>
          <button type = "button" onClick= {handleClick}>Sign up</button>
        </div>
          <div className='login-app__navbar-menu'>
              {toggleMenu 
                ? <RiCloseLine color = '#fff' size= {27} onClick = {() => setToggleMenu(false)} />
                : <RiMenu3Line color = '#fff' size= {27} onClick = {() => setToggleMenu(true)} />
              }
              {toggleMenu && (
                <div className='login-app__navbar-menu_container scale-up-center'>
                  <div className='login-app__navbar-menu_container-links'> 
                  <Menu />
                    <div className='login-app__navbar-menu_container-links-sign'>
                      <p>Sign in</p>
                      <button type = "button">Sign up</button>
                    </div>
                  </div>
                 </div>
              )}

          </div>

    </div>
  )
}


export default Navbar