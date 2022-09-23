import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import { useTheme } from '@emotion/react';
import { NavLink } from "react-router-dom";
import { styled } from '@mui/system';


const CustomNavLink = React.forwardRef((props, ref) => (
  <NavLink
    ref={ref}
    {...props}
    className={({ isActive }) =>
      isActive ? props.className + " Mui-selected" : props.className
    }
  />
));

const StyledList = styled(List)(({ theme }) => ({
  // selected and (selected + hover) states
  "&& .MuiListItem-root": {},
  "&& .Mui-selected, && .Mui-selected:hover": {
    backgroundColor: theme.palette.mode === "light" ? "#ebebeb" : "#37373C",
    "&, & .MuiListItemIcon-root": {
      color: theme.palette.mode === "light" ? "#000" : "#CCCCCC",
    },
  },
  // hover states
  "& .MuiListItemButton-root:hover": {
    // backgroundColor: "orange",
    // "&, & .MuiListItemIcon-root": {
    //   color: "#000",
    // },
  },
}));

const AppLeftBarMenu = () => {
     const theme = useTheme();
     const open = theme.palette.menuOpen;
    return (
      <StyledList>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={CustomNavLink}
            end
            to="/"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <InboxIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Dashboard"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={CustomNavLink}
            to="/starter"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Started"} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </StyledList>
    );
}

export default AppLeftBarMenu;
