import React from "react";
import { Typography, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const HomePage = () => (
  <div>
    <Typography variant="h3" component="h1">
      Home Page
    </Typography>
    <Typography variant="h3" component={NavLink} to={"/Main"}>
      Main Page
    </Typography>
  </div>
);

export default HomePage;
