import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Blog</h1>
      <div className='links'>
    <ul>
    <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/newblog">New Blog</NavLink>
      </li>
    </ul>
    </div>
  </nav>
  )
}

export default Navbar