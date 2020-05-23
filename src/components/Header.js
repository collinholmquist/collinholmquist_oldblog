import React from 'react'
import { graphql ,useStaticQuery} from 'gatsby'
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
                
            </header>
        </div>
    )
}

export default Header