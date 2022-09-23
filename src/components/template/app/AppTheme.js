
 
 
const AppTheme = {
  palette: {
    primary: {
      // main: '#279B92',
      main: '#0761D4',
    }
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '0.875rem',
          borderRadius:'20px',
          lineHeight:1.5,
          padding:'8px 20px',
          fontWeight: 500,
        },
      },
    },
   
  },
};

export default AppTheme;