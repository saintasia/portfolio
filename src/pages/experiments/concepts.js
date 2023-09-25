import React from 'react';
import SEO from "../../components/seo"
import { StaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"
import { FaArrowLeft } from 'react-icons/fa';
import Image from "../../components/imgs/concept"

const Concepts = () => (
  <StaticQuery
		query={
			graphql`
				query projectConceptQuery {
					allDribleProjects (
						sort: {fields: [published], order: DESC}
					) {
						edges {
							node {
								title
								id
								published(formatString: "MMMM DD, YYYY")
								url
								tags
								cover
							}
						}
					}
				}
			`
		}
		render={data => (
    <>
      <SEO title={`Anastasia Kashkinova - UI designer & developer | Experiments | Daily UI`}/>
      <div className="Works__hero">
        <div className="Works__hero__txt">
          <Link className="back-link" to="/experiments"><FaArrowLeft/> Back to experiments</Link>
          <h1>UI Concepts</h1>
          <div><b>Role:</b><p>UI design</p></div>
          <div><b>Timeline:</b><p>2019</p></div>
          <div><b>Type:</b><p>UI Concepts</p></div>
        </div>
        <div className="Works__hero__img">
          <Image alt="Concept UI Cover" />
        </div>
      </div>
      <div className="Works__exp">
        {data.allDribleProjects.edges.map(shot => (
          shot.node.tags.includes("concept") &&
          <div className="Works__expCard" key={shot.node.id}>
            <h3>{shot.node.title}</h3>
            <a className="Works__expImg" href={shot.node.url} target="_blank" rel="noopener noreferrer">
              <img alt="Concept Dribble" src={shot.node.cover} />
            </a>
          </div>
        ))}
      </div>
    </>
  )}
	/>
)

export default Concepts;
