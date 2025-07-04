import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import { FaArrowLeft } from "react-icons/fa"
import Fade from "react-reveal/Fade"

export default function Template({ data }) {
  const work = data.markdownRemark

  return (
    <>
      <Seo
        title={`Anastasia Kashkinova - Product Designer & UX Engineer | Works | ${work.frontmatter.title}`}
      />
      <div className="Works__hero">
        <div className="Works__hero__txt">
          <Fade bottom>
            <Link className="back-link" to="/works/">
              <FaArrowLeft /> Back to works
            </Link>
            <h1>{work.frontmatter.title}</h1>
            <div>
              <b>Role:</b>
              <p>{work.frontmatter.role}</p>
            </div>
            <div>
              <b>Timeline:</b>
              <p>{work.frontmatter.date}</p>
            </div>
            <div>
              <b>Deliverables:</b>
              <ul>
                <li>{work.frontmatter.del1}</li>
                <li>{work.frontmatter.del2}</li>
                <li>{work.frontmatter.del3}</li>
              </ul>
            </div>
          </Fade>
        </div>
        <div className="Works__hero__img">
          <Fade>
            <img
              alt={work.frontmatter.title}
              src={work.frontmatter.image}
            ></img>
          </Fade>
        </div>
      </div>
      <div
        className="Works__main"
        dangerouslySetInnerHTML={{ __html: work.html }}
      />
      <div id="modal"></div>
    </>
  )
}

export const workQuery = graphql`
  query WorkByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        role
        date
        del1
        del2
        del3
        image
      }
    }
  }
`
