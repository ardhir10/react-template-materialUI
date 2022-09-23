import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, Stack, Typography } from "@mui/material";


export default function BreadCrumbs(props) {
   const breadcrumbs = props.breadcrumbs.map(function (object, i) {
     if (object.isActive) {
       return (
         <Typography key={object.key} color="text.primary">
           {object.title}
         </Typography>
       );
     } else {
       return (
         <Link
           underline={object.underline}
           key={object.key}
           color="inherit"
           href={object.href}
           onClick={object.onclick}
         >
           {object.title}
         </Link>
       );
     }
   });
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}