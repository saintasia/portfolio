import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image';

const Ecstasy = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "ecstasy.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <StaticImage fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default Ecstasy
