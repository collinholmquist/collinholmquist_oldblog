import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/head'

const NotFound = () => {

    return (
        <Layout>
            <Head title = "404 Error" />
            <h1>Error! Page Not Found</h1>
            <Link to ='/' >
                 
                <h2>Go Back Home</h2>
                
            </Link>

        </Layout>
    )
}

export default NotFound