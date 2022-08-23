import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false)
  const handleToggle = () => {
    setIsopen(!isOpen)
  }
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='Beach Resort' />
          </Link>
          <button
            type='button'
            className='nav-btn'
            onClick={() => handleToggle()}
          >
            <FaAlignRight className='nav-icon'></FaAlignRight>
          </button>
        </div>
        <ul className={isOpen ? ' show-nav nav-links' : 'nav-links'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/rooms'>Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
