import React, { useState, useEffect } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Main from './components/Main';


const App = () => {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";

  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#fb8c00',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#8d6e63',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    }
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Main />
      </ThemeProvider>
    </div>
  )
}

export default App
