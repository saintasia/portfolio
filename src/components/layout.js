/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Menu from "./menu"
import Footer from "./footer"
import "../css/main.scss"
import Transition from "../components/transition";

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Menu />
        <div className="Container">
        <div className="Layout">
         <Transition location={location}>{children}</Transition>
        </div>
          <footer>
            <Footer />
            <div className="Footer__copy">
              © {new Date().getFullYear()}, Designed and built by me, with ❤️and Gatsby
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
