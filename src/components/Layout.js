import React from 'react'
import Header from './Header'
import Footer from './Footer'
import layoutStyles from './layout.module.scss'
import { rhythm} from '../utils/typography'
import Sidebar from './Sidebar'

const Layout = (props) =>{
    return (
        <div className = {layoutStyles.outerContainer}>
            <div className = {layoutStyles.sidebar}
                 style = {{
                    
                     marginLeft:  rhythm(1),
                     marginRight: rhythm(0.5),
                     //maxWidth: rhythm(12),
                     padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
                 }}>
                <Sidebar />
            </div>

            <div
                className = {layoutStyles.container}
                    style = {{
                   
                    marginLeft: rhythm(0.5),
                    marginRight: `auto`,
                    //maxWidth: rhythm(23),
                    padding: `${rhythm(0)} ${rhythm(.5)}`,
                }}
                >
            

                <div className = {layoutStyles.content}>
                    <Header />
                    {props.children}
                </div> 
                
                <Footer />
            </div>
        </div>
    )
}

export default Layout