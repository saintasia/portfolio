import React from 'react';
import Seo from "../components/seo"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

const AboutPage = () => (
  <>
    <Seo title="Anastasia Kashkinova - UI designer & developer | About"/>
    <div className="Container--text">
      <Fade bottom>
        <h1>About me</h1>
        <p>Hi, I'm Anastasia, a digital creator based in Melbourne, Australia with over 8 years of experience in the field. I specialize in <b>UI/UX design</b> and <b>front-end engineering</b>.
          My experience mostly lies in web apps and websites, but I also occasionally work on mobile products.</p>
        <p>Interested in working together? <Link className="text-link" to="/contact">Drop me a line!</Link></p>
        <p>Here's what I do:<br/>
        <b>Design</b> - UX research, Prototyping, Wireframing, UI design.<br/>
        <b>Development</b> - CSS/SASS, HTML, JavaScript/TypeScript, React, npm, GitHub.</p>
        <p>I am largely self-taught through many available online courses and books.</p>
        <p>But as of 2019, I'm also a <b><a className="text-link" href="https://london.ac.uk/courses/computer-science-user-experience" rel="noopener noreferrer" target="_blank">BSc Computer Science (User Experience)</a></b> student on a part-time basis, filling in the theoretical gaps and broadening my appreciation of the CS field.</p>
      </Fade>
    </div>
  </>
)

export default AboutPage;
