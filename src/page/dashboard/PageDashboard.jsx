import { Box, Grid,  Typography } from '@mui/material';
import React from 'react';
import BreadCrumbs from '../../components/template/component/breadcrumb/BreadCrumb';
import CardMonitoring from '../../components/template/component/card/CardMonitoring';
import { useEffect, useReducer } from "react";

import io from "socket.io-client";


const breadcrumbs = [
  {
    title: "Home",
    underline: "hover",
    key: "1",
    color: "inherit",
    href: "/",
    isActive: false,
    onclick: null,
  },
  {
    title: "Dashboard",
    underline: "hover",
    key: "2",
    color: "inherit",
    href: "/",
    isActive: true,
    onclick: null,
  },
];

function reducer(state, action) {
    switch (action.type) {
      case action.type:
        return { ...state,[action.type]: action.payload };
      default:
        break;
    }
}
const PageDashboard = () => {
  const [state, dispatch] = useReducer(reducer, {});
  useEffect(() => {
    const socket = io("https://sockettelkomwater.grootech.id");
    socket.on("eh-water", (d) => {
      for (const key in d) {
        if (Object.hasOwnProperty.call(d, key)) {
          const element = d[key];
          var x = parseFloat(element);
          dispatch({ type: key, payload: x.toFixed(1) });
        }
      }
    });
   
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("eh-water");
    };
  }, []);
    return (
      <Box>
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <Typography sx={{ marginTop: "30px" }} variant="h4" color="">
          Dashboard
        </Typography>
        <Box sx={{ marginTop: "20px" }} >
          <Grid container spacing={2} sx={{marginBottom:2}}>
             <Grid item md={10} xs={12}>
              <CardMonitoring value={state.ph} title="Realtime Trend" ></CardMonitoring>
            </Grid>
          </Grid>
          
          <Grid container spacing={2} sx={{marginBottom:2}}>
           
            <Grid item md={2} xs={12}>
              <CardMonitoring value={state.ph} title="Ph" ></CardMonitoring>
            </Grid>
            <Grid item md={2} xs={12}>
              <CardMonitoring value={state.tss} title="Tss"></CardMonitoring>
            </Grid>
            <Grid item md={2} xs={12}>
              <CardMonitoring value={state.cod} title="CoD"></CardMonitoring>
            </Grid>
            <Grid item md={2} xs={12}>
              <CardMonitoring value={state.amonia} title="Amonia"></CardMonitoring>
            </Grid>
            <Grid item md={2} xs={12}>
              <CardMonitoring value={state.flow_meter} title="FlowMeter"></CardMonitoring>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
}

export default PageDashboard;
