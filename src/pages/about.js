import * as React from "react"
import Seo from "../components/seo"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

const AboutPage = () => (
  <>
    <Seo title="Anastasia Kashkinova - Product Designer & UX Engineer | About" />
    <div className="Container--text">
      <Fade bottom>
        <h1>About me</h1>
        <p>
          Hi, I'm Anastasia, a Product Designer and UX Engineer based in
          Melbourne, Australia with over 10 years of experience across B2C, B2B
          and Enterprise Software. I specialize in <b>UI/UX design</b>,{" "}
          <b>front-end engineering</b>, and <b>design systems</b>. My experience
          mostly lies in web apps and websites, but I also occasionally work on
          mobile products.
        </p>
        <p>
          Interested in working together?{" "}
          <Link className="text-link" to="/contact">
            Drop me a line!
          </Link>
        </p>
        <p>
          Here's what I do:
          <br />
          <b>Design</b> - UX research, Prototyping, Wireframing, UI design,
          Product Leadership.
          <br />
          <b>Development</b> - CSS/SASS, HTML, JavaScript, TypeScript, React,
          React Native, npm, yarn, git.
        </p>
        <p>
          I was originally self-taught through many available online courses and
          books.
        </p>
        <p>
          However in 2025, I'm set to complete my{" "}
          <b>
            <a
              className="text-link"
              href="https://london.ac.uk/courses/computer-science-user-experience"
              rel="noopener noreferrer"
              target="_blank"
            >
              BSc Computer Science (User Experience)
            </a>
          </b>{" "}
          that I was grinding through on a part-time basis, filling in the
          theoretical gaps and broadening my appreciation of the CS field and
          formal HCI methodologies.
        </p>
      </Fade>
    </div>
  </>
)

export default AboutPage
