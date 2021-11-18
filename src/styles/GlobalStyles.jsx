import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Montserrat";
  color: white;
}
html, body {
  min-height: 100%;
}
  body {
    background: radial-gradient(at top left, rgba(146,43,225,1) 0%, rgba(43,9,107,1) 100%);
  background-repeat: no-repeat;
  max-width: 1200px;
  margin: 2rem auto 3rem auto;
  }

  p{
      margin: 1.1rem auto;
      line-height: 1.5rem;
  }
`

export default GlobalStyle
