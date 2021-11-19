import React from 'react'
import Img from "gatsby-image"
import { Layout } from '../components/Layout'
import { StyledDetailPage } from "../styles/Styling"
import { graphql } from 'gatsby'
import { SidePanel } from '../components/SidePanel'


const ProjectDetailPage = ({ data }) => {
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  return (
    <Layout>
      <StyledDetailPage>
        <div>
          <div>
            <h2>{title}</h2>
            <h3>Byggd i: {stack}</h3>
            <Img fluid={featuredImg.childImageSharp.fluid} />
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
        <SidePanel />
      </StyledDetailPage>
    </Layout>
  )
}

// dangerouslySetInnerHTML behövs för att man ska kunna injicera html i en racr komponent 

//Variabeln slug kommer ifrån gatsby-node.js där den finns i context obj som skickas med till varje sida som skapas
export const query = graphql`
query ProjectsDetailsPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }

`

export default ProjectDetailPage
