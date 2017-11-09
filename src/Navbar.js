import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <div>
    <nav>
      <NavLink to="/" className="logo">tastebuds</NavLink>
      <NavLink to="/matches" className="main-btn">My Matches</NavLink>
      <NavLink to="/messages" className="main-btn">Messages</NavLink>
    </nav>
  </div>
)

export default Navbar;
