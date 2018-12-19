import React from 'react'
import { NavLink } from 'react-router-dom'

const Subnav = () => (
  <nav className="subnav">
    <div className="container">
      <NavLink exact to="/" className="subnav__item">
        <span className="subnav__text">Home</span>
      </NavLink>
      <NavLink exact to="/about" className="subnav__item">
        <span className="subnav__text">About</span>
      </NavLink>
      <NavLink exact to="/episodes" className="subnav__item">
        <span className="subnav__text">All Episodes</span>
      </NavLink>
      <NavLink to="/heart" className="subnav__item">
        <span className="subnav__text">Grow a Heart to Impart</span>
      </NavLink>
      <NavLink to="/listen" className="subnav__item">
        <span className="subnav__text">Listen</span>
      </NavLink>
    </div>
  </nav>
)

export default Subnav
