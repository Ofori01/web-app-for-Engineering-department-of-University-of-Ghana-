import React from 'react'
import './about.css';
import { Feature } from '../../components';
const About = () => {
  return (
    <div className='login-app__about section__margin' id = "about">
      <div className='login-app__about-feature'> 
        <Feature title="About School Of Engineering" text= "The engineering school at the University of Ghana is known as the College of Engineering. It is committed to providing quality education and training in various engineering disciplines. The College offers undergraduate and postgraduate programs in fields such as Civil Engineering, Electrical and Electronic Engineering, Mechanical Engineering, and Computer Engineering."/>
      </div>
      <div className='login-app__about-heading'>
        <h1 className='gradient__text'> The possibilities are beyond your imaginatioin</h1>
        <p> Explore The future</p>
      </div>
      <div className='login-app__about-container'></div>
        <Feature title= "Facilities" text="Fully Equiped AI laboratories, Computer Vision Laboratories, State of the Art Electeonics Laboratory, Fibre Laboratories, Food Preservation Laborations and Ultra Mordern Biomedical Engineering Laboratories"/>
        <Feature title= "Practicality" text = "The engineering school at the University of Ghana is committed to providing its students with a practical and hands-on learning experience. Recognizing the significance of practical knowledge in engineering education, the school has designed its curriculum and teaching methodologies to emphasize practical applications." />
        <Feature title = "Community" text = "The engineering school at the University of Ghana is renowned for its vibrant and supportive community that fosters effective teaching, active learning, and skill-building. Students who join the engineering program become part of a collaborative environment that promotes personal growth and academic excellence." />
    </div>
  )
}

export default About