import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { StyledFooter } from "../styles/Styling"
import Img from "gatsby-image"



export const Footer = () => {

  const data = useStaticQuery(graphql`
    query footerImg {
        allFile(filter: {relativeDirectory: {eq: "footerImages"}}) {
          edges {
            node {
                id
              childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)

  return (
    <>
      <StyledFooter>
        <p>Copyright 2021 Jimmy Rickardsson</p>
        <div className="footerImagesDiv">
          <a href="https://github.com/RickardssonJ" target="_blank" rel="noreferrer">
            <Img className="footerImages" fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
          </a>

          <a href="https://www.linkedin.com/in/jimmy-rickardsson-829072173/" target="_blank" rel="noreferrer">
            <Img className="footerImages" fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
          </a>
          <a href="mailto: rickardssonjimmy@gmail.com" target="_blank" rel="noreferrer">
            <Img className="footerImages" fluid={data.allFile.edges[2].node.childImageSharp.fluid} />
          </a>
        </div>
      </StyledFooter>
    </>
  )
}
