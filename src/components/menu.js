import * as React from 'react'
import { useState } from 'react'
import Link from 'gatsby-link'
import Logo from "../images/logo.svg"

const Menu = () => { 
  const [showMenu, setShowMenu] = useState(false) 

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className={`Navi ${showMenu ? `Navi-open` : ``}`}>
      <div className="Container">
        <ul className="Navi__list">
          <Link to="/" className="Navi__logo"><Logo /></Link>
          <button className="Navi__toggle menu-button" onClick={() => handleClick()}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <div className="Navi__listMob">
            <li className="Navi__listLinkDropdown">
              <Link to="/works" className="Navi__listLink">Works</Link>
            </li>
            <li className="Navi__listLinkDropdown">
              <Link to="/experiments" className="Navi__listLink">Experiments</Link>
            </li>
            <li className="Navi__listLinkDropdown">
              <Link to="/freebies" className="Navi__listLink">Freebies</Link>
            </li>
            <li><Link to="/about" className="Navi__listLink">About</Link></li>
            <li><Link to="/contact" className="Navi__listLink">Contact</Link></li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Menu;
