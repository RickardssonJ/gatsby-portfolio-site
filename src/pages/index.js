import { graphql, Link } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import { StyledSection, StyledHomepageButton, StyledImageWrapper } from "../styles/Styling"
import Img from "gatsby-image"
import { SidePanel } from '../components/SidePanel'


export default function Home({ data }) {

  return (
    <Layout>
      <StyledSection>
        <div>
          <h2>Hej 👋 </h2>
          <h3>Mitt namn är Jimmy och jag är en full-stack webbutvecklare</h3>
          <p>Webbutvecklare baserad i Stockholm</p>
          <Link to="/projects"><StyledHomepageButton>Se mina projekt</StyledHomepageButton></Link>
        </div>
        <StyledImageWrapper>
          <Img fluid={data.file.childImageSharp.fluid} />
        </StyledImageWrapper>
        <SidePanel />
      </StyledSection>

    </Layout>

  )
}

export const query = graphql`
query homePageImg {
  file(relativePath: {eq: "jimmyPortfolioHomepagePic.png"}) {
    id
    childImageSharp {
      fluid {
       ...GatsbyImageSharpFluid
      }
    }
  }
}
`
// ...gatsbyImageSharpFluid gör så att alla värden för bilden hämtas ner och kan användas. Istället för att tex hämta sr√