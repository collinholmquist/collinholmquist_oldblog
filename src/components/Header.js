import React from 'react'
import { Link, graphql ,useStaticQuery} from 'gatsby'


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
                    padding: '1rem 0 3rem'
                }}
            >
                <h1>
                    
                        {data.site.siteMetadata.title}
                    
                </h1>
                <nav>
                    <ul style = {{
                        display: `flex`, 
                        listStyleType: `none`,
                        
                        }}>
                        <li
                            style = {{
                                
                                marginRight: `1.3rem`
                            }}
                        >
                            <Link style = {{
                                textDecoration: 'none'
                            }}
                                  to="/"
                                  
                                 >
                                Home
                            </Link>
                        </li>
                        <li
                        style = {{
                                
                            marginRight: `1.3rem`
                        }}>
                            <Link 
                                  to="/about"
                                  >
                                About
                            </Link>
                        </li>
                        <li
                        style = {{
                                
                            marginRight: `1.3rem`
                        }}>
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