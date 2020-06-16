import React from "react"

import Img from "gatsby-image"
import github from "../github.svg"

const Card = props => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        {/* <img src={require(props.image)} className="project__photo"></img> */}
        <Img fluid={props.image} />
      </div>
      <div className="card__side card__side--back card__side--back-1">
        <h4 className="card__heading">{props.title}</h4>
        <p className="paragraph--projects">{props.summary}</p>

        <div className="details__container">
          {/* <h3 className="card__details">Tech Stack</h3> */}

          <div className="skills">
            {props.logos.map(logo => (
              <img
                className="logos"
                src={logo}
                alt="Programming Language logo"
              />
            ))}
          </div>
          <div className="btn-link">
            <a href={props.repo}>
              <img className="repo" src={github} />
            </a>
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
