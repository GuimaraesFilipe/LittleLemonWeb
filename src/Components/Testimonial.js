import React from 'react'

const Testimonial = (props) => {
  return (
    <div className="testimonial">
      <div className='d-flex justify-content-center'>
        <img src={props.image} alt={props.name} />
        </div>
        <div className="content">
          <h4>{props.name}</h4>
          <h4>{props.rating}</h4>
          <div className='testimonialText'>
          <p>"{props.testimonial}"</p>
          </div>
        </div>
       
    </div>
  )
}

export default Testimonial