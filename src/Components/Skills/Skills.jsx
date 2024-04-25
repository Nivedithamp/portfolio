import React from 'react';
import './Skills.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Skills = () => {
  return (
    <div id='Skills' className="main">
        
        <div className='title'>
            <h1>Skills</h1>
            <img src={theme_pattern} alt="" />
        </div>
        
    <div className='skills'>
        <div className="sec1">
        <div className="skill"><p>Python</p><hr style={{width:"70%"}} /></div>
        <div className="skill"><p>JavaScript</p><hr style={{width:"55%"}} /></div>
        <div className="skill"><p>Java</p><hr style={{width:"60%"}} /></div>
        <div className="skill"><p>MongoDB</p><hr style={{width:"80%"}} /></div>
        <div className="skill"><p>Node.js</p><hr style={{width:"70%"}} /></div>
        <div className="skill"><p>React.js</p><hr style={{width:"45%"}} /></div>
        </div>
        <div className="sec2">
        <div className="skill"><p>SQL</p><hr style={{width:"70%"}} /></div>
        <div className="skill"><p>NodeJs</p><hr style={{width:"55%"}} /></div>
        <div className="skill"><p>Git/GitHub</p><hr style={{width:"60%"}} /></div>
        <div className="skill"><p>AWS</p><hr style={{width:"40%"}} /></div>
        <div className="skill"><p>Docker</p><hr style={{width:"55%"}} /></div>
        <div className="skill"><p>Restful API</p><hr style={{width:"45%"}} /></div>
        </div>
    </div>


    <div className="certification">
    <div className='about-achievement'>
        <h1>Certification</h1>
        <p>J.P.Morgan - Software Engineering Job Simulation</p>
        <p className='link'>Forage </p>
        <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_ejqJHmukwtp6XYAFr_1711064000527_completion_certificate.pdf" target="_blank" rel="noreferrer">click here to view</a>
    </div>
    </div>
    
    </div>
  )
}

export default Skills