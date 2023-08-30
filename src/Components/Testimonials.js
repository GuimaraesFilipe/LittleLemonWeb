import React from 'react'
import Testimonial from './Testimonial'
import Person1 from '../icons_assets/person1.png'
import Person2 from '../icons_assets/person2.png'
import Person3 from '../icons_assets/person3.png'

const Testimonials = () => {

  const testimonials=[
    {
      image:Person1,
      name:"John Doe",
      rating:"5.0",
      testimonial:"We had a fantastic night. The venue was spectacular, food amazing"
    },
    {
      image:Person2,
      name:"Mary Jane",
      rating:"4.7",
      testimonial:"Thank you very much for all your hard work, the outstanding meals and fantastic service."
    },
    {
      image:Person3,
      name:"Tom McGill",
      rating:"4.9",
      testimonial:"Thank you so much for organising such a seamless catering experience! The food was amazing, the staff were so polite and helpful. The guests raved about the food & we couldn’t have been any happier with the level and quality of service provided."
    }
  ]
  return (
    <section id="testimonials">
      <div className="container mt-5">
        <h2>Testimonials</h2>
        <div>
        {testimonials.map(testimonial =>{
          return(
            <Testimonial image={testimonial.image} name={testimonial.name} rating={testimonial.rating} testimonial={testimonial.testimonial}></Testimonial>
          )
        })}
        
          
        </div>
      </div>
    </section>
  )
}

export default Testimonials