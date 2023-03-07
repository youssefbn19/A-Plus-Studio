import React from 'react'
import './footer.css'
import Facebook from "../../assets/fb_icon.svg"
import Twitter from "../../assets/tw_icon.svg"
import Linkedin from "../../assets/in_icon.svg"
import Logo from "../../assets/A+Studio_logo.svg";

const Links = ({title, links})=>{
    return (
        <div className="footer_links">
            <h4>{title}</h4>
            <ul>
                {
                    links.map((link,i) => <li key={i}><a href='#footer'>{link}</a></li>)
                }
            </ul>
        </div>
    )
}
const Footer = () => {
    const footerLinks =[
        {title:'what we do',links:['Web design','App design','Social media manage','Market nalysis projects']},
        {title:'company',links:['About us','Career','Became investor']},
        {title:'support',links:['FAQ','Policy','Business']},
        {title:'contact',links:['whatsApp','support 24/7']}
    ];
  return (
    <div className="footer  section_margin">
        <div className='footer_container' id='footer'>
                <div className="footer_about_us">
                    <img src={Logo} alt="A+ Studio" />
                    <p>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
                    <div className="social_media">
                        <a href='https://www.facebook.com/ybchibi' target='_blank'><img src={Facebook} alt="Facebook logo" /></a>
                        <a href='https://twitter.com/YBChibi' target='_blank'><img src={Twitter} alt="Twitter logo" /></a>
                        <a href='https://www.linkedin.com/in/youssef-benchiir/' target='_blank'><img src={Linkedin} alt="Linkedin logo" /></a>
                    </div>
                </div>
                <div className="footer_links_container">
                    {
                        footerLinks.map((link,i) => <Links links={link.links} title={link.title} key={i}/>)
                    }
                </div>
        </div>
        <p className='copyright'>
            Copyright © 2022 Designed By Avi Yansah & Created Youssef Benchiir  
        </p>
    </div>
  )
}

export default Footer