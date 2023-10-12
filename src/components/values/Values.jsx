/* eslint-disable jsx-a11y/img-redundant-alt */
import image from '../../images/values.jpg'
import SectionHeader from '../sectionHeader/SectionHeader'
import { GiCutDiamond } from 'react-icons/gi'
import { values } from '../../data'
import Card from '../../UI/card/Card'

import './values.css'

export default function Values( ) {
  return (
    <section>
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={image} alt="Value picture" />
          </div>
        </div>
        <div className="values__right">
          <SectionHeader icon={<GiCutDiamond/>} title="Values" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat saepe in?</p>
          <div className='values__wrapper'>
            {
              values.map(({id, icon, title, desc}) => (
                <Card className='values__value' key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}