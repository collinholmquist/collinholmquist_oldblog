import React from 'react' 
import ProfilePic from '../assets/HolmquistHeadshot.jpg'
import sidebarStyles from './sidebar.module.scss'
import Nav from './Nav'
import Footer from './Footer'
import Social from './Social'
import Header from './Header'

const Sidebar = ()=> {

    return (
        <div className = {sidebarStyles.container}>
            <Header />
            <div>
                <div className = {sidebarStyles.nameImgContainer}>
                    <img src ={ProfilePic}
                        alt = 'Collin Holmquist'
                        className = {sidebarStyles.profilePic} 
                    />
                    <div style={{fontSize:'1rem'}}>
                    computer science &nbsp;
                    @omaha central
                    </div>
                </div>
            </div>
            
        
            <Nav />
            <Social />
            <Footer />
            
        </div>
    )
}

export default Sidebar