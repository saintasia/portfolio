import React from "react"
import { Link } from "gatsby"
import { FaDribbble, FaCodepen, FaGithub, FaMediumM, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import SEO from "../components/seo"
import Image from "../components/imgs/portrait"
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';
import MediumArticles from '../components/medium';

const IndexPage = ({data}) => {
  const parallaxValue = [-20, 20];

  return (
    <>
      <SEO title="Anastasia Kashkinova UI designer & developer | Home"/>
      <ParallaxProvider>
        <section>
          <div className="Hero">
            <div className="Hero__text">
              <Parallax y={parallaxValue}>
                <Fade bottom>
                  <h1 className="Heading-blue">Hi, I’m Anastasia<span className="blue">.</span></h1>
                  <p>I’m a digital creator based in Tokyo with over 4 years of experience in the field. I specialize in <b>UI/UX design</b> and <b>front-end development</b>.</p>
                  <p>Currently available for opportunities on a freelance basis. Interested in working together? <Link className="text-link" to="/contact">Drop me a line</Link>.</p>
                  <p><span className="available available-active">Availability: <b>10h</b>/week</span></p>
                  <ul className="Hero__social">
                    <li><a href="https://dribbble.com/saintasia" rel="noopener noreferrer" target="_blank"><FaDribbble /></a></li>
                    <li><a href="https://codepen.io/saintasia/" rel="noopener noreferrer" target="_blank"><FaCodepen /></a></li>
                    <li><a href="https://github.com/saintasia" rel="noopener noreferrer" target="_blank"><FaGithub /></a></li>
                    <li><a href="https://medium.com/@saintasia" rel="noopener noreferrer" target="_blank"><FaMediumM /></a></li>
                    <li><a href="https://www.linkedin.com/in/saintasia/" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a></li>
                  </ul>
                </Fade>
              </Parallax>
            </div>
            <div className="Hero__img">
              <Fade>
                <div className="Hero__img__portrait">
                  <Image alt="portrait"/>
                </div>
              </Fade>
            </div>
          </div>
        </section>
        <section className="Works">
          <div className="Works__gridItemText">
              <Fade bottom>
                <h2>Latest Works</h2>
              </Fade>
              <Fade bottom>
                <Link className="forward-link Works__gridItemLink" to="/works">See all works <FaArrowRight/></Link>
              </Fade>
          </div>
          <div className="Container__overflow">
            <div className="Works__grid">
              {data.WorksIndexQuery.edges.map((work => (
                work.node.frontmatter.featured &&
                <div key={ work.node.id } className="Works__gridItem">
                  <Fade bottom>
                    <Link to={ work.node.frontmatter.path }>
                      <div className="Works__card" style={{
                        backgroundImage: `url(${work.node.frontmatter.image})`
                      }}>
                      </div>
                      <div className="Works__cardText">
                        <h4>{ work.node.frontmatter.title }</h4>
                        <p>{ work.node.frontmatter.role }</p>
                      </div>
                    </Link>
                  </Fade>
                </div>
              )
              ))}
            </div>
          </div>
        </section>
        <section className="Works">
          <div className="Works__gridItemText">
            <Fade bottom>
              <h2>Experiments</h2>
            </Fade>
            <Fade bottom>
              <Link className="forward-link Works__gridItemLink" to="/experiments">See all experiments <FaArrowRight/></Link>
            </Fade>
          </div>
          <div className="Container__overflow">
            <div className="Works__grid">
                <div className="Works__gridItem">
                  <Fade bottom>
                    <Link to="/experiments/dailyui/">
                      <div className="Works__card" style={{
                        backgroundImage: `url('/images/dailyui.webp')`
                      }}>
                      </div>
                      <div className="Works__cardText">
                        <h4>The Daily UI challenge</h4>
                        <p>UI design</p>
                      </div>
                    </Link>
                  </Fade>
                </div>
                <div className="Works__gridItem">
                  <Fade bottom>
                    <Link to="/experiments/concepts/">
                      <div className="Works__card" style={{
                        backgroundImage: `url('/images/concept.webp')`
                      }}>
                      </div>
                      <div className="Works__cardText">
                        <h4>UI Concepts</h4>
                        <p>UI design</p>
                      </div>
                    </Link>
                  </Fade>
                </div>
            </div>
          </div>
        </section>
        <section className="More">
          <Parallax y={parallaxValue}>
            <Fade bottom>
              <h2>Latest Articles</h2>
              <ul className="react-reveal More__list">
                <MediumArticles/>
              </ul>
            </Fade>
          </Parallax>
        </section>
      </ParallaxProvider>
    </>
  )
}

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
            featured
          }
        }
      }
    }
  }
`

export default IndexPage
