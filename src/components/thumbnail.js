
import React from 'react';
import Link from 'gatsby-link';
import Fade from 'react-reveal/Fade';
import PropTypes from "prop-types";

const Thumbnail = ({ link, img, title, workRole }) => (
  <Fade bottom>
    <Link to={ link }>
      <div className="Works__card" alt="title" style={{
        backgroundImage: `url(${img})`
      }}>
      </div>
      <div className="Works__cardText">
        <h4>{ title }</h4>
        <p>{ workRole }</p>
      </div>
    </Link>
  </Fade>
)

Thumbnail.propTypes = {
  link: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  workRole: PropTypes.string,
}

export default Thumbnail;
