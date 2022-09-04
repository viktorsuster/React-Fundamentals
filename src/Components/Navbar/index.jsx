import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBloggerB, FaPlusCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to="/">
      <h1><FaBloggerB className='myReact-icon-logo' />log</h1>
      </NavLink>
      <div className='links'>
    <ul>
    <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/newblog">New Blog <FaPlusCircle className='myReact-icon-add'/></NavLink>
      </li>
    </ul>
    </div>
  </nav>
  )
}

export default Navbar