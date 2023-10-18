import { useState } from 'react';
import SectionHeader from '../sectionHeader/SectionHeader'
import Card from '../../UI/card/Card';
import { ImQuotesLeft } from 'react-icons/im'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { testimonials} from '../../data'
import './testimonials.css';

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const {name, quote, job, avatar} = testimonials[index]

  function prevTestimonialHandler() {
    setIndex(index - 1)
    if(index <= 0) {
      setIndex(testimonials.length - 1)
    }
  }

  function nextTestimonialHandler() {
    setIndex(index + 1)
    if (index >= (testimonials.length -1)){
      setIndex(0)
    } 
  }

  return(
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHeader icon={<ImQuotesLeft/>} title='Testimonials' className='testimonials__head'/>
        <Card className='testimonial'>
          <div className="testimonials__avatar">
            <img src={avatar} alt="name" />
          </div>
          <p className='testimonial__quote'>{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className='testimonial__title'>{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button className="testimonials__btn" onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle/></button>
          <button className="testimonials__btn" onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle/></button>
        </div>
      </div>
    </section>
  )
}