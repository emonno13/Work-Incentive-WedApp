import React from "react";
import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
const SalePage = () => {
  let { topicId } = useParams();
  return (
    <div>
      <Typography variant="h3" component="h1">
        Sales Page
      </Typography>
    </div>
  );
};

export default SalePage;
