import React from 'react';
import Link from 'gatsby-link'
import { FaChevronDown } from 'react-icons/fa';
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
            <a href="" className="Navi__toggle menu-button" onClick={this.handleClick}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </a>
            <div className="Navi__listMob">
              <li className="Navi__listLinkDropdown">
                <div className="Navi__listLink">Works <FaChevronDown className="small" /></div>
                <ul className="Navi__listSub">
                  <li><Link to="/works/flora-u" onClick={this.handleClick}>Flora-U Mobile App</Link></li>
                  <li><Link to="/works/project-management" onClick={this.handleClick}>Project Management Web App</Link></li>
                  <li><Link to="/works/sider-web" onClick={this.handleClick}>Sider Website</Link></li>
                  <li><Link to="/works/sider-ui" onClick={this.handleClick}>Sider Web App</Link></li>
                </ul>
              </li>
              <li className="Navi__listLinkDropdown">
                <div className="Navi__listLink">Experiments <FaChevronDown className="small" /></div>
                <ul className="Navi__listSub">
                  <li><Link to="/experiments/dailyui" onClick={this.handleClick}>The Daily UI Challenge</Link></li>
                </ul>
              </li>
              <li><Link to="/about" className="Navi__listLink" onClick={this.handleClick}>About</Link></li>
              <li><Link to="/contact" className="Navi__listLink" onClick={this.handleClick}>Contact</Link></li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
