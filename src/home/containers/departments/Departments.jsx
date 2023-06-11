import React from 'react';
import Feature from '../../components/feature/Feature';
import './departments.css';

const departmentsData = [
  {
    title: ' Building Improving ',
    text: 'Become the best version of engineers for the world with a supportive ecosystem for learning and practising',
  },
  {
    title: 'Machine Learning?',
    text: 'Machine Learning Enginners are the in high-demand in recent times. We provide hands on training in Computer Vision for Ml development. ',
  },
  {
    title: 'Processing and Stroing',
    text: 'Become an Engineer adept at using mordern technology to provide the best solutions for preserving food in the industry.',
  },
  {
    title: 'Gene Editing',
    text: 'Analyzing genomes and selecting the best genes to improve a species survial or improving a particular trait is a sought after Skill in the Biomedical Engineering space ..',
  },
];

const  Departments = () => (
  <div className="login-app__features section__padding" id="departments">
    <div className="login-app__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Pick Up a Form to get started</p>
    </div>
    <div className="login-app__features-container">
      {departmentsData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Departments;