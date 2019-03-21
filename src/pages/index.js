import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <h1>Hi, I’m Anastasia.</h1>
    <p>I’m a digital designer based in Tokyo with over 4 years of experience. I specialize in UI/UX design and front-end development.</p>
    <p>Currently a full-time designer at Sider and a part-time CS student at the University of London.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <div>
      {data.allMarkdownRemark.edges.map(work => (
        <div key={ work.node.id }>
          <h3>{ work.node.frontmatter.title }</h3>
          <small>Posted by { work.node.frontmatter.author } on { work.node.frontmatter.date }</small>
          <br />
          <br />
          <Link to={ work.node.frontmatter.path }>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query WorksIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default IndexPage
