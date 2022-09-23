import { Box } from '@mui/system';
import React from 'react';
import { useTheme } from '@emotion/react';


const AppMainPage = (props) => {
    const theme  = useTheme();
    return (
      <Box
        position="realtive"
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          [theme.breakpoints.only("sm")]: {
            p: 2,
          },
          marginLeft: "60px",
          // marginTop: "60px",
          ...(theme.palette.menuOpen && {
            marginLeft: "240px",
          }),
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        {props.children}
      </Box>
    );
}

export default AppMainPage;
