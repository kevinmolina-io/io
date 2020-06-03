import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  return (
    <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-8">
          <h2 className="heading-secondary">A bit about myself</h2>
        </div>

        <div className="grid-row">
          <div className="col-1-of-2">Summary</div>
          <div className="col-1-of-2">Image Compo</div>
        </div>
      </section>
    </main>
  )
}

export default About
