import React from 'react'
import Layout from '../components/Layout'
import {graphql, useStaticQuery, Link} from 'gatsby'
import blogStyles from './blog.module.scss'

const Blog = ()=> {

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
            <h1>Blog Posts</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge)=> {

                    return (
                        <li>
                          <Link 
                            className = {blogStyles.title}
                            to ={`./blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                          </Link>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                } )}
            </ol>
        </Layout>
            
    )
}

export default Blog