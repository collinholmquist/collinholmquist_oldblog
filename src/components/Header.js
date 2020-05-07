import React from 'react'
import { Link } from 'gatsby'

const Header = ()=> {

    return (

        <div>
            <header>
                <h1>Collin Holmquist</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header