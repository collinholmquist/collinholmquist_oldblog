import React from 'react' 
import ProfilePic from '../assets/HolmquistHeadshot.jpg'
import sidebarStyles from './sidebar.module.scss'
import Nav from './Nav'
import Footer from './Footer'
import Social from './Social'

const Sidebar = ()=> {

    return (
        <div className = {sidebarStyles.container}>
          
            <div className = {sidebarStyles.nameImgContainer}>
                <img src ={ProfilePic}
                    alt = 'Collin Holmquist'
                    className = {sidebarStyles.profilePic} 
                />
                <h2 className = {sidebarStyles.name}>collin holmquist</h2>
            </div>
            <p>
                comp sci teacher @ omaha central. java/javascript/python
            </p>
        
            <Nav />
            <Social />
            <Footer />
            
        </div>
    )
}

export default Sidebar