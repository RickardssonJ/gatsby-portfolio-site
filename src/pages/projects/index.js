import { graphql, Link } from 'gatsby'
import React from 'react'
import { Layout } from '../../components/Layout'
import { StyledProjectsPage, StyledProjectCars } from "../../styles/Styling"

const Projects = ({ data }) => {

    const projects = data.allMarkdownRemark.nodes
    console.log(projects)
    return (
        <Layout>
            <StyledProjectsPage>
                <h2>Portfolio</h2>
                <h3>Projekt som jag skapat</h3>
            </StyledProjectsPage>
            <StyledProjectCars>
                {projects.map(project => (
                    <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
                        <div>
                            <h3>{project.frontmatter.title}</h3>
                            <p>{project.frontmatter.stack}</p>
                        </div>
                    </Link>
                )
                )}
            </StyledProjectCars>
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
          }
          id
        }
      }
  }
  
`