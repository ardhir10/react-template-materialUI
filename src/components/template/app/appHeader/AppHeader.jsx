import {
  IconButton,
  Toolbar,
  Typography,
  Box,
  Divider,
  Tooltip,
  Avatar,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from '@mui/material/AppBar';
import styled from "@emotion/styled";
import React from "react";
import ThemeContext from "../../../../context/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";



const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // background: theme.palette.mode === "dark" ? "#323233" : "#279B92",
  background: theme.palette.mode === "dark" ? "#323233" : "#ffffff",
  color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
  backgroundImage: "none",
}));

export default function AppHeader(props) {
  const theme = useTheme();
  const themeMode = React.useContext(ThemeContext);

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ py: 0.5 }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={themeMode.toggleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Box
          component="img"
          sx={{
            display: { xs: "none", md: "flex" },
            mr: 1,
            height: 50,
          }}
          alt="Your logo."
          src={props.logo}
        />

        <Box sx={{ flexGrow: 1 }}></Box>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mx: 2,
            // display: { xs: "none", md: "flex" },
            fontWeight: 700,
            letterSpacing: ".01rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {props.title}
        </Typography>
        <Divider orientation="vertical" variant="middle" flexItem></Divider>
        <Box sx={{ flexGrow: 0 }}>
          <IconButton
            sx={{ ml: 1 }}
            onClick={themeMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <Tooltip title="">
            <IconButton sx={{ p: 0, ml: 2 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
