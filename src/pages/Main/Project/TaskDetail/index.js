import React from "react";
import { Typography, Box, Grid, IconButton, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useStyles from "./style";
import { useHistory, useParams } from "react-router-dom";

const TaskDetail = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const { taskName } = props.location.state;
  console.log(id);
  return (
    <Box className={classes.root}>
      <Grid container className={classes.groupHeader}>
        <Grid item xs={"auto"}>
          <IconButton onClick={() => history.goBack()}>
            <ArrowBackIcon className={classes.backButton} />
          </IconButton>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h4" component="h1">
            {taskName}
          </Typography>
        </Grid>
        <Grid container item xs={12} lg={"true"} justify="flex-end">
          <Button variant="outlined" disabled className={classes.statusButton}>
            <Typography className={classes.statusButonText}>Doing</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid></Grid>
    </Box>
  );
};

export default TaskDetail;
