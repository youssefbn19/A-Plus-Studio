import React from 'react'
import './testimonial.css'
import Slider from 'react-slick'
import Person from '../../assets/person_img-min.jpg'
import People from '../../assets/people_img-min.jpg'

const Testimonial = () => {
    const settings = {
        dots:true,
        infinite:true,
        speed: 800,
        slidesToScroll:1,
        slidesToShow:1,
        arrows: false
    }
  return (
    <div className="testimonial_container section_margin" id='testimonials'>
        <h1>What our happy client say</h1>
        <p>Several selected clients, who already believe in our service.</p>
        <div className="testimonial_content_container"> 
            <div className="person_img_container">
                <img src={Person} alt="Smiling person" /> 
            </div> 
            <div className="testimonial_slider">
                <Slider {...settings}>
                    <div className="testimonial_content">
                        <h3>Matthew Paul</h3>
                        <p>Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.</p>
                    </div>
                    <div className="testimonial_content">
                        <h3>Jessica Andrea</h3>
                        <p>Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.</p>
                    </div>
                    <div className="testimonial_content">
                        <h3>Andrew Tipalo</h3>
                        <p>Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.</p>
                    </div>
                </Slider>
            </div>
            <div className="people_img_container">
                <img src={People} alt="Happy People"  />
            </div>
        </div>
    </div>
  )
}

export default Testimonial