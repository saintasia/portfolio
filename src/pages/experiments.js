import React from "react"
// import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';
import { Link } from "gatsby"

const ExperimentPage = () => (
  <section>
    <Fade bottom>
      <h1 className='mb-md'>Experiments</h1>
    </Fade>
    <div className="Container__overflow">
      <div className="Works__grid">
          <div className="Works__gridItem">
            <Fade bottom>
              <Link to="/experiments/dailyui/">
                <div className="Works__card" style={{
                  backgroundImage: `url('/images/dailyui.png')`
                }}>
                </div>
                <div className="Works__cardText">
                  <h4>The Daily UI challenge</h4>
                  <p>UI design</p>
                </div>
              </Link>
            </Fade>
          </div>
          <div className="Works__gridItem">
            <Fade bottom>
              <Link to="/experiments/concepts/">
                <div className="Works__card" style={{
                  backgroundImage: `url('/images/concept.png')`
                }}>
                </div>
                <div className="Works__cardText">
                  <h4>UI Concepts</h4>
                  <p>UI design</p>
                </div>
              </Link>
            </Fade>
          </div>
      </div>
    </div>
  </section>
)

export default ExperimentPage;
