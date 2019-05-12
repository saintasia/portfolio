import React from "react"
import { Link } from "gatsby"
import { FaDribbble, FaCodepen, FaGithub, FaMediumM, FaLinkedin } from 'react-icons/fa';
import SEO from "../components/seo"
import Image from "../components/imgs/portrait"
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

const IndexPage = ({data}) => (
  <>
    <SEO title="Anastasia K. Digital Creator | Home"/>
    <ParallaxProvider>
      <section>
        <div className="Hero">
          <div className="Hero__text">
            <figure>
            {/* <Parallax y={[0, 50]} tagOuter="figure"> */}
              <h1 className="Heading-blue">Hi, I’m Anastasia<span className="blue">.</span></h1>
              <p>I’m a digital creator based in Tokyo with over 4 years of experience in the field. I specialize in <b>UI/UX design</b> and <b>front-end development</b>.</p>
              <p>Currently a full-time designer at <a className="text-link" href="https://sider.review/" rel="noopener noreferrer" target="_blank">Sider, Inc.</a> and a part-time BSc Computer Science student at <a className="text-link" href="https://london.ac.uk/courses/computer-science-user-experience" rel="noopener noreferrer" target="_blank">the University of London</a>.</p>
              <ul className="Hero__social">
                <li><a href="https://dribbble.com/saintasia" rel="noopener noreferrer" target="_blank"><FaDribbble /></a></li>
                <li><a href="https://codepen.io/saintasia/" rel="noopener noreferrer" target="_blank"><FaCodepen /></a></li>
                <li><a href="https://github.com/saintasia" rel="noopener noreferrer" target="_blank"><FaGithub /></a></li>
                <li><a href="https://medium.com/@saintasia" rel="noopener noreferrer" target="_blank"><FaMediumM /></a></li>
                <li><a href="https://www.linkedin.com/in/saintasia/" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a></li>
              </ul>
              </figure>
            {/* </Parallax> */}
          </div>
          <div className="Hero__img">
            {/* <img src={portrait} alt="portrait" className="Hero__img__portrait" /> */}
            <div className="Hero__img__portrait">
              <Image alt="portrait"/>
            </div>
          </div>
        </div>
      </section>
      <section className="Works">
        <div className="Works__grid Container__overflow">
          <hr className="Works__separator"/>
          <div className="Works__gridItem Works__gridItemText">
          <Parallax y={[-25, 25]} tagOuter="figure">
            <h2>Latest Works</h2>
            <p>Check out my latest projects, these include both hobby and side projects as well as long-term and ongoing ones.</p>
          </Parallax>
          </div>
          {data.WorksIndexQuery.edges.map(work => (
            <div key={ work.node.id } className="Works__gridItem">
              <Link to={ work.node.frontmatter.path }>
                <div className="Works__card" style={{
                  backgroundImage: `linear-gradient(0deg, #FFFFFF 15.19%, rgba(255, 255, 255, 0) 66.52%), url(${work.node.frontmatter.image})`
                }}>
                  <div className="Works__cardText">
                    <b>{ work.node.frontmatter.title }</b>
                    <p>{ work.node.frontmatter.role }</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="More">
        <Parallax y={[-25, 25]} tagOuter="figure">
          <div className="More__grid">
            <div className="More__gridItem">
              <h2>Articles</h2>
              <ul className="More__gridItem__list">
              {data.MediumQuery.edges.map(post => (
                <li key={ post.node.id }>
                  <a className="text-link" href={`https://medium.com/@saintasia/${post.node.uniqueSlug}`} target="_blank" rel="noopener noreferrer">{post.node.title}</a>
                </li>
              ))}
              </ul>
            </div>
            <div className="More__gridItem">
              <h2>Experiments</h2>
              <Link to="experiments/dailyui" className="text-link">The Daily UI challenge</Link>
            </div>
            <div className="More__gridItem">
              <h2>Other</h2>
              <a className="text-link" href="https://www.astemplates.com/website-template-details/773-burger-cafe" target="_blank" rel="noopener noreferrer">Burger Landing Page Template (2017)</a>
            </div>
          </div>
        </Parallax>
      </section>
    </ParallaxProvider>
  </>
)

export const pageQuery = graphql`
  query IndexQuery {
    WorksIndexQuery: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            role
            del1
            del2
            del3
            image
          }
        }
      }
    }
    MediumQuery: allMediumPost(limit: 3, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          author {
            name
          }
          virtuals {
            previewImage {
              imageId
            }
          }
        }
      }
    }
  }
`

export default IndexPage
