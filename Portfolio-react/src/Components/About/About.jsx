import React from 'react'
import './About.css'
import AnimatedGif from '../../AnimatedGif'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="back-mage">
          <AnimatedGif src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif" alt="Gif" />
        </div>
        <div className="about-me">
          <h1>About me</h1>
          <div className="underline"></div>
          <p>
            With a solid foundation in Computer Science and a passion for technology, 
            I've embarked on a fulfilling journey in the software development field. 
            Armed with a Master's degree in Computer Science from San Francisco Bay University, 
            I'm committed to continuous learning and growth. 
          </p>
        </div>
    </div>
  )
}

export default About