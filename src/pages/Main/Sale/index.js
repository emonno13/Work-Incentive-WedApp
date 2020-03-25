import React from "react";
import { Typography, Box } from "@material-ui/core";
import { useParams } from "react-router-dom";
import useStyles from "./style";

const SalePage = () => {
  const classes = useStyles();
  let { id } = useParams();
  return (
    <Box component="div" className={classes.root}>
      <Typography variant="h3" component="h1">
        {`Sale Page ${id}`}
      </Typography>
    </Box>
  );
};

export default SalePage;
