import React from 'react'
import GlobalStyle from '../styles/GlobalStyles'
import { StyledWrapper } from '../styles/Styling'
import { Navbar } from './Navbar'


export const Layout = ({ children }) => {


    // allt som layout komponenten wrappar som tex index.js blir childrens till layout komponenten och finns då i props.children
    return (
        <>
            <GlobalStyle />
            <StyledWrapper>
                <Navbar />
                <div>
                    {children}
                </div>
            </StyledWrapper>
        </>
    )
}
