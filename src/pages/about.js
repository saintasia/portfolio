import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const AboutPage = () => (
  <Layout>
    <SEO title="About"/>
    <div className="Main__Container">
      <h1>About me</h1>
      <p>Hi, I'm Anastasia, a digital creator based in Tokyo with over 4 years of experience in the field. I specialize in <b>UI/UX design</b> and <b>front-end development</b>.
      <br/>Currently a full-time designer at <a className="text-link" href="https://sider.review/" rel="noopener" target="_blank">Sider, Inc.</a></p>
      <p>Most of my experience lies in hybrid designer/developer positions, I just love doing both and strive to do my best whether I'm using my "creative" or "logical and problem solving" capabilities, I also believe <b>design and development go hand-in-hand and should not be treated like two separate entities</b>.
      <br/>I am largely self-taught through many available online courses and books. <br/> As of lately, my resources of choice are <a className="text-link" href="https://wesbos.com/courses/" rel="noopener" target="_blank">Wesbos' Courses</a> for the latest front-end tech, <a className="text-link" href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" rel="noopener" target="_blank">Traversy Media</a> for other complementary knowledge, and <a className="text-link" href="https://www.interaction-design.org/anastasia-kashkinova" rel="noopener" target="_blank">Interaction Design Foundation</a> for improving my UX and HCI expertise.</p>
      <p>As of 2019, my love for digital products manifested itself by me starting a <b><a className="text-link" href="https://london.ac.uk/courses/computer-science-user-experience" rel="noopener" target="_blank">Computer Science degree with specialty in UX</a></b> from UoL, which I'm attaining on a part-time basis.</p>
      <p>When I'm not working, studying or doing passion projects and challenges, I enjoy <b>yoga, playing piano or discovering new cafes and restaurants around Tokyo</b>.</p>
      <p>If you want to reach out about anything, please don't be a stranger and <Link to="/contact" className="text-link">drop me a line</Link>!</p>
    </div>
  </Layout>
)

export default AboutPage;
