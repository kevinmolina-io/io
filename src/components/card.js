import React from "react"

import Img from "gatsby-image"
import javascript from "../javascript.svg"
import jquery from "../jquery.svg"

const Card = props => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        {/* <img src={require(props.image)} className="project__photo"></img> */}
        <Img fluid={props.image} />
      </div>
      <div className="card__side card__side--back card__side--back-1">
        <h4 className="card__heading">{props.title}</h4>
        <h3 className="card__details">
          Details
          <ul>
            <li>
              <div className="skills">
                {props.logos.map(logo => (
                  <img className="logos" src={logo} />
                ))}

                {/* <img className="logos" src={jquery} alt="JavaScript Logo" /> */}
              </div>
            </li>
          </ul>
        </h3>
      </div>
    </div>
  )
}

export default Card
