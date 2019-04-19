import React from 'react';
import Link from 'gatsby-link';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaArrowLeft } from 'react-icons/fa';

export default function Template({data}) {
  const work = data.markdownRemark;

  return (
    <Layout>
      <SEO title={`Anastasia K. Digital Creator | Works | ${work.frontmatter.title}`}/>
      <div className="Works__hero">
        <div className="Works__hero__txt">
          <Link className="back-link" to="/"><FaArrowLeft/> Back</Link>
          <h1>{work.frontmatter.title}</h1>
          <div><b>Role:</b><p>{work.frontmatter.role}</p></div>
          <div><b>Timeline:</b><p>{work.frontmatter.date}</p></div>
          <div><b>Deliverables:</b>
            <ul>
              <li>{work.frontmatter.del1}</li>
              <li>{work.frontmatter.del2}</li>
              <li>{work.frontmatter.del3}</li>
            </ul>
          </div>
        </div>
        <div className="Works__hero__img">
          <img alt={work.frontmatter.title} src={work.frontmatter.image}></img>
        </div>
      </div>
      <div className="Works__main" dangerouslySetInnerHTML={{ __html: work.html }} />
      <div id="modal"></div>
    </Layout>
  )
}

export const workQuery = graphql`
  query WorkByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
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
