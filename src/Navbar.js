import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" className="logo">tastebuds</NavLink>
        <NavLink to="/matches" className="main-btn">My Matches</NavLink>
        <NavLink to="/recommendations" className="main-btn">Recommendations</NavLink>
        <NavLink to="/" className="main-btn">Logout</NavLink>
      </nav>
    </div>
  )
}

export default Navbar;



