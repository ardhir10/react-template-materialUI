import React from 'react';

import List from "@mui/material/List";

import { styled } from '@mui/system';
import AppLeftBarMenuItem from './AppLeftBarMenuItem';
import { Dashboard, AutoFixHigh } from "@mui/icons-material";



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
    return (
      <StyledList>
        <AppLeftBarMenuItem
          icon={<Dashboard color='inherit'/>}
          end="true"
          to="/"
          name="Dashboard"
        ></AppLeftBarMenuItem>
        
        <AppLeftBarMenuItem
          icon={<AutoFixHigh />}
          end="false"
          to="/starter"
          name="Starter Page"
        ></AppLeftBarMenuItem>
      </StyledList>
    );
}

export default AppLeftBarMenu;
