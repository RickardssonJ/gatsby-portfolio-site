import { Link } from 'gatsby'
import React from 'react'
import { StyledNav, StyledLink, StyledNavLinksUl } from '../styles/Styling'

const linkStyle = {
    display: "inline-block",
};

export const Navbar = () => {
    return (
        <StyledNav>
            <h1>Jimmy Rickardsson</h1>
            <StyledNavLinksUl>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/about" style={linkStyle}>About</Link>
                <Link to="/projects" style={linkStyle}>Portfolio Projects</Link>
            </StyledNavLinksUl>
        </StyledNav>
    )
}
