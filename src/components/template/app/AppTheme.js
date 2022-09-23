
 
 
const AppTheme = {
  palette: {
    primary: {
      main: '#279B92',
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
    MuiCard: {
      styleOverrides: {
        root: {
          background : 'red'
        },
      },
    },
  },
};

export default AppTheme;