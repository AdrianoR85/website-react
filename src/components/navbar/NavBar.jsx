import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {links} from '../../data'
import {FaBars, FaTimes} from 'react-icons/fa'

import './navbar.css'
import Logo from '../../images/logo.png'

export default function Navbar() {
  const [isNavShowing, setIsNavShowing] = useState(false)

  function showNavToggle() {
    setIsNavShowing(prev => !prev)
  }

  return(
    <nav>
      <div className="container nav__container">
       <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
        <img src={Logo} alt="Logo of the Gym" />
       </Link>
       <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
        {
          links.map(({name, path}, index) => 
              <li key={index}>
                <NavLink 
                  to={path} 
                  className={({isActive}) => isActive ? 'active-nav' : ''}
                  onClick={showNavToggle} 
                >
                  {name}
                </NavLink>
              </li>
          )
        }
       </ul>
       <button className='nav__toggle-btn' onClick={showNavToggle}>
        
        {isNavShowing ? <FaTimes /> : <FaBars />}
       </button>
      </div>
    </nav>
  )
}