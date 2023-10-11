import { Link } from 'react-router-dom';
import './mainHeader.css';

import image from '../../images/main_header.png'

export default function MainHeader() {
  return(
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, iusto sapiente eveniet veritatis enim minus cumque minima aliquam doloremque.</p>
          <Link to='/programs' className='btn lg'>Get Started</Link>
        </div>

        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={image} alt="Man practicing sport" />
          </div>
      </div>
      </div>

      
    </header>
  )
}