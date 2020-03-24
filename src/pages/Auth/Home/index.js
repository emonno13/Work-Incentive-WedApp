import React from "react";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Typography variant="h3" component="h1">
        Home Content
      </Typography>
      <Typography variant="h3" component={NavLink} to={"/Login"}>
        Login
      </Typography>
      {/* <Typography variant="h3" component={NavLink} to={"/Main"}>
      Sign up
    </Typography> */}
    </div>
  );
};

export default HomePage;
