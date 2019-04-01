import React from 'react';
import Link from 'gatsby-link';

export default function Template({data}) {
  const work = data.markdownRemark;

  return (
    <div>
      <Link to="/">Go Back</Link>
      <hr />
      <h1>{work.frontmatter.title}</h1>
      <p>Posted by {work.frontmatter.author}</p>
      <p>On {work.frontmatter.date}</p>
      <img src={work.frontmatter.image}></img>
      <div dangerouslySetInnerHTML={{ __html: work.html }} />
    </div>
  )
}

export const workQuery = graphql`
  query WorkByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }){
      html
      frontmatter {
        path
        title
        author
        date
        image
      }
    }
  }
`
