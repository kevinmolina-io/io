import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  return (
    <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">A bit about myself</h2>
        </div>

        <div className="grid-row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Tech Support &#8594; Code afficionado
            </h3>
            <p className="paragraph">
              Former Apple Genius with 6+ years of Technical Support Experience
              who had to the opportunity to work as a Technical Program
              Specialist at Apple Corporate, where I had exposure to the
              software development life cycle. From there, I took the leap of
              faith and went to school to pursue a Bachelor's in Computer
              Science. Now I spend my time building progressive web apps,
              designing and building intuitive UIs with a focus on Component API
              design.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">Mission</h3>
            <p className="paragraph">
              As a Latino in Software Engineering, my goal is to be a champion
              of inclusion and build a community that provides resources for my
              community and encourage for more representation of
              underrepresented minorities in tech.
            </p>
            <a className="btn-text" href="#">
              Resume &#8594;
            </a>
          </div>
          <div className="col-1-of-2">Image Compo</div>
        </div>
      </section>
    </main>
  )
}

export default About
