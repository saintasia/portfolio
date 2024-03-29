import React from "react"
// import Seo from "../components/seo"
import Fade from 'react-reveal/Fade';
import Thumbnail from '../components/thumbnail';

const ExperimentPage = () => (
  <section>
    <Fade bottom>
      <h1 className='mb-md'>Experiments</h1>
    </Fade>
    <div className="Container__overflow">
      <div className="Works__grid">
        <div className="Works__gridItem">
          <Thumbnail
            link="/experiments/dailyui/"
            img="/images/dailyui.png"
            title="The Daily UI challenge"
            workRole="UI design"
          />
        </div>
        <div className="Works__gridItem">
          <Thumbnail
            link="/experiments/concepts/"
            img="/images/concept.png"
            title="UI Concepts"
            workRole="UI design"
          />
        </div>
      </div>
    </div>
  </section>
)

export default ExperimentPage;
