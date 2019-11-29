
import { SheetsRegistry, jss } from 'react-jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';



const textColorDark = '#554740'
const textColorLight = '#f9f7f6'

const secondary = '#ff6000'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#efefef",
    },
    secondary: {
      main: secondary,  
    },
    error: {
      main: '#FF3B3F',  
    },
    text: {
      primary: textColorDark,
      secondary: textColorLight
    }
  },
  overrides: {
    MuiTypography: {
      "h1": {
        fontSize: '50px',
        fontWeight: 500,
      },
      "h3": {
        color: textColorDark,
        fontWeight: 500,
        fontSize: '32px',
      },
      "h4": {
        fontWeight: 700,
        color: textColorDark,
      },
      "h5": {
        fontWeight: 500,
        fontSize: '19px',
      },
      "subtitle1":{
        fontWeight: 500,
        fontSize: '17px',
      }
    },
    MuiInputAdornment:{
      positionStart:{
        color: textColorDark,
      }
    }, 
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: secondary,
      },
    },
    MuiCheckbox:{
      root:{
        color: secondary,
      },
    },
    MuiPickersDay: {
      isSelected: {
        backgroundColor: secondary,
      },
      current: {
        color: secondary,
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: secondary,
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: "14px",
      }
    }
  },
  typography: {
    useNextVariants: true,
  },
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
    jss,
  };
}

let pageContext;

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
}