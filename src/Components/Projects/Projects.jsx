import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import project_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id='Projects' className='projects'>
        <div className="project-title">
            <h1>Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="project-container">
            {project_data.map((service,index)=> {
                return <div key={index} className='project-format'>
                    <h3>{service.w_no}</h3>
                    <h2>{service.w_name}</h2>
                    <p>{service.w_desc}</p>
                    <div className='readmore'>
                    <a href={service.w_link} target="_blank" rel="noreferrer">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </a>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Projects