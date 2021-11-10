import React from 'react'
import { createGlobalStyle } from "styled-components"
import { Navbar } from './Navbar'

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
  }
`

export const Layout = ({ children }) => {



    // allt som layout komponenten wrappar som tex index.js blit childrens till layout komponenten och finns då i props.children
    return (
        <>
            <GlobalStyle />
            <div>
                <Navbar />
                <div>
                    {children}
                </div>
                <footer>
                    <p>Copyright 2021 Jimmy Rickardsson</p>
                </footer>
            </div>
        </>
    )
}
