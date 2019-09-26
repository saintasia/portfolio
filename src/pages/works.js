import React from "react"
// import SEO from "../components/seo"
import Fade from 'react-reveal/Fade';
import { Link } from "gatsby"

const WorkPage = ({data}) => (
  <section>
    <Fade bottom>
      <h1 className='mb-md'>My Works</h1>
    </Fade>
    <div className="Container__overflow">
      <div className="Works__grid">
        {data.WorksIndexQuery.edges.map((work => (
          <div key={ work.node.id } className="Works__gridItem">
            <Fade bottom>
              <Link to={ work.node.frontmatter.path }>
                <div className="Works__card" style={{
                  backgroundImage: `url(${work.node.frontmatter.image})`
                }}>
                </div>
                <div className="Works__cardText">
                  <h4>{ work.node.frontmatter.title }</h4>
                  <p>{ work.node.frontmatter.role }</p>
                </div>
              </Link>
            </Fade>
          </div>
        )
        ))}
      </div>
    </div>
  </section>
)

export const pageQuery = graphql`
  query WorksQuery {
    WorksIndexQuery: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            role
            del1
            del2
            del3
            image
            featured
          }
        }
      }
    }
  }
`

export default WorkPage;
