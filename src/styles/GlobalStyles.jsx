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
  min-height: 100vh;
  background-image: linear-gradient(315deg, #000000 0%, #313131 100%);
}


  p{
      margin: 1.1rem auto;
      line-height: 1.5rem;
  }

  ::-webkit-scrollbar {
  display: none;
}
`

export default GlobalStyle
