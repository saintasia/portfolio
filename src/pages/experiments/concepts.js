import * as React from "react"
import Seo from "../../components/seo"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { FaArrowLeft } from "react-icons/fa"
import Image from "../../components/imgs/concept"

const Concepts = ({ data }) => (
  <>
    <Seo
      title={`Anastasia Kashkinova - Product Designer & UX Engineer | Experiments | Daily UI`}
    />
    <div className="Works__hero">
      <div className="Works__hero__txt">
        <Link className="back-link" to="/experiments">
          <FaArrowLeft /> Back to experiments
        </Link>
        <h1>UI Concepts</h1>
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
          <p>UI Concepts</p>
        </div>
      </div>
      <div className="Works__hero__img">
        <Image alt="Concept UI Cover" />
      </div>
    </div>
    <div className="Works__exp">
      {data.allDribbbleShot.nodes.map(
        shot =>
          shot.tags.includes("concept") && (
            <div className="Works__expCard" key={shot.id}>
              <h3>{shot.title}</h3>
              <a
                className="Works__expImg"
                href={shot.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="Concept Dribble" src={shot.cover} />
              </a>
            </div>
          )
      )}
    </div>
  </>
)

export const query = graphql`
  query {
    allDribbbleShot(sort: { fields: [published], order: DESC }) {
      nodes {
        title
        id
        published(formatString: "MMMM DD, YYYY")
        url
        tags
        cover
      }
    }
  }
`

export default Concepts
