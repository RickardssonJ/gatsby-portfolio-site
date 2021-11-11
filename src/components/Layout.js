import React from 'react'
import GlobalStyle from '../styles/GlobalStyles'
import { StyledFooter } from "../styles/Styling"
import { Navbar } from './Navbar'


export const Layout = ({ children }) => {



    // allt som layout komponenten wrappar som tex index.js blit childrens till layout komponenten och finns då i props.children
    return (
        <>
            <GlobalStyle />

            <Navbar />
            <div>
                {children}
            </div>
            <StyledFooter>
                <p>Copyright 2021 Jimmy Rickardsson</p>
            </StyledFooter>

        </>
    )
}
