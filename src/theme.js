import { createMuiTheme } from '@material-ui/core/styles'
import colors from './design/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.cinnabar,
    },
    secondary: {
      main: colors.mardiGras,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Roboto',
    h1: {
      fontSize: 36,
      color: 'white',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: 'normal',
      textAlign: 'center',
      letterSpacing: '0.5px',
    },
    h2: {
      fontSize: 24,
      color: colors.cinnabar,
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: 'normal',
      textAlign: 'center',
      letterSpacing: '0.5px',
    },
  },
})

export default theme
