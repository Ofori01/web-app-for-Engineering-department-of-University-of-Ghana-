import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';

import { Home } from './home';
import {Sign} from './sign';


const App = () => {
  return (
    <Routes>
      <Route path = '/' element = {<Home />}/>
      <Route path = 'login' element = {<Sign />} />
    </Routes>
  )
}

export default App

/*import { School, CTA, Navbar } from './components';
import {Footer, Blog, Possibility, Departments, About, Header} from './containers';
import './App.css';
const App = () => {
  return (
    <div className = "App">
      <div className= 'gradient__bg'>
        <Navbar/>
        <Header />

      </div>
      <School />
      <About />
      <Departments />
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
*/