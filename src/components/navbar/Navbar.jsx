import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../assets/A+Studio_logo.svg'
import {CiMenuFries} from 'react-icons/ci'
import {IoCloseOutline} from 'react-icons/io5'

const Links = ()=>(
        <ul className="nav_links_container">
            <li><a href="#home">Home</a></li>
            <li><a href="#our_client">Our Clients</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
        </ul>
)
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar_container section_margin">
        <div className="logo_container">
            <img src={Logo} alt="A+ Studio Logo"/>
        </div>
        <div className="links_container"> 
            <Links />
        </div>
        <div className="navbar_menu_container" onClick={()=> setToggle(!toggle)}>
            {toggle?<IoCloseOutline size={25}/> :<CiMenuFries size={22}/>}
            {toggle && <div className="slide-left nav_link_menu"><Links /></div>}
        </div>
    </div>
  )
}

export default Navbar