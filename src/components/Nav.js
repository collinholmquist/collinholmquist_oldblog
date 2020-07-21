import React from 'react'
import { Link } from 'gatsby'

const Nav = () => {

    return (

        <div>
            <nav>
                    <ul style = {{
                        display: `flex`, 
                        flexDirection: `column`,
                        listStyleType: `none`,
                        }}>
                        <li style = {{ marginRight: `1.3rem`}}>
                            <Link 
                                  style = {{textDecoration: 'none',
                                            color: `rgb(29, 27, 31)`}}
                                  to="/">
                                home
                            </Link>
                        </li>
                        <li
                        style = {{ marginRight: `1.3rem`}}>
                            <Link 
                                  style = {{textDecoration: 'none',
                                  color: `rgb(29, 27, 31)`}}
                                  to="/projects">
                                projects
                            </Link>
                        </li>

                    </ul>
                </nav>
        </div>
    )    
}

export default Nav