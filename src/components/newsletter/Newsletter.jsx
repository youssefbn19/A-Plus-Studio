import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter_bg section_padding" id='newsletter'>    
        <div className='newsletter_container'>
            <div className="newsletter_title">
                <h1>Subscribe Newsletter</h1>
                <p>I will update good news and promotion service not spam</p>
            </div>
            <form className="form_container">
                <input type='email' placeholder='Enter your email address..'/>
                <button type='submit' className='btn_primary'>Contact us</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter