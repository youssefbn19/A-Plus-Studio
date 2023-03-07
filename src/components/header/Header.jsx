import React from 'react'
import HeaderImg from '../../assets/header_img-min.jpg'
import './header.css'

const Header = () => {
  return (
    <div className='header_container'>
        <div className="header_content">
            <h1>A Digital Product Agency</h1>
            <p>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
            <a href='#home' className='btn_primary'>Contact now</a>
        </div>
        <div className="header_img">
            <img src={HeaderImg} alt="Collaboration Meeting" />
        </div>
    </div>
  )
}

export default Header