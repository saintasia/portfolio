import * as React from "react"
import Seo from "../../components/seo"
import { Link } from "gatsby"
import { FaArrowLeft } from "react-icons/fa"
import Image from "../../components/imgs/hotelify"

const Hotelify = () => (
  <>
    <Seo
      title={`Anastasia Kashkinova - Product Designer & UX Engineer | Freebies | Figma iOS kit`}
    />
    <div className="Works__hero">
      <div className="Works__hero__txt">
        <Link className="back-link" to="/freebies">
          <FaArrowLeft /> Back to freebies
        </Link>
        <h1>Hotelify - Free iOS mobile kit for Figma</h1>
        <div>
          <b>Role:</b>
          <p>UI design</p>
        </div>
        <div>
          <b>Timeline:</b>
          <p>2019</p>
        </div>
        <div>
          <b>Type:</b>
          <p>UI kit</p>
        </div>
      </div>
      <div className="Works__hero__img">
        <Image alt="Concept UI Cover" />
      </div>
    </div>
    <div className="Container-slim">
      <p>
        Free Hotel booking app UI kit for Figma (iOS). 14 screens, reusable
        components, FontAwsome and Google Fonts support.
        <br />
        <br />
        <a
          className="text-link"
          href="https://dribbble.com/shots/7266365-Hotelify-Free-iOS-mobile-kit-for-Figma"
          rel="noopener noreferrer"
          target="_blank"
        >
          Download here
        </a>
      </p>
    </div>
    <br />
    <img
      className="Works__expImg"
      alt="details"
      src="/images/hotelify/details.jpg"
    />
    <img className="Works__expImg" alt="home" src="/images/hotelify/home.jpg" />
    <img
      className="Works__expImg"
      alt="search"
      src="/images/hotelify/search.jpg"
    />
    <img
      className="Works__expImg"
      alt="checkout"
      src="/images/hotelify/checkout.jpg"
    />
    <img
      className="Works__expImg"
      alt="about"
      src="/images/hotelify/about.jpg"
    />
  </>
)

export default Hotelify
