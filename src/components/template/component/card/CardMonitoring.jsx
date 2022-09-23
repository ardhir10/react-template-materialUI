import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";


export default function CardMonitoring(props) {
  const theme = useTheme();
  return (
    <Box>
      <Card
        {...props}
        variant="outlined"
        sx={{
          borderRadius: "20px",
          border:'0px',
          backgroundColor: (theme.palette.mode === 'dark' && "#373737"),
        }}
      >
        <CardContent sx={{ p: 1.5 }}>
          <Typography
            sx={{
              fontSize: "1.2vw",
              fontWeight: 500,
              // color:'#ebebeb'
            }}
          >
            {props.title}
          </Typography>
          <Typography
            sx={{ fontSize: 50, fontWeight: 1000 }}
            color="text.primary"
          >
            {props.value}
          </Typography>
          <Typography variant="span" color="secondary">Measure value realtime</Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to="/starter" size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
