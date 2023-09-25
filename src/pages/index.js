import React from "react"
import { Link, graphql } from "gatsby"
import { FaDribbble, FaCodepen, FaGithub, FaMediumM, FaLinkedin, FaArrowRight, FaDev } from 'react-icons/fa';
import Seo from "../components/seo"
import Image from "../components/imgs/portrait"
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';
import MediumArticles from '../components/medium';
import Thumbnail from '../components/thumbnail';

const IndexPage = ({data}) => {
  const parallaxValue = [-20, 20];

  return (
    <>
      <Seo title="Anastasia Kashkinova - UI designer & developer | Home"/>
      <ParallaxProvider>
        <section>
          <div className="Hero">
            <div className="Hero__text">
              <Parallax y={parallaxValue}>
                <Fade bottom>
                  <h1 className="Heading-blue">
                    UI designer & developer<span className="blue">.</span>
                  </h1>
                  <p>Hi, I’m Anastasia - a digital creator based in Melbourne with over 8 years of experience in the field. I specialize in <b>UI/UX design</b> and <b>front-end engineering</b>.</p>
                  <p>Feel free to connect with me via my social profiles or to <Link className="text-link" to="/contact">drop me a line</Link>!</p>
                  {/* <p>Currently available for opportunities on a freelance basis. Interested in working together? <Link className="text-link" to="/contact">Drop me a line</Link>.</p> */}
                  {/* <p><span className="available available-active">Availability: <b>10h</b>/week</span></p> */}
                  <ul className="Hero__social">
                    <li><a href="https://dribbble.com/saintasia" rel="noopener noreferrer" target="_blank" aria-label="dribble"><FaDribbble /></a></li>
                    <li><a href="https://codepen.io/saintasia/" rel="noopener noreferrer" target="_blank"  aria-label="codepen"><FaCodepen /></a></li>
                    <li><a href="https://github.com/saintasia" rel="noopener noreferrer" target="_blank"  aria-label="github"><FaGithub /></a></li>
                    <li><a href="https://medium.com/@saintasia" rel="noopener noreferrer" target="_blank"  aria-label="medium"><FaMediumM /></a></li>
                    <li><a href="https://www.linkedin.com/in/saintasia/" rel="noopener noreferrer" target="_blank"  aria-label="linkedin"><FaLinkedin /></a></li>
                    <li><a href="https://dev.to/saintasia" rel="noopener noreferrer" target="_blank"  aria-label="devto"><FaDev /></a></li>
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
                <Link className="forward-link Works__gridItemLink" to="/works">See all <FaArrowRight/></Link>
              </Fade>
          </div>
          <div className="Container__overflow">
            <div className="Works__grid">
              {data.WorksIndexQuery.edges.map((work => (
                work.node.frontmatter.featured &&
                <div key={ work.node.id } className="Works__gridItem">
                  <Thumbnail
                    link={ work.node.frontmatter.path }
                    img={work.node.frontmatter.thumb}
                    title={ work.node.frontmatter.title }
                    role={ work.node.frontmatter.role }
                  />
                </div>
              )
              ))}
            </div>
          </div>
        </section>

        {/* experiments */}
        <section className="Works">
          <div className="Works__gridItemText">
            <Fade bottom>
              <h2>Experiments</h2>
            </Fade>
            <Fade bottom>
              <Link className="forward-link Works__gridItemLink" to="/experiments">See all <FaArrowRight/></Link>
            </Fade>
          </div>
          <div className="Container__overflow">
            <div className="Works__grid">
                <div className="Works__gridItem">
                  <Thumbnail
                    link="/experiments/dailyui/"
                    img="/images/dailyui.png"
                    alt="The Daily UI challenge"
                    title="The Daily UI challenge"
                    workRole="UI design"
                  />
                </div>
                <div className="Works__gridItem">
                  <Thumbnail
                    link="/experiments/concepts/"
                    img="/images/concept.png"
                    alt="UI Concepts"
                    title="UI Concepts"
                    workRole="UI design"
                  />
                </div>
            </div>
          </div>
        </section>

        {/* Freebies */}
        <section className="Works">
          <div className="Works__gridItemText">
            <Fade bottom>
              <h2>Freebies</h2>
            </Fade>
            <Fade bottom>
              <Link className="forward-link Works__gridItemLink" to="/freebies">See all <FaArrowRight/></Link>
            </Fade>
          </div>
          <div className="Container__overflow">
            <div className="Works__grid">
              <div className="Works__gridItem">
                <Thumbnail
                  link="/freebies/hotelify/"
                  img="/images/hotelify/thumb.jpg"
                  title="Hotelify iOS UI Kit"
                  workRole="UI design"
                />
              </div>
              <div className="Works__gridItem">
                <Thumbnail
                  link="/freebies/ecstasy/"
                  img="/images/ecstasy/thumb.png"
                  title="Ecstasy Fitbit Watch Face"
                  workRole="UI design, Development"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="More">
          <Parallax y={parallaxValue}>
            <Fade bottom>
              <h2>Latest from Medium</h2>
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
            role
            thumb
            featured
          }
        }
      }
    }
  }
`

export default IndexPage
