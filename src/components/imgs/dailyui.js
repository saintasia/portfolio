import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const DailyUI = ({alt}) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "dailyui.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `}
    render={data => <GatsbyImage alt={alt} layout="fullWidth" image={data.placeholderImage.childImageSharp.gatsbyImageData} />}
  />
)
export default DailyUI
