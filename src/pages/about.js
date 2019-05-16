import React from 'react';
import SEO from "../components/seo"
import { Link } from "gatsby"

const AboutPage = () => (
  <>
    <SEO title="Anastasia K. Digital Creator | About"/>
    <div className="Main__Container">
      <h1>About me</h1>
      <p>Hi, I'm Anastasia, a digital creator based in Tokyo with over 4 years of experience in the field. I specialize in <b>UI/UX design</b> and <b>front-end development</b>.
        Currently a full-time designer at <a className="text-link" href="https://sider.review/" rel="noopener noreferrer" target="_blank">Sider, Inc.</a></p>
      <p>Here's what I do:<br/>
      <b>Design</b> - UX reserach, Prototyping, Wireframing, UI design.<br/>
      <b>Development</b> - CSS/SASS, HTML, JavaScript, React, npm, GitHub.</p>
      <p>I am largely self-taught through many available online courses and books. <br/> As of lately, my resources of choice are
        <ul style={{marginTop:'16px'}}>
          <li><a className="text-link" href="https://wesbos.com/courses/" rel="noopener noreferrer" target="_blank">Wesbos' Courses</a> for the latest front-end tech</li>
          <li><a className="text-link" href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" rel="noopener noreferrer" target="_blank">Traversy Media</a> for other complementary knowledge, and</li>
          <li><a className="text-link" href="https://www.interaction-design.org/anastasia-kashkinova" rel="noopener noreferrer" target="_blank">Interaction Design Foundation</a> for improving my UX and HCI expertise.</li>
        </ul>
      </p>
      <p>As of 2019, I'm also a <b><a className="text-link" href="https://london.ac.uk/courses/computer-science-user-experience" rel="noopener noreferrer" target="_blank">BSc Computer Science (User Experience)</a></b> student.</p>
    </div>
  </>
)

export default AboutPage;
