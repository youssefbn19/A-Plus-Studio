import React from 'react'
import "./about_us.css"
import Collaboration from '../../assets/collaboration_img-min.jpg'

const AboutUs = () => {
  return (
    <div className="about_us_container section_margin" id='about'>
        <div className="about_us_img">
            <img src={Collaboration} alt="collaborative meeting" />
        </div>
        <div className="about_us_content">
            <h1>Great Digital Product Agency since 2016 </h1>
            <p>Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</p>
        </div>
    </div>
  )
}

export default AboutUs