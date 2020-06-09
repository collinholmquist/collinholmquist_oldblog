import React from 'react'
import { graphql ,useStaticQuery} from 'gatsby'


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
                    paddingBottom: '2rem'
                }}>
                <h1>
                    {data.site.siteMetadata.title}  
                </h1>
                
            </header>
        </div>
    )
}

export default Header