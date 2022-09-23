
import './App.css';

import AppStyled from './components/template/app/AppStyled';
import AppHeader from './components/template/app/appHeader/AppHeader';

import Logo from './images/logo_grootech_white.svg'
import LogoWhite from './images/logo_grootech.svg'
import AppTheme from './components/template/app/AppTheme';
import AppMainPage from './components/template/app/appMainPage/AppMainPage';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import React from 'react';
import ThemeContext from './context/ThemeContext';
import AppLeftBar from './components/template/app/appLeftBar/AppLeftBar';
import {
  Outlet
} from "react-router-dom";


 

function App() {
  const [themeMode, setThemeMode] = React.useState('light');
  const [menuOpen, setMenuOpen] = React.useState(true);
  
 

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      toggleMenu: () => {
        setMenuOpen((prevMode) => (!prevMode));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        // ...AppTheme,
        palette: {
          ...AppTheme.palette,
          ...(themeMode === 'dark' ? {
            mode: themeMode,
            menuOpen,
            background: {
              default: "#181818"
            }
          }:{
            mode: themeMode,
            menuOpen,
            background: {
              default: "#FFFFFF"
              // default: "#F9F9F9"
            }
          })
        },
      }),
    [themeMode, menuOpen],
  );

  React.useEffect(() => {
  }, [theme,menuOpen]);

  return( 
    // App
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        
        <CssBaseline/>
          <AppStyled>
            {/* AppHeader */}
            <AppHeader title={'BASIC TEMPLATE'} logo={themeMode === 'dark' ? Logo:LogoWhite}></AppHeader>
            {/* AppLeftBar */}
              {/* AppLeftBarMenu */}
                {/* App */}
              <AppLeftBar></AppLeftBar>
            {/* AppMainPage */}
            <AppMainPage>
                <Outlet />
            </AppMainPage>
          </AppStyled>
          
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
