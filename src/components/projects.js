import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Card from "./card"

import javascript from "../javascript.svg"
import jquery from "../jquery.svg"
import cplusplus from "../cplusplus.svg"
import css3 from "../css3.svg"
import d3 from "../d3-dot-js.svg"
import mongo from "../mongodb.svg"
import node from "../node-dot-js.svg"
import vue from "../vue-dot-js.svg"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      aimac: file(relativePath: { eq: "AIMacDiag.png" }) {
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

  const project1 = [mongo, node, vue]
  const project2 = [jquery, d3, javascript, css3]
  const project3 = [cplusplus]

  const repos = ["", "https://github.com/kame087/barbell-calculator", "#"]
  const summaries = [
    "A Full-stack web app that allows users to upload digital media and interact with other users.",
    "Mobile Web app that calculates which plates to use to rack up barbell weight.",
    "AI CLI that triages most common mac issues based on user input.",
  ]

  return (
    <section className="section-projects" id="projects">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Projects</h2>
      </div>
      <div className="grid-row">
        <div className="col-1-of-2">
          <Card
            image={data.phocial.childImageSharp.fluid}
            title={"Phocial"}
            summary={summaries[0]}
            logos={project1}
            repo={repos[0]}
          />
        </div>
        <div className="col-1-of-2">
          <Card
            image={data.calcurack.childImageSharp.fluid}
            title={"CalcuRack"}
            summary={summaries[1]}
            logos={project2}
            repo={repos[1]}
          />
        </div>
      </div>
      <div className="grid-row">
        <div className="col-1-of-2">
          <Card
            image={data.aimac.childImageSharp.fluid}
            title={"AI Mac Diags"}
            summary={summaries[2]}
            logos={project3}
            repo={repos[2]}
          />
        </div>
        <div className="col-1-of-2"></div>
      </div>
    </section>
  )
}

export default Projects
