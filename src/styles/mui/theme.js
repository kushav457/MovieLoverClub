const { createTheme } = require("@mui/material")

const backgroundColour="#F3F8F2"
const primaryColour="#FCBD7E"
const textColour="#242423"
const secondaryColour="#8895c9"
const highlightColour="#EC058E"

const backgroundColourDark="#d6d672ff"
const primaryColourDark="#FCBD7E"
const textColourDark="#4d953eff"
const secondaryColourDark="#de974fff"
const highlightColourDark="#EC058E"
let theme = createTheme({
    palette:
    {
      mode:"light",
      background:{
       default: backgroundColour
    },
    primary:{
        main:primaryColour
    },
     secondary:{
        main:secondaryColour
    },
     tertiary:{
        main:highlightColour
    },
     icon:{
        main:textColour
    }, error:{
        main:"#EC058E"
    }
    }
})

let darkTheme = createTheme({
    palette:
    {
      mode:"dark",
      background:{
       default:backgroundColourDark
    },
    primary:{
        main:primaryColourDark
    },
     secondary:{
        main:secondaryColourDark
    },
     tertiary:{
        main:highlightColourDark
    },
     icon:{
        main:textColourDark
    }, error:{
        main:"#EC058E"
    }
    }
})
export {theme,darkTheme};
