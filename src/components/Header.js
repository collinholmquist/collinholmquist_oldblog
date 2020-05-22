import React from 'react'
import { Link, graphql ,useStaticQuery} from 'gatsby'
import {  scale} from "../utils/typography"

const Header = ()=> {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (

        <div>
            <header 
                style = {{
                    marginTop: 0
                }}>
                <h1
                 style = {{
                    ...scale(1.5)
                 }}
                >
                    {data.site.siteMetadata.title}  
                </h1>
                <nav>
                    <ul style = {{
                        display: `flex`, 
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
            </header>
        </div>
    )
}

export default Header