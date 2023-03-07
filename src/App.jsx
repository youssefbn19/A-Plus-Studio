import React from 'react'
import './app.css'
import { AboutUs, Business, Client, Header, Navbar, Newsletter, Testimonial, Footer } from './components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Client/>
      <Business/>
      <AboutUs/>
      <Testimonial/>
      <Newsletter />
      <Footer/>
    </div>
  )
}

export default App