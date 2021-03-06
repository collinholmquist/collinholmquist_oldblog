import React from 'react'
import layoutStyles from './layout.module.scss'
import Sidebar from './Sidebar'
import '../styles/index.scss'

const Layout = (props) =>{
    return (
        <div className = {layoutStyles.outerContainer}>

            <div className = {layoutStyles.sidebar}>
                
                <Sidebar />
             </div>
            
           
            <div className = {layoutStyles.mainContainer}>
                <div className = {layoutStyles.content}>
                    {props.children}
                </div> 
            </div>
        </div>
    )
}

export default Layout