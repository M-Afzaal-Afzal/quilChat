import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'



// todo - choose the font the past the cdn link in the document.js file

const fonts = {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
}

// todo - choose the brand colors

const colors = {};

const breakpoints = createBreakpoints({
    sm: '37.5em',
    md: '56.25em',
    lg: '75em',
    xl: '87.5em',
})

const theme = extendTheme({
    colors: colors,
    // todo set the focus outline color
    shadows: {
        outline: '0 0 0 3px rgba(66, 153, 225, 0.6);'
    },
    fonts,
    breakpoints,
    styles: {
        global: {
            // todo set the default font color and line height
            "html, body": {
                color: "rgba(0,0,0,0.6)",
                lineHeight: "tall",
            },
            a: {
                textDecoration: "none",
            },
            ':focus:not(:focus-visible):not([role="dialog"]):not([role="menu"])': {
                boxShadow: 'none !important'
            }
        }
    }
    // icons: {
    //
    // },
})

export default theme