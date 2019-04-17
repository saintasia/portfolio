import React from 'react';
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { StaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"
import { FaArrowLeft } from 'react-icons/fa';
import Image from "../../components/imgs/dailyui"

const DailyUi = () => (
  <StaticQuery
		query={
			graphql`
				query projectQuery {
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
    <Layout>
      <SEO title={`Anastasia K. Digital Creator | Experiments | Daily UI`}/>
      <div className="Works__hero">
        <div className="Works__hero__txt">
          <Link className="back-link" to="/"><FaArrowLeft/> Back</Link>
          <h1>The Daily UI Challenge</h1>
          <div><b>Role:</b><p>Designer</p></div>
          <div><b>Timeline:</b><p>2019</p></div>
          <div><b>Type:</b><p>Daily challenges to practice and experiment in the field of UI design</p></div>
        </div>
        <div className="Works__hero__img">
          <Image />
        </div>
      </div>
      <div className="Works__exp">
        {data.allDribleProjects.edges.map(shot => (
          shot.node.tags.includes("dailyui") &&
          <div className="Works__expCard" key={shot.node.id}>
            <h3>{shot.node.title}</h3>
            <a className="Works__expImg" href={shot.node.url} target="_blank" rel="noopener">
              <img src={shot.node.cover} />
            </a>
          </div>
        ))}
      </div>
    </Layout>
  )}
	/>
)

export default DailyUi;
