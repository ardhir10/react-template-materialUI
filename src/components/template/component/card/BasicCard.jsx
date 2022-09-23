import * as React from "react";
import Card from "@mui/material/Card";


export default function BasicCard({children}) {
  return (
    <Card sx={{ minWidth: 275 }} >
      {children}
    </Card>
  );
}
