import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      turquoise: file(relativePath: { eq: "turquoiseBlck.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jade: file(relativePath: { eq: "jade.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      powder: file(relativePath: { eq: "powderBlue.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="side-img left">
            <Img fluid={data.jade.childImageSharp.fluid} />
          </div>
          <div className="main-text">Kevin Molina</div>
          <div className="main-image">
            <Img fluid={data.turquoise.childImageSharp.fluid} />
          </div>
          <div className="side-img right">
            <Img fluid={data.powder.childImageSharp.fluid} />
          </div>
          <a href="/#projects" className="btn btn-maroon btn-animated">
            Projects
          </a>
        </div>
        <div className="scroll">
          {/* <span>Scroll Down</span> */}
          <div id="sd-container">
            <div className="arrow"></div>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
