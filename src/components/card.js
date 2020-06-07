import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import aimac from "../images/AIMAC.png"
import calcurack from "../images/CalcuRack.png"
import phocial from "../images/Phocial.png"

const Card = props => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        {/* <img src={require(props.image)} className="project__photo"></img> */}
        <Img fluid={props.image} />
        <div className="card__side card__side--back">Backside</div>
      </div>
      <div className="card__side card__side--back">Backside</div>
    </div>
  )
}

export default Card
