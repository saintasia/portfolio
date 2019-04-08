import React from 'react';
import Link from 'gatsby-link';
import { FaDribbble, FaCodepen, FaGithub, FaMediumM, FaLinkedin } from 'react-icons/fa';

const Footer = ({data}) => (
  <div className="Footer">
    <div className="Container__overflow">
      <div className="Footer__inner">
        <div className="Footer__innerItem">
          <h3 className="Footer__title">Works:</h3>
          <ul className="Footer__list">
            <li><Link to="/works/flora-u" className="">Flora-U Mobile App</Link></li>
            <li><Link to="/works/project-management" className="">Project Management Web App</Link></li>
          </ul>
        </div>
        <div className="Footer__innerItem">
          <h3 className="Footer__title">Experiments:</h3>
          <ul className="Footer__list">
            <li><a href="https://dribbble.com/saintasia/tags/dailyui" rel="noopener" target="_blank" className="">The Daily UI Challenge</a></li>
          </ul>
        </div>
        <div className="Footer__innerItem Footer__innerItem-hidden"></div>
        <div className="Footer__innerItem">
          <Link to="/about" className=""><h3 className="Footer__title">About</h3></Link>
        </div>
        <div className="Footer__innerItem">
          <Link to="/contact" className=""><h3 className="Footer__title">Contact</h3></Link>
        </div>
        <div className="Footer__innerItem">
          <ul className="Hero__social">
            <li><a href="https://dribbble.com/saintasia" rel="noopener" target="_blank"><FaDribbble /></a></li>
            <li><a href="https://codepen.io/saintasia/" rel="noopener" target="_blank"><FaCodepen /></a></li>
            <li><a href="https://github.com/saintasia" rel="noopener" target="_blank"><FaGithub /></a></li>
            <li><a href="https://medium.com/@saintasia" rel="noopener" target="_blank"><FaMediumM /></a></li>
            <li><a href="https://www.linkedin.com/in/saintasia/" rel="noopener" target="_blank"><FaLinkedin /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Footer;
