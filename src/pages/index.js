import React from 'react'
import Layout from '../components/Layout'
import {graphql, useStaticQuery, Link} from 'gatsby'
import Head from '../components/head'
import blogStyles from './blog.module.scss'


const Index = ()=> {

    const data = useStaticQuery(graphql`
    
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter{
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    
    `)

    

    return (
        
        <Layout>
            <Head title = "Home" />
            
            <ol className = {blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge)=> {

                    return (
                        <li className = {blogStyles.post}>
                          <Link 
                            to ={`./${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                          </Link> 
                        </li>
                    )
                } )}
            </ol>
        </Layout>
            
    )
}

export default Index