import { Link } from 'gatsby'
import React from 'react'

export const Navbar = () => {
    return (
        <nav>
            <h1>Jimmy Rickardsson</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}
