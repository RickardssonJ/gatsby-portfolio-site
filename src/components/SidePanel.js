import React from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'
import { StyledSidePanel } from "../styles/Styling"

export const SidePanel = () => {
    const data = useStaticQuery(graphql`
    query sidePanelImg {
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


        <StyledSidePanel>
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
        </StyledSidePanel>


    )
}
