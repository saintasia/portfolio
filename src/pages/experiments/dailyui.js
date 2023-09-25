import React from 'react';
import Seo from "../../components/seo"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import { FaArrowLeft } from 'react-icons/fa';
import Image from "../../components/imgs/dailyui"

const DailyUi = ({data}) => (
  <>
    <Seo title={`Anastasia Kashkinova - UI designer & developer | Experiments | Daily UI`}/>
    <div className="Works__hero">
      <div className="Works__hero__txt">
        <Link className="back-link" to="/experiments"><FaArrowLeft/> Back to experiments</Link>
        <h1>The Daily UI Challenge</h1>
        <div><b>Role:</b><p>UI design</p></div>
        <div><b>Timeline:</b><p>2019</p></div>
        <div><b>Type:</b><p>Daily challenges to practice and experiment in the field of UI design</p></div>
      </div>
      <div className="Works__hero__img">
        <Image alt="Daily UI Cover" />
      </div>
    </div>
    <div className="Works__exp">
      {data.allDribbbleShot.nodes.map(shot => (
        shot.tags.includes("dailyui") &&
        <div className="Works__expCard" key={shot.id}>
          <h3>{shot.title}</h3>
          <a className="Works__expImg" href={shot.url} target="_blank" rel="noopener noreferrer">
            <img alt="Daily UI Dribble" src={shot.cover} />
          </a>
        </div>
      ))}
    </div>
  </>
)

export const query = graphql`
  query {
    allDribbbleShot(sort: { fields: [published], order: DESC }) {
      nodes {
        title
        id
        published(formatString: "MMMM DD, YYYY")
        url
        tags
        cover
      }
    }
  }
`;

export default DailyUi;
