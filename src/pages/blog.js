import React from 'react'
import Layout from '../components/Layout'
import {graphql, useStaticQuery, Link} from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'


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
            <Head title = "Blog" />
            <h1>Blog Posts</h1>
            <ol className = {blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge)=> {

                    return (
                        <li className = {blogStyles.post}>
                          <Link 
                            to ={`./blog/${edge.node.fields.slug}`}>
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

export default Blog