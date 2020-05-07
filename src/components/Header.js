import React from 'react'
import { Link } from 'gatsby'
//import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = ()=> {

    return (

        <div>
            <header>
                <h1>Collin Holmquist</h1>
                <nav>
                    <ul>
                        <li>
                            <Link className = {headerStyles.link} to="/">Home</Link>
                        </li>
                        <li>
                            <Link className = {headerStyles.link} to="/about">About</Link>
                        </li>
                        <li>
                            <Link className = {headerStyles.link} to="/blog">Blog</Link>
                        </li>
                        
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header