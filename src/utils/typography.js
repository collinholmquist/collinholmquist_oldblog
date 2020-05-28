import Typography from "typography"
//import wordpress2016 from "typography-theme-wordpress-2016"

/* Typography.overrideThemeStyles = () => ({
    
    'a' : {
        textDecoration: `none`,
        color: '#222',
        boxShadow: `none`
    },
    'h3' : {
        fontFamily: 'Montserrat'
    }
}) */

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.5,
    headerFontFamily: [
        "Work Sans",
        "Roboto",
        "sans-serif"
    ],
    bodyFontFamily: ["Work Sans", "sans-serif"]
})

export const { scale, rhythm, options} = typography
export default typography
