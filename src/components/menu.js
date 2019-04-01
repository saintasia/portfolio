import React from 'react';
import Link from 'gatsby-link'
import logo from "../images/logo.svg"

const Menu = () => (
  <div className="Navi">
    <div className="Container">
      <ul className="Navi__list">
        <Link to="/" className="Navi__logo"><img src={logo} alt="Logo" /></Link>
        <li><Link to="/" className="Navi__listLink">Home</Link></li>
        <li><Link to="/about" className="Navi__listLink">About</Link></li>
        <li><Link to="/contact" className="Navi__listLink">Contact</Link></li>
      </ul>
    </div>
  </div>
)

export default Menu;
