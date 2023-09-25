import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image';

const Ecstasy = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "ecstasy.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `}
    render={data => <GatsbyImage layout="fullWidth" image={data.placeholderImage.childImageSharp.gatsbyImageData} />}
  />
)
export default Ecstasy
