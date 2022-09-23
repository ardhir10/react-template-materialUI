import { ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import React from 'react';
import {NavLink} from 'react-router-dom';

const CustomNavLink = React.forwardRef((props, ref) => (
  <NavLink
    ref={ref}
    {...props}
    className={({ isActive }) =>
      isActive ? props.className + " Mui-selected" : props.className
    }
  />
));

const AppLeftBarMenuItem = (props) => {
    const theme = useTheme();
    const open = theme.palette.menuOpen;
    return (
      <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton
          component={CustomNavLink}
          end={props.end}
          to={props.to}
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
            {props.icon}
          </ListItemIcon>
          <ListItemText primary={props.name} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    );
}

export default AppLeftBarMenuItem;
