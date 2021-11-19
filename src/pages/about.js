import React from 'react'
import { Layout } from '../components/Layout'
import { SidePanel } from '../components/SidePanel'
import { StyledAboutPageWrapper } from '../styles/Styling'


const About = () => {
    return (
        <Layout>
            <StyledAboutPageWrapper>
                <div>
                    <h1>Om mig</h1>
                    <p>Mitt namn är Jimmy Rickardsson och jag bor i Stockholm.<br />
                        Jag är i grund och botten en utbildad elektriker med många års erfarenhet inom byggbranschen men jag har alltid haft ett stort intresse för IT och programmering och nu har jag tagit beslutet att följa min dröm och bli en duktig utvecklare!
                        För tillfället så studerar jag mitt andra år på Nackademins yrkeshögskola i Solna och utbildningen web developer full stack opensource.
                        Det läggs mycket fokus på både front end och back end, men även på agilt arbete.
                        Jag beräknas vara klar med min utbildning år 2022.</p>
                </div>
                <div>
                    <h2>Jag har kunskaper inom</h2>
                    <ul>
                        <li><span>J</span>avaScript</li>
                        <li><span>N</span>odeJS / Express</li>
                        <li><span>H</span>TML/CSS</li>
                        <li><span>R</span>eact</li>
                        <li><span>G</span>atsbyJS</li>
                        <li><span>P</span>HP</li>
                        <li><span>m</span>ySQL</li>
                        <li><span>n</span>oSQL</li>
                        <li><span>g</span>it</li>
                    </ul>
                </div>
                <SidePanel />
            </StyledAboutPageWrapper>
        </Layout>
    )
}

export default About