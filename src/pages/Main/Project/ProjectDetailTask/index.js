import React from "react";
import { Typography } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";

const ProjectDetailTask = () => {
  let { id } = useParams();
  let history = useHistory();

  return (
    <>
      <Typography variant="h3" component="h1" onClick={() => history.goBack()}>
        {`${id}`}
      </Typography>
    </>
  );
};
export default ProjectDetailTask;
