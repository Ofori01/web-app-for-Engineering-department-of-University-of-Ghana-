import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="login-app__possibility section__padding" id="possibility">
    <div className="login-app__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="login-app__possibility-content">
      <h4>Pick Up A Form And Join US</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>By joining the engineering school at the University of Ghana, students can benefit from its exceptional academic programs, practical learning experiences, industry connections, and a supportive community. It is a stepping stone towards a successful career in engineering, equipping students with the skills and knowledge needed to make a significant impact in the field..</p>
      <h4>Join Other Eager Minds Like Yours </h4>
    </div>
  </div>
);

export default Possibility;