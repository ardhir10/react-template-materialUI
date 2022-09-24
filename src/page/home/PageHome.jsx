import {
  Box,
  CardContent,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import BasicCard from "../../components/template/component/card/BasicCard";

const pageTitle = "Home Page";


const PageHome = () => {
  const theme = useTheme(); 

 useEffect(() => {
   document.title = process.env.REACT_APP_NAME + " - Page Home";
 }, []);
  
  return (
    <Box
      sx={{
        height: "100%",
        background: theme.palette.mode === "light" && "#F9F9F9",
      }}
    >
      {/* HEADER */}
      <Box sx={{ p: "20px 20px 0px 20px" }}>
        <Grid container justify="space-between" sx={{ marginTop: "55px" }}>
          <Grid item xs={6}>
            <Typography sx={{ fontWeight: 500 }} variant="h5">
              {pageTitle}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: "20px", p: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={6} lg={3} xs={12}>
            <BasicCard>
              <CardContent>
                <Typography
                  variant="span"
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    display: "block",
                    mb: 1,
                  }}
                >
                  Ph
                </Typography>
                <Typography
                  variant="span"
                  color={theme.palette.mode === "light" && "text.secondary"}
                  sx={{ fontSize: 12, fontWeight: 400, display: "block" }}
                >
                  Measurement value
                </Typography>

                <Typography
                  variant="span"
                  sx={{
                    fontSize: 35,
                    fontWeight: 500,
                    display: "block",
                    mb: 2,
                    lineHeight: 1.3,
                  }}
                >
                  7.60
                  <Typography
                    variant="span"
                    sx={{ fontSize: 13, fontWeight: 400, ml: "3px" }}
                  >
                    mg/l
                  </Typography>
                </Typography>
                <Divider></Divider>
                <Typography
                  variant="span"
                  sx={{
                    fontSize: 15,
                    fontWeight: 700,
                    display: "block",
                    mt: 1.5,
                  }}
                >
                  Summary
                </Typography>
                <Typography
                  variant="span"
                  color={theme.palette.mode === "light" && "text.secondary"}
                  sx={{
                    fontSize: 12,
                    fontWeight: 400,
                    display: "block",
                    mb: 2,
                  }}
                >
                  Last 24 hours
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography
                      variant="span"
                      sx={{ fontSize: 14, fontWeight: 400, display: "block" }}
                    >
                      Average
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="span"
                      align="right"
                      sx={{ fontSize: 14, fontWeight: 400, display: "block" }}
                    >
                      7.38 mg/l
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography
                      variant="span"
                      sx={{ fontSize: 14, fontWeight: 400, display: "block" }}
                    >
                      Max
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="span"
                      align="right"
                      sx={{ fontSize: 14, fontWeight: 400, display: "block" }}
                    >
                      8.90 mg/l
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography
                      variant="span"
                      sx={{ fontSize: 14, fontWeight: 400, display: "block" }}
                    >
                      Min
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="span"
                      align="right"
                      sx={{ fontSize: 14, fontWeight: 400, display: "block" }}
                    >
                      6.72 mg/l
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </BasicCard>
          </Grid>
          <Grid item md={6} lg={3} xs={12}>
            <BasicCard>
              <CardContent>
                <Typography
                  variant="span"
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    display: "block",
                    mb: 1,
                  }}
                >
                  TSS
                </Typography>
                <Typography
                  variant="span"
                  color={theme.palette.mode === "light" && "text.secondary"}
                  sx={{ fontSize: 12, fontWeight: 400, display: "block" }}
                >
                  Measurement value
                </Typography>

                <Typography
                  variant="span"
                  sx={{
                    fontSize: 35,
                    fontWeight: 500,
                    display: "block",
                    mb: 2,
                    lineHeight: 1.3,
                  }}
                >
                  66.4
                  <Typography
                    variant="span"
                    sx={{ fontSize: 13, fontWeight: 400, ml: "3px" }}
                  >
                    mg/l
                  </Typography>
                </Typography>
                <Divider></Divider>
                <Typography
                  variant="span"
                  sx={{
                    fontSize: 15,
                    fontWeight: 700,
                    display: "block",
                    mt: 1.5,
                  }}
                >
                  Summary
                </Typography>
                <Typography
                  variant="span"
                  color={theme.palette.mode === "light" && "text.secondary"}
                  sx={{
                    fontSize: 12,
                    fontWeight: 400,
                    display: "block",
                    mb: 2,
                  }}
                >
                  Last 24 hours
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography
                      variant="span"
                      sx={{ fontSize: 14, fontWeight: 400, display: "block" }}
                    >
                      Average
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="span"
                      align="right"
                      sx={{ fontSize: 14, fontWeight: 400, display: "block" }}
                    >
                      70.0 mg/l
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography
                      variant="span"
                      sx={{ fontSize: 14, fontWeight: 400, display: "block" }}
                    >
                      Max
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="span"
                      align="right"
                      sx={{ fontSize: 14, fontWeight: 400, display: "block" }}
                    >
                      84.9 mg/l
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography
                      variant="span"
                      sx={{ fontSize: 14, fontWeight: 400, display: "block" }}
                    >
                      Min
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="span"
                      align="right"
                      sx={{ fontSize: 14, fontWeight: 400, display: "block" }}
                    >
                      60.0 mg/l
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </BasicCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PageHome;