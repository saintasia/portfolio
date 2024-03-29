import * as React from 'react'
import Link from 'gatsby-link';
import Fade from 'react-reveal/Fade';
import { FaDribbble, FaCodepen, FaGithub, FaMediumM, FaLinkedin, FaDev } from 'react-icons/fa';

const Footer = ({data}) => (
  <div className="Footer">
    <div className="Container__overflow">
      <div className="Footer__inner">
        <div className="Footer__innerItem">
          <Fade bottom>
            <Link to="/works"><h3 className="Footer__title">Works:</h3></Link>
            <ul className="Footer__list">
              <li><Link to="/works/sesimi-app" className="">Sesimi App</Link></li>
              <li><Link to="/works/redbubble-design" className="">Redbubble Design System</Link></li>
              <li><Link to="/works/sider-web" className="">Sider Website</Link></li>
              <li><Link to="/works/sider-ui" className="">Sider Web App</Link></li>
              <li><Link to="/works/flora-u" className="">Flora-U Mobile App</Link></li>
              <li><Link to="/works/project-management" className="">Project Management Web App</Link></li>
            </ul>
          </Fade>
        </div>
        <div className="Footer__innerItem">
          <Fade bottom>
            <Link to="/experiments"><h3 className="Footer__title">Experiments:</h3></Link>
            <ul className="Footer__list">
              <li><Link to="/experiments/dailyui">The Daily UI Challenge</Link></li>
              <li><Link to="/experiments/concepts">UI Concepts</Link></li>
            </ul>
          </Fade>
        </div>
        <div className="Footer__innerItem">
          <Fade bottom>
            <Link to="/freebies"><h3 className="Footer__title">Freebies:</h3></Link>
            <ul className="Footer__list">
              <li><Link to="/freebies/hotelify">Hotelify iOS UI Kit</Link></li>
              <li><Link to="/freebies/ecstasy">Ecstasy Fitbit Watch Face</Link></li>
            </ul>
          </Fade>
        </div>
        <div className="Footer__innerItem">
          <Fade bottom>
            <Link to="/about" className=""><h3 className="Footer__title">About</h3></Link>
          </Fade>
        </div>
        <div className="Footer__innerItem">
          <Fade bottom>
            <Link to="/contact" className=""><h3 className="Footer__title">Contact</h3></Link>
          </Fade>
        </div>
        <div className="Footer__innerItem">
          <ul className="Hero__social">
            <Fade bottom>
              <li><a href="https://dribbble.com/saintasia" rel="noopener noreferrer" target="_blank" aria-label="dribble"><FaDribbble /></a></li>
              <li><a href="https://codepen.io/saintasia/" rel="noopener noreferrer" target="_blank" aria-label="codepen"><FaCodepen /></a></li>
              <li><a href="https://github.com/saintasia" rel="noopener noreferrer" target="_blank" aria-label="github"><FaGithub /></a></li>
              <li><a href="https://medium.com/@saintasia" rel="noopener noreferrer" target="_blank" aria-label="medium"><FaMediumM /></a></li>
              <li><a href="https://www.linkedin.com/in/saintasia/" rel="noopener noreferrer" target="_blank" aria-label="linkedin"><FaLinkedin /></a></li>
              <li><a href="https://dev.to/saintasia" rel="noopener noreferrer" target="_blank"  aria-label="devto"><FaDev /></a></li>
            </Fade>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Footer;
