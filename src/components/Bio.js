import React from 'react' 
import ProfilePic from '../assets/Headshot.jpg'

const Bio = ()=> {

    return (
        <div style = {{
            display: 'flex'
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
            
            <p style = {{
                maxWidth: 350
            }}>
                Computer Science Teacher at Omaha Central. Teaching Java, JavaScript and Python. 
            </p>
        
            
        </div>
    )
}

export default Bio