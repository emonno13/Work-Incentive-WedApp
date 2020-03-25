import React from "react";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <Typography variant="h3" component="h1">
        Please login
      </Typography>
      <Typography variant="h3" component={NavLink} to={"/Main/Project"}>
        Go to main
      </Typography>
    </div>
  );
};

export default SignIn;
// onClick={() => dispatch(openProjectForm(true))}
