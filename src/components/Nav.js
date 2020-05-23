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
                                  to="/">
                                Home
                            </Link>
                        </li>
                        <li
                        style = {{ marginRight: `1.3rem`}}>
                            <Link 
                                  to="/projects">
                                Projects
                            </Link>
                        </li>
                        <li
                        style = {{marginRight: `1.3rem`}}>
                            <Link  
                                  to="/blog"
                                  >
                                Blog
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
        </div>
    )    
}

export default Nav