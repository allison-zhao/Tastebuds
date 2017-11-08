import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <div>
    <nav>
      <NavLink to="/" className="rainbow">GIPHR</NavLink>
      <NavLink to="/matches" className="main-btn">My Matches</NavLink>
      <NavLink to="/getlucky" className="main-btn">Get Lucky</NavLink>
    </nav>
  </div>
)

export default Navbar;
