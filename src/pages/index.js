import { Link } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import { StyledSection, StyledHomepageButton } from "../styles/Styling"

export default function Home() {

  return (
    <Layout>
      <StyledSection>
        <div>
          <h2>Hej 👋 </h2>
          <h3>Develop & Deploy</h3>
          <p>Web developer based in sweden</p>
        </div>
      </StyledSection>
      <Link to="/projects"><StyledHomepageButton>Mina projekt</StyledHomepageButton></Link>
    </Layout>

  )

}
