import React from 'react';
import Link from 'gatsby-link'
import Logo from "../images/logo.svg"

class Menu extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      menuActiveClass: ''
    }
  }

  handleClick = () => {
    this.setState({
      showMenu: !this.state.showMenu
    },
    () => {
      this.state.showMenu
        ? this.setState({
            navBarActiveClass: 'Navi-open',
          })
        : this.setState({
            navBarActiveClass: '',
          })
      }
    );
  }

  handleMenuClick = () => {
    this.setState({
      showMenu: false
    })
  }

  render() {
    return (
      <div className={`Navi ${this.state.navBarActiveClass}`}>
        <div className="Container">
          <ul className="Navi__list">
            <Link to="/" className="Navi__logo"><Logo /></Link>
            <button href="" className="Navi__toggle menu-button" onClick={this.handleClick}>
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
    );
  }
}

export default Menu;
