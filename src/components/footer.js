import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements/FooterElements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      githubPro: file(relativePath: { eq: "githubPro.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://github.com/kame087"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.githubPro.publicURL} alt="Github Logo"></img>
          </a>
          <a href="https://www.linkedin.com/in/kevinmolina/">
            <img src={data.linkedin.publicURL} alt="LinkedIn Logo"></img>
          </a>
          <a href="https://www.instagram.com/kevinmolina.io/">
            <img src={data.instagram.publicURL} alt="Instagram Logo"></img>
          </a>
        </FooterSocialIcons>
        <p>&copy; 2020 Kevin Molina</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}

export default Footer
