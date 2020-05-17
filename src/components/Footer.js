import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = ()=> {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <div className = {footerStyles.footer}>
         
         <p>{data.site.siteMetadata.author} © 2020</p>
        </div>
    )
}

export default Footer