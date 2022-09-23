import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import BreadCrumbs from "../../components/template/component/breadcrumb/BreadCrumb";
import CardBase from "../../components/template/component/card/CardMonitoring";


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
    title: "Starter Page",
    underline: "hover",
    key: "2",
    color: "inherit",
    href: "/",
    isActive: true,
    onclick: null,
  },
];

const PageStarter = () => {
  
  return (
    <Box>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <Typography sx={{ marginTop: "30px" }} variant="h4" >
        Starter Page
      </Typography>
      <Box sx={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <CardBase value={'Hello Friends !'} title="Starter Page"></CardBase>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PageStarter;
