import React from 'react' 
import ProfilePic from '../assets/Headshot.jpg'
import sidebarStyles from './sidebar.module.scss'
import Nav from './Nav'
import Footer from './Footer'
import Social from './Social'

const Sidebar = ()=> {

    return (
        <div className = {sidebarStyles.container}>
          
            <img src ={ProfilePic}
                 alt = 'Collin Holmquist'
                 className = {sidebarStyles.profilePic} 
            />
            
            <h3>Collin Holmquist</h3>

            
            <p>
                Computer Science Teacher at Omaha Central. Teaching Java, JavaScript and Python. 
            </p>
        
            <Nav />
            <Social />
            <Footer />
            
        </div>
    )
}

export default Sidebar