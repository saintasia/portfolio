import React from "react"
// import SEO from "../components/seo"
import Fade from 'react-reveal/Fade'
import Thumbnail from '../components/thumbnail'

const WorkPage = ({data}) => (
  <section>
    <Fade bottom>
      <h1 className='mb-md'>My Works</h1>
    </Fade>
    <div className="Container__overflow">
      <div className="Works__grid">
        {data.WorksIndexQuery.edges.map((work => (
          <div key={ work.node.id } className="Works__gridItem">
            <Thumbnail
              link={ work.node.frontmatter.path }
              img={ work.node.frontmatter.thumb }
              title={ work.node.frontmatter.title }
              role={ work.node.frontmatter.role }
            />
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
            role
            thumb
          }
        }
      }
    }
  }
`

export default WorkPage;
