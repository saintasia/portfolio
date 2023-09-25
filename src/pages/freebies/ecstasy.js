import * as React from 'react'
import Seo from "../../components/seo"
import { Link } from "gatsby"
import { FaArrowLeft } from 'react-icons/fa';
import Image from "../../components/imgs/ecstasy"

const Ecstasy = () => (
  <>
    <Seo title={`Anastasia Kashkinova - UI designer & developer | Freebies | Ecstasy FitBit Face`}/>
    <div className="Works__hero">
      <div className="Works__hero__txt">
        <Link className="back-link" to="/freebies"><FaArrowLeft/> Back to freebies</Link>
        <h1>Ecstasy - Free watch face for FitBit Versa</h1>
        <div><b>Role:</b><p>UI design, Development</p></div>
        <div><b>Timeline:</b><p>2019</p></div>
        <div><b>Type:</b><p>Wearable</p></div>
      </div>
      <div className="Works__hero__img">
        <Image alt="Concept UI Cover" />
      </div>
    </div>
    <div class="Container-slim">
      <p>Free FitBit Versa watch face. Developed with FitBit SDK.
      <br/><br/>
        <a className="text-link" href="https://gallery.fitbit.com/details/641e0692-06a9-41d2-8654-61b8fba6b5e7" rel="noopener noreferrer" target="_blank">Download here</a>
      </p>
    </div>
    <br/>
    <img alt="details" className="Works__expImg" src="/images/ecstasy/details.png" />
  </>
)

export default Ecstasy;
