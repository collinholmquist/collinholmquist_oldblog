import React from 'react' 
import ProfilePic from '../assets/Headshot.jpg'
import { rhythm } from '../utils/typography'

const Sidebar = ()=> {

    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: `purple`,
            marginTop: rhythm(1),
            paddingTop: rhythm(1)
        }}>
          
            <img src ={ProfilePic}
                 alt = 'Collin Holmquist'
                 style = {{
                     height: '5rem',
                     width: '4.75rem',
                     borderRadius: '50%',
                     marginBottom: 0,
                     marginRight: 10

                 }} />
            
            <h1>Collin Holmquist</h1>

            <p>
                Computer Science Teacher at Omaha Central. Teaching Java, JavaScript and Python. 
            </p>
        
            
        </div>
    )
}

export default Sidebar