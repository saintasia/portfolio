import React from 'react';
import Link from 'gatsby-link'
import { FaChevronDown } from 'react-icons/fa';
import logo from "../images/logo.svg"

const Menu = () => (
  <div className="Navi Navi-mobile">
    <div className="Container">
      <ul className="Navi__list">
        <Link to="/" className="Navi__logo"><img src={logo} alt="Logo" /></Link>
        <a href="" className="Navi__toggle menu-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="Navi__listMob">
        <li><Link to="/" className="Navi__listLink">Home</Link></li>
          <li className="Navi__listLinkDropdown">
            <div className="Navi__listLink">Works <FaChevronDown className="small" /></div>
            <ul className="Navi__listSub">
              <li><Link to="/works/flora-u" className="">Flora-U Mobile App</Link></li>
              <li><Link to="/works/project-management" className="">Project Management Web App</Link></li>
            </ul>
          </li>
          <li><Link to="/about" className="Navi__listLink">About</Link></li>
          <li><Link to="/contact" className="Navi__listLink">Contact</Link></li>
        </div>
      </ul>
    </div>
  </div>
)

export default Menu;
