import SectionHeader from '../sectionHeader/SectionHeader'
import { FaQuestion } from 'react-icons/fa'
import { faqs } from '../../data'
import FAQ from '../faq/FAQ'

import './faqs.css'

export default function FAQs() {
  return (
    <section className='fqas'>
      <div className="container faqs__container">
        <SectionHeader icon={<FaQuestion/>} title='FAQs'/>
        <div className="faqs__wrapper">
          {
            faqs.map(({id, question, answer}) => (
              <FAQ key={id} question={question} answer={answer}/>
                
            ))
          }
        </div>
      </div>
    </section>
  )
}