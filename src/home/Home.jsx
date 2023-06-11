import React from 'react'
import { CTA, Navbar } from './components';
import {Footer, Blog, Possibility, Departments, About, Header} from './containers';
import './home.css';
const Home = () => {
  return (
    <div className = "App">
      <div className= 'gradient__bg'>
        <Navbar/>
        <Header />

      </div>
      <About />
      <Departments />
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Home
