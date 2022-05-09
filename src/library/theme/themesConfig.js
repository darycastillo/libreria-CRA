import { lightBlue, red } from "@material-ui/core/colors";
import { fuseDark, mpPrimary, mpSecondary } from "./fuse-colors/index";
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import mpOverrides from './mp-overrides'

const breakpoints = createBreakpoints({})

const ThemesConfig = {
    default: {
      palette: {
        type: "light",
        primary: fuseDark,
        secondary: {
          light: lightBlue[400],
          main: lightBlue[600],
          dark: lightBlue[700]
        },
        error: red
      },
      status: {
        danger: "orange"
      }
    },
    sunset: {
      palette: {
        type: "light",
        primary: {
          light: "#FF908B",
          main: "#D0605E",
          dark: "#9B3134"
        },
        secondary: {
          light: "#C76A1D",
          main: "#FF994C",
          dark: "#FFCA7B",
          contrastText: "#FFF"
        },
        error: red
      },
      status: {
        danger: "orange"
      }
    },
    greeny: {
      palette: {
        type: "light",
        primary: {
          light: "#6CABD4",
          main: "#387CA3",
          dark: "#005074"
        },
        secondary: {
          light: "#89F6CF",
          main: "#55C39E",
          dark: "#159270",
          contrastText: "#FFF"
        },
        error: red
      },
      status: {
        danger: "orange"
      }
    },
    beach: {
      palette: {
        type: "light",
        primary: {
          light: "#C4D8DD",
          main: "#93A7AB",
          dark: "#65787C",
          contrastText: "#FFF"
        },
        secondary: {
          light: "#FFB281",
          main: "#F18153",
          dark: "#BA5228",
          contrastText: "#FFF"
        }
      }
    },
    tech: {
      palette: {
        type: "light",
        primary: {
          light: "#87EFFF",
          main: "#4DBCE9",
          dark: "#008CB7",
          contrastText: "#FFF"
        },
        secondary: {
          light: "#FFFF83",
          main: "#D1E751",
          dark: "#9DB516"
        }
      }
    },
    sweetHues: {
      palette: {
        type: "light",
        primary: {
          light: "#D5C1EB",
          main: "#A391B9",
          dark: "#746389",
          contrastText: "#FFF"
        },
        secondary: {
          light: "#90AFD4",
          main: "#6080A3",
          dark: "#325474"
        }
      }
    },
    defaultDark: {
      palette: {
        type: "dark",
        primary: fuseDark,
        secondary: {
          light: lightBlue[400],
          main: lightBlue[600],
          dark: lightBlue[700]
        },
        error: red
      },
      status: {
        danger: "orange"
      }
    },
    deepOcean: {
      palette: {
        type: "dark",
        primary: {
          light: "#8F53E7",
          main: "#5A24B4",
          dark: "#1E0083"
        },
        secondary: {
          light: "#FF61FF",
          main: "#FE00E9",
          dark: "#C600B6",
          contrastText: "#FFF"
        }
      }
    },
    slate: {
      palette: {
        type: "dark",
        primary: {
          light: "#86FFF7",
          main: "#4ECDC4",
          dark: "#009B94"
        },
        secondary: {
          light: "#FF9D99",
          main: "#FF6B6B",
          dark: "#C73840",
          contrastText: "#FFF"
        }
      }
    },
    // reference: https://material-ui.com/customization/default-theme/
    MP: {
      palette: {
        type: "light",
        primary: mpPrimary,
        secondary: mpSecondary,
        background: {
          default: '#E7EAF3'
        },
        black: {
          highEmphasis: 'rgba(0, 0, 0, 0.87)',
          mediumEmphasis: 'rgba(0, 0, 0, 0.6)',
          inactive: 'rgba(0, 0, 0, 0.54)',
          disabled: 'rgba(0, 0, 0, 0.38)',
        },
        white: {
          highEmphasis: '#FFFFFF',
          mediumEmphasis: 'rgba(255, 255, 255, 0.74)',
          inactive: 'rgba(255, 255, 255, 0.54)',
          disabled: 'rgba(255, 255, 255, 0.38)',
        },
        delete:"#B00020",
        border:'rgba(0,0,0,0.12)'
      },
      typography: {
        fontFamily: [
          'Work Sans',
          'sans-serif'
        ],
        h1: {
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: -1.5,
          [breakpoints.down('md')]: {
            fontSize: '8.56rem'
          },
          [breakpoints.down('sm')]: {
            fontSize: '7.53rem'
          },
          [breakpoints.down('xs')]: {
            fontSize: '5.6rem'
          },
        },
        h2: {
          fontSize: 60,
          fontWeight: 700,
          letterSpacing: -0.5,
          [breakpoints.down('md')]: {
            fontSize: '5.328rem'
          },
          [breakpoints.down('sm')]: {
            fontSize: '4.6672rem'
          },
          [breakpoints.down('xs')]: {
            fontSize: '3.8rem'
          },
        },
        h3: {
          fontSize: 48,
          fontWeight: 700,
          [breakpoints.down('md')]: {
            fontSize: '4.48rem'
          },
          [breakpoints.down('sm')]: {
            fontSize: '4.11rem'
          },
          [breakpoints.down('xs')]: {
            fontSize: '3.2rem'
          },
        },
        h4: {
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: 0.25,
          [breakpoints.down('md')]: {
            fontSize: '3.232rem'
          },
          [breakpoints.down('sm')]: {
            fontSize: '2.91504rem'
          },
          [breakpoints.down('xs')]: {
            fontSize: '2.5rem'
          },
        },
        h5: {
          fontWeight: 700,
          fontSize: 24,
          [breakpoints.down('md')]: {
            fontSize: '2.3988rem'
          },
          [breakpoints.down('sm')]: {
            fontSize: '2.0988rem'
          },
          [breakpoints.down('xs')]: {
            fontSize: '2rem'
          },
        },
        h6: {
          fontWeight: 700,
          fontSize: 18,
          [breakpoints.down('md')]: {
            fontSize: '1.75728rem'
          },
          [breakpoints.down('sm')]: {
            fontSize: '1.75008rem'
          },
          [breakpoints.down('xs')]: {
            fontSize: '1.7rem'
          },
        },
        subtitle1: {
          fontWeight: 500,
          fontSize: 16,
          letterSpacing: 0.15,
          [breakpoints.down('md')]: {
            fontSize: '1.6rem'
          },
          [breakpoints.down('sm')]: {
            fontSize: '1.6rem'
          },
          [breakpoints.down('xs')]: {
            fontSize: '1.6rem'
          },
        },
        subtitle2: {
          fontWeight: 400,
          fontSize: 14,
          letterSpacing: 0.1,
          [breakpoints.down('md')]: {
            fontSize: '1.4rem'
          },
          [breakpoints.down('sm')]: {
            fontSize: '1.4rem'
          },
          [breakpoints.down('xs')]: {
            fontSize: '1.4rem'
          },
        },
        body1: {
          fontWeight: 400,
          fontSize: 16,
          [breakpoints.down('md')]: {
            fontSize: '1.6rem'
          },
          [breakpoints.down('sm')]: {
            fontSize: '1.6rem'
          },
          [breakpoints.down('xs')]: {
            fontSize: '1.6rem'
          },
        },
        body2: {
          fontWeight: 400,
          fontSize: 14,
          letterSpacing: -0.15,
          [breakpoints.down('md')]: {
            fontSize: '1.4rem'
          },
          [breakpoints.down('sm')]: {
            fontSize: '1.4rem'
          },
          [breakpoints.down('xs')]: {
            fontSize: '1.4rem'
          },
        },
        button: {
          fontWeight: 500,
          fontSize: 14,
          letterSpacing: 1.25,
          [breakpoints.down('md')]: {
            fontSize: '1.4rem'
          },
          [breakpoints.down('sm')]: {
            fontSize: '1.4rem'
          },
          [breakpoints.down('xs')]: {
            fontSize: '1.4rem'
          },
        },
        caption: {
          fontWeight: 400,
          fontSize: 12,
          letterSpacing: 0.4,
          [breakpoints.down('md')]: {
            fontSize: '1.2rem'
          },
          [breakpoints.down('sm')]: {
            fontSize: '1.2rem'
          },
          [breakpoints.down('xs')]: {
            fontSize: '1.2rem'
          },
        },
        overline: {
          fontWeight: 500,
          fontSize: 10,
          letterSpacing: 1.5,
          [breakpoints.down('md')]: {
            fontSize: '1rem'
          },
          [breakpoints.down('sm')]: {
            fontSize: '1rem'
          },
          [breakpoints.down('xs')]: {
            fontSize: '1rem'
          },
        }
      },
      shadows: [
        'none', //0
        '0px 2px 2px rgba(0, 0, 0, 0.06)', //1
        '0px 1px 5px rgba(0, 0, 0, 0.1), 0px 3px 4px rgba(0, 0, 0, 0.06), 0px 2px 4px rgba(0, 0, 0, 0.07)', //2
        '0px 1px 8px rgba(0, 0, 0, 0.1), 0px 3px 4px rgba(0, 0, 0, 0.06), 0px 3px 3px rgba(0, 0, 0, 0.07)', //3
        '0px 1px 10px rgba(0, 0, 0, 0.1), 0px 4px 5px rgba(0, 0, 0, 0.06), 0px 2px 4px rgba(0, 0, 0, 0.07)', //4
        '', //5
        '0px 3px 5px rgba(0, 0, 0, 0.1), 0px 1px 18px rgba(0, 0, 0, 0.06), 0px 6px 10px rgba(0, 0, 0, 0.07)', //6
        '', //7
        '0px 4px 5px rgba(0, 0, 0, 0.1), 0px 3px 14px rgba(0, 0, 0, 0.06), 0px 8px 10px rgba(0, 0, 0, 0.07)', //8
        '0px 5px 6px rgba(0, 0, 0, 0.1), 0px 3px 16px rgba(0, 0, 0, 0.06), 0px 9px 12px rgba(0, 0, 0, 0.07)', //9
        '', //10
        '', //11
        '0px 7px 8px rgba(0, 0, 0, 0.1), 0px 5px 22px rgba(0, 0, 0, 0.06), 0px 12px 17px rgba(0, 0, 0, 0.07)', //12
        '', //13
        '', //14
        '', //15
        '0px 8px 10px rgba(0, 0, 0, 0.1), 0px 6px 30px rgba(0, 0, 0, 0.06), 0px 16px 24px rgba(0, 0, 0, 0.07)', //16
        '', //17
        '', //18
        '', //19
        '', //20
        '', //21
        '', //22
        '', //23
        '0px 11px 15px rgba(0, 0, 0, 0.1), 0px 9px 46px rgba(0, 0, 0, 0.06), 0px 24px 38px rgba(0, 0, 0, 0.07)' //24
      ],
      overrides: mpOverrides,
    }
  };


export default ThemesConfig;
