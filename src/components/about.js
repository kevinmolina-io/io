import React from "react"

import apple from "../images/apple.jpg"
import code from "../images/code.jpg"
import grad from "../images/grad.jpg"

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
              Tech Support &rarr; Code aficionado
            </h3>
            <p className="paragraph">
              Former Apple Genius with 6+ years of Technical Support Experience
              who had to the opportunity to work with a Program Management Team
              at Apple Corporate, where I had exposure to the software
              development life cycle. From there, I took the leap of faith and
              went to school to pursue a Bachelor's in Computer Science. Now I
              spend my time building progressive web apps, designing and
              building intuitive UIs looking to kickstart my professional
              career.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">Mission</h3>
            <p className="paragraph">
              As a Latino in Software Engineering, my goal is to be a champion
              of inclusion and build a community that builds and provides
              resources for my community and encourage for more representation
              of underrepresented minorities in tech.
            </p>
            <a
              className="btn-text"
              href="https://drive.google.com/file/d/1X9daMEddkWCfeZM3ao1YSOmSKtRHKCsj/view"
            >
              Resume &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={apple}
                alt="apple"
                className="composition__photo composition__photo--p1"
              ></img>
              <img
                src={code}
                alt="code"
                className="composition__photo composition__photo--p2"
              ></img>
              <img
                src={grad}
                alt="graduate"
                className="composition__photo composition__photo--p3"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
