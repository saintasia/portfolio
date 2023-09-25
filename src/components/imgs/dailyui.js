import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DailyUI = ({alt}) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "dailyui.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img alt={alt} fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default DailyUI
