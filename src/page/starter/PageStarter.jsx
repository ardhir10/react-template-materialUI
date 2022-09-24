import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BreadCrumbs from "../../components/template/component/breadcrumb/BreadCrumb";

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
  useEffect(() => {
    document.title =  process.env.REACT_APP_NAME+" - Page Starter";
  }, []);
  return (
    <Box>
      {/* HEADER */}
      <Box sx={{ p: "20px 20px 0px 20px" }}>
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <Grid container justify="space-between" sx={{ marginTop: "30px" }}>
          <Grid item xs={6}>
            <Typography sx={{ fontWeight: 500 }} variant="h5">
              Starter Page
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button
              sx={{ float: "right" }}
              component={NavLink}
              to="/"
              variant="text"
            >
              TAMBAH DATA
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Divider></Divider>

      <Box sx={{ marginTop: "20px", p: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              numquam, et ab cum quas asperiores eaque rem ut cumque veniam
              officia natus autem vitae, nesciunt unde quod omnis architecto
              perspiciatis?Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Sapiente numquam, et ab cum quas asperiores eaque rem ut
              cumque veniam officia natus autem vitae, nesciunt unde quod omnis
              architecto perspiciatis? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Sapiente numquam, et ab cum quas asperiores
              eaque rem ut cumque veniam officia natus autem vitae, nesciunt
              unde quod omnis architecto perspiciatis?
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PageStarter;
