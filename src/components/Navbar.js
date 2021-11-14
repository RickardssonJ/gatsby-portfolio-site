import { Link } from 'gatsby'
import React from 'react'
import { StyledNav, StyledNavLinksUl } from '../styles/Styling'

const linkStyle = {
    display: "inline-block",
};

export const Navbar = () => {
    return (
        <StyledNav>
            <h1>Jimmy Rickardsson</h1>
            <StyledNavLinksUl>
                <Link to="/" style={linkStyle}>Hem</Link>
                <Link to="/about" style={linkStyle}>Om mig</Link>
                <Link to="/projects" style={linkStyle}>Portfolio</Link>
            </StyledNavLinksUl>
        </StyledNav>
    )
}
