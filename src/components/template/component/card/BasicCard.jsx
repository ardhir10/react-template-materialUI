import * as React from "react";
import Card from "@mui/material/Card";


export default function BasicCard({children}) {
  return (
    <Card >
      {children}
    </Card>
  );
}
