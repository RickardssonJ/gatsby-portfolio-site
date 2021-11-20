import { graphql, Link } from 'gatsby'
import React from 'react'
import { Layout } from '../../components/Layout'
import { StyledProjectsPage, StyledProjectCardWrapper } from "../../styles/Styling"
import Img from "gatsby-image"
import { SidePanel } from '../../components/SidePanel'

const Projects = ({ data }) => {

  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <StyledProjectsPage>
        <StyledProjectCardWrapper>
          {projects.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div className="styledCard">
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          )
          )}
        </StyledProjectCardWrapper>
        <div className="sidePanelWrapper">
          <SidePanel />
        </div>
      </StyledProjectsPage>
    </Layout>
  )
}

export default Projects

export const query = graphql`
query ProjectsPage {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            slug
            stack
            title
            thumb {
              id
              childImageSharp {
                id
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
        }
      }
  }
  
`