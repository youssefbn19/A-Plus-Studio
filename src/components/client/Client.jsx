import React from 'react'
import './client.css'
import Google from '../../assets/google _logo.svg'
import Airbnb from '../../assets/airbnb_logo.svg'
import UberEats from '../../assets/uber_eats _logo.svg'
import Amazon from '../../assets/amazon_logo.svg'


const Client = () => {
    const logos = [
        {src:Google,alt:'google logo'},
        {src:Airbnb,alt:'Airbnb logo'},
        {src:UberEats,alt:'Uber eats logo'},
        {src:Amazon,alt:'amazon logo'},
    ]
  return (
    <div className='client_container section_margin' id='our_client'>
        <div className="client_content">
            <h1>Our Clients</h1>
            <p>Several selected clients, who already believe in our service.</p>
        </div>
        <div className="client_logos">
            {
                logos.map((logo,i) => <img src={logo.src} alt={logo.alt} key={i}/>)
            }
        </div>
    </div>
  )
}

export default Client