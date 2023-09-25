import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Portrait = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "portrait.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `}
    render={data => <GatsbyImage layout="fullWidth" image={data.placeholderImage.childImageSharp.gatsbyImageData} />}
  />
)
export default Portrait
