import React from "react";
import { Typography, Box } from "@material-ui/core";
import useStyles from "./style";

const ITPage = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      <Typography variant="h3" component="h1">
        IT Page
      </Typography>
    </Box>
  );
};

export default ITPage;
