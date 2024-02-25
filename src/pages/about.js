import * as React from 'react'
import Seo from "../components/seo"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

const AboutPage = () => (
  <>
    <Seo title="Anastasia - Freelance UI/UX designer & developer, Melbourne, Australa | About"/>
    <div className="Container--text">
      <Fade bottom>
        <h1>About me</h1>
        <p>Hi, I'm Anastasia, a product designer based in Melbourne, Australia with over 8 years of experience in the field. I specialize in <b>UI/UX design</b> and <b>front-end engineering</b>.
          My experience mostly lies in web apps and websites, but I also occasionally work on mobile products.</p>
        <p>Interested in working together? <Link className="text-link" to="/contact">Drop me a line!</Link></p>
        <p>Here's what I do:<br/>
        <b>Design</b> - UX research, Prototyping, Wireframing, UI design.<br/>
        <b>Development</b> - CSS/SASS, HTML, JavaScript/TypeScript, React, npm, GitHub.</p>
        <p>I usually do have a full-time job, but I'm open to flexible freelance contracts.</p>
      </Fade>
    </div>
  </>
)

export default AboutPage;
