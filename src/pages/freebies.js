import React from "react"
import Fade from 'react-reveal/Fade';
import Thumbnail from '../components/thumbnail';

const FreebiesPage = () => (
  <section>
    <Fade bottom>
      <h1 className='mb-md'>Freebies</h1>
    </Fade>
    <div className="Container__overflow">
      <div className="Works__grid">
        <div className="Works__gridItem">
          <Thumbnail
            link="/freebies/hotelify/"
            img="/images/hotelify/thumb.jpg"
            title="Hotelify iOS UI Kit"
            workRole="UI design"
          />
        </div>
        <div className="Works__gridItem">
          <Thumbnail
            link="/freebies/ecstasy/"
            img="/images/ecstasy/thumb.png"
            title="Ecstasy Fitbit Watch Face"
            workRole="UI design, Development"
          />
        </div>
      </div>
    </div>
  </section>
)

export default FreebiesPage;
