import React from 'react';
import './Hero.css';
import Photo from '../../assets/Profile.png';
import icons_github from '../../assets/icons_github.svg';
import icons_linkedin from '../../assets/icons_linkedin.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={Photo} alt='' />
      <h1><span>I'm Niveditha Padmaraju,</span> Software Developer based in California, USA.</h1>
      <p>Committed to continuous learning and staying updated with the latest trends and advancements in software development</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
          <a href="https://drive.google.com/uc?export=download&id=1Hx7xiX66VaBfpXUCsdQqOHJ1VpNaAh_O">My Resume</a>
        </div>
      </div>
      <div className="links">
        <a href="https://www.linkedin.com/in/niveditha-padmaraju-1775ba20a/" target="_blank" rel="noopener noreferrer">
          <img src={icons_linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Nivedithamp" target="_blank" rel="noopener noreferrer">
          <img src={icons_github} alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
