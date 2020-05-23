import Typography from "typography"
import wordpress2016 from "typography-theme-wordpress-2016"

wordpress2016.overrideThemeStyles = () => ({
    
    'a' : {
        textDecoration: `none`,
        color: '#222',
        boxShadow: `none`
    },
    'h3' : {
        fontFamily: 'Montserrat'
    }
})

const typography = new Typography(wordpress2016)

export const { scale, rhythm, options} = typography
export default typography
