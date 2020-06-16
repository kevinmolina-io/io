import React from "react"

// Styles import
import "../styles/styles.scss"

// Components import
import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"
import Projects from "../components/projects"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <About />
    <Projects />
  </div>
)

export default IndexPage
