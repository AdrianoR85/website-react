import { FaCrown } from 'react-icons/fa'
import SectionHeader from '../sectionHeader/SectionHeader'
import Card from '../../UI/card/Card'
import { programs } from '../../data'
import { Link } from 'react-router-dom'
import { AiFillCaretRight} from 'react-icons/ai'

import './programs.css'

export default function Programs() {
  return (
    <section className='programs '>
      <div className="container main__programs">
        <SectionHeader icon={<FaCrown/>} title="Programs" />

        <div className="programs__wrapper">
          {
            programs.map(({id, icon, title, info, path}) => (
              <Card className={"programs__program"} key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className='btn sm'>Learn More {<AiFillCaretRight />}</Link>
              </Card>
            )
            
            )
          }
        </div>
      </div>
    </section>
  )
}