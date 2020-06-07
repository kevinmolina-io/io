import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Card from "./card"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      aimac: file(relativePath: { eq: "AIMac.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      calcurack: file(relativePath: { eq: "CalcuRack.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      phocial: file(relativePath: { eq: "Phocial.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="section-projects">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Projects</h2>
      </div>
      <div className="grid-row">
        <div className="col-1-of-2">
          <Card image={data.aimac.childImageSharp.fluid} />
        </div>
        <div className="col-1-of-2">
          <Card image={data.calcurack.childImageSharp.fluid} />
        </div>
      </div>
      <div className="grid-row">
        <div className="col-1-of-2">
          <Card image={data.phocial.childImageSharp.fluid} />
        </div>
        <div className="col-1-of-2"></div>
      </div>
    </section>
  )
}

export default Projects
