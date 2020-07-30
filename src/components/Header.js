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
            <header>
                <h2>
                    {data.site.siteMetadata.title}  
                </h2>
                
            </header>
        </div>
    )
}

export default Header