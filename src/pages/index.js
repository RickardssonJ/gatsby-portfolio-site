import { graphql, Link } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import { StyledSection, StyledHomepageButton } from "../styles/Styling"
import Img from "gatsby-image"

export default function Home({ data }) {
  console.log(data)

  return (
    <Layout>
      <StyledSection>
        <div>
          <h2>Hej 👋 </h2>
          <h3>Develop & Deploy</h3>
          <p>Web developer based in sweden</p>
          <Link to="/projects"><StyledHomepageButton>Mina projekt</StyledHomepageButton></Link>
        </div>
        <div>
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      </StyledSection>
    </Layout>

  )
}

export const query = graphql`
query homePageImg {
  file(relativePath: {eq: "JimmyWaterColor3.jpg"}) {
    id
    childImageSharp {
      fluid {
       ...GatsbyImageSharpFluid
      }
    }
  }
}
`
// ...gatsbyImageSharpFluid gör så att alla värden för bilden hämtas ner och kan användas. Istället för att tex hämta src sizes osv manuellt