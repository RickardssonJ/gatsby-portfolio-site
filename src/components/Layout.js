import React from 'react'
import GlobalStyle from '../styles/GlobalStyles'
import { Footer } from './Footer'
import { Navbar } from './Navbar'


export const Layout = ({ children }) => {



    // allt som layout komponenten wrappar som tex index.js blit childrens till layout komponenten och finns då i props.children
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <hr />
            <div>
                {children}
            </div>
            <hr />
            <Footer />

        </>
    )
}
