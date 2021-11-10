import React from 'react'
import { Navbar } from './Navbar'

export const Layout = ({ children }) => {
    // allt som layout komponenten wrappar som tex index.js blit childrens till layout komponenten och finns då i props.children
    return (
        <div>
            <Navbar />
            <div>
                {children}
            </div>
            <footer>
                <p>Copyright 2021 Jimmy Rickardsson</p>
            </footer>
        </div>
    )
}
