import React from "react"
import Fade from 'react-reveal/Fade';
import { Link } from "gatsby"

const FreebiesPage = () => (
  <section>
    <Fade bottom>
      <h1 className='mb-md'>Freebies</h1>
    </Fade>
    <div className="Container__overflow">
      <div className="Works__grid">
        <div className="Works__gridItem">
          <Fade bottom>
            <Link to="/freebies/hotelify/">
              <div className="Works__card" style={{
                backgroundImage: `url('/images/hotelify/thumb.jpg')`
              }}>
              </div>
              <div className="Works__cardText">
                <h4>Hotelify iOS UI Kit</h4>
                <p>UI design</p>
              </div>
            </Link>
          </Fade>
        </div>
        <div className="Works__gridItem">
          <Fade bottom>
            <Link to="/freebies/ecstasy/">
              <div className="Works__card" style={{
                backgroundImage: `url('/images/ecstasy/thumb.png')`
              }}>
              </div>
              <div className="Works__cardText">
                <h4>Ecstasy Fitbit Watch Face</h4>
                <p>UI design, Development</p>
              </div>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  </section>
)

export default FreebiesPage;
