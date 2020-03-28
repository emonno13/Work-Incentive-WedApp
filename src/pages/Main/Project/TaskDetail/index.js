import React from "react";
import {
  Typography,
  Box,
  Grid,
  IconButton,
  Button,
  Avatar
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AppleIcon from "@material-ui/icons/Apple";
import useStyles, { StyledRating } from "./style";
import { useHistory, useParams } from "react-router-dom";

const TaskDetail = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const {
    task,
    status,
    progress,
    duoDate,
    name,
    avatar
  } = props.location.state;
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
            {task}
          </Typography>
        </Grid>
        <Grid container item xs={12} lg={"true"} justify="flex-end">
          <Button variant="outlined" disabled className={classes.statusButton}>
            <Typography className={classes.statusButonText}>
              {status}
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container className={classes.groupBasicInfo}>
        {/**/}
        <Grid item xs={6} lg={2} className={classes.groupItemBasicInfo}>
          <Typography className={classes.titleBasicInfo}>REPORT TO</Typography>
          <Grid container alignItems="center" justify="space-between">
            <Grid item xs={2}>
              <Avatar
                src={
                  "https://www.imore.com/sites/imore.com/files/field/image/2014/03/topic_steve_jobs.png"
                }
                alt="User"
              />
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.textName}>
                {"Steve Jobs"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/**/}
        <Grid item xs={5} lg={2} className={classes.groupItemBasicInfo}>
          <Typography className={classes.titleBasicInfo}>IN CHARGE</Typography>
          <Grid container alignItems="center" justify="space-between">
            <Grid item xs={2}>
              <Avatar src={avatar} alt="User" />
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.textName}>{name}</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/**/}
        <Grid item xs={6} lg={2} className={classes.groupItemBasicInfo}>
          <Typography className={classes.titleBasicInfo}>PROGRESS</Typography>
          <Grid container alignItems="flex-start">
            <StyledRating
              name="read-only"
              value={progress}
              readOnly
              icon={<AppleIcon fontSize="inherit" />}
            />
            <Typography className={classes.textProgress}>{`${progress *
              20}%`}</Typography>
          </Grid>
        </Grid>
        {/**/}
        <Grid item xs={5} lg={2} className={classes.groupItemBasicInfo}>
          <Typography className={classes.titleBasicInfo}>START DATE</Typography>
          <Typography className={classes.textDate}>12 Fed 2020</Typography>
        </Grid>
        {/**/}
        <Grid item xs={5} lg={2} className={classes.groupItemBasicInfo}>
          <Typography className={classes.titleBasicInfo}>DUE DATE</Typography>
          <Typography className={classes.textDate}>{duoDate}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskDetail;
