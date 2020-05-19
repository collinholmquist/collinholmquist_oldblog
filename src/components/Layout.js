import React from 'react'
import Header from './Header'
import Footer from './Footer'
import layoutStyles from './layout.module.scss'
import { rhythm} from '../utils/typography'

const Layout = (props) =>{
    return (
        <div
           className = {layoutStyles.container}
           style = {{
            marginTop: rhythm(-2),
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
           }}
            >
            <div className = {layoutStyles.content}>
                <Header />
                {props.children}
            </div> 
            
            <Footer />
        </div>
    )
}

export default Layout