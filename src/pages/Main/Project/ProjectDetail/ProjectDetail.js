import React, { useEffect } from "react";
import {
  Typography,
  IconButton,
  Grid,
  CardMedia,
  Box,
  Button,
  Paper,
  Avatar,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import EditIcon from "@material-ui/icons/Edit";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import AppleIcon from "@material-ui/icons/Apple";
import Rating from "@material-ui/lab/Rating";
import GetAppIcon from "@material-ui/icons/GetApp";
import ClearIcon from "@material-ui/icons/Clear";
import { NavLink } from "react-router-dom";
import useStyles from "./style";
import uuid from "uuid/v1";
import { useParams, useHistory } from "react-router-dom";
import ShowMoreText from "../../../../components/ShowMoreText/index";

const data = {
  time: "15 Mar 2018 - present",
  projectDescription:
    "  In Vinhomes residencial projects, cultural and sports activities are widely made and developed with exciting atmosphere,contributing to the creation of a civilized and class community, creating relationships among family members as well as building relationships in the neighborhood. The luxurious and exquisite design harmonious with the surrounding architecture provide optimal comfort, modernity and the best living conditions for every family.",
  task: [
    {
      taskTile: "[Content] Đăng ký tại Home Guest và cho Android",
      process: 2,
      dayLeft: 7,
      avatar:
        "https://kenh14cdn.com/thumb_w/640/2019/4/25/hai9398-15561851877211598194299-crop-15561853627471592918271.jpg"
    },
    {
      taskTile: "[Content] Đăng ký tại Home Guest và cho Android",
      process: 2,
      dayLeft: 7,
      avatar:
        "https://kenh14cdn.com/thumb_w/640/2019/4/25/hai9398-15561851877211598194299-crop-15561853627471592918271.jpg"
    },
    {
      taskTile: "[Content] Đăng ký tại Home Guest và cho Android",
      process: 2,
      dayLeft: 7,
      avatar:
        "https://kenh14cdn.com/thumb_w/640/2019/4/25/hai9398-15561851877211598194299-crop-15561853627471592918271.jpg"
    },
    {
      taskTile: "[Content] Đăng ký tại Home Guest và cho Android",
      process: 2,
      dayLeft: 7,
      avatar:
        "https://kenh14cdn.com/thumb_w/640/2019/4/25/hai9398-15561851877211598194299-crop-15561853627471592918271.jpg"
    }
  ],
  files: [
    {
      name: "file_number_onedf-dsfds_afda-sfad_fsdaf-dsaf_djfdfs-fsdfsd-fsdklf"
    },
    {
      name: "file_number_onefdfdsafdsafdsafsadfasfasdfsadfafdfdsffdsfs"
    }
  ],
  members: [
    {
      avatar:
        "https://kenh14cdn.com/thumb_w/640/2019/4/25/hai9398-15561851877211598194299-crop-15561853627471592918271.jpg",
      name: "Michael Brown",
      position: "Motion Graphic Designer at YAN TV JSC"
    },
    {
      avatar:
        "https://kenh14cdn.com/thumb_w/640/2019/4/25/hai9398-15561851877211598194299-crop-15561853627471592918271.jpg",
      name: "Keith Davis",
      position: "Graphic Designer"
    }
  ]
};
const ProjectDetail = () => {
  let { id } = useParams();
  let history = useHistory();
  const classes = useStyles(id);
  //console.log(id);
  //console.log(`${match.params.id} and ${id}`);
  //const [value, setValue] = React.useState(2);

  useEffect(() => {
    //console.log(data);
  }, []);
  return (
    <Box component="div">
      <Grid item xs={12}>
        <CardMedia
          className={classes.background}
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          title="Contemplative Reptile"
          src="image"
        />
      </Grid>
      {""}

      <Grid container className={classes.root}>
        <Grid container>
          <Grid item xs={"auto"}>
            <IconButton
              onClick={() => history.goBack()}
              // component={NavLink}
              // to={`/Main/Project`}
            >
              <ArrowBackIcon className={classes.backButton} />
            </IconButton>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h4" component="h1">
              {`${id}`}
            </Typography>
          </Grid>
          <Grid item xs={"true"}>
            <Box
              component="div"
              style={{
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <Button
                variant="outlined"
                style={{ color: "#25828b" }}
                onClick={() => alert("edit")}
                startIcon={<EditIcon className={classes.iconEditButton} />}
              >
                <Typography className={classes.textEditButton}>Edit</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.textTime}>{data.time}</Typography>
        </Grid>
        {/*4 TABS*/}
        <Grid container direction="row" justify="space-between">
          {/*PROJECT  DESCRIPTION*/}
          <Grid item xs={12} lg={6}>
            <Grid item xs={12}>
              <Paper elevation={7} className={classes.rootPaper}>
                <Box component="div" className={classes.headerPaper}>
                  <Typography className={classes.headerTitle}>
                    PROJECT DESCRIPTION
                  </Typography>
                  <IconButton>
                    <EditIcon className={classes.iconEditButton} />
                  </IconButton>
                </Box>
                <ShowMoreText
                  children={
                    <Typography className={classes.textDescription}>
                      {data.projectDescription}
                    </Typography>
                  }
                />
              </Paper>
            </Grid>
            {/*ATTACHMENTS*/}
            <Grid item xs={12}>
              <Paper elevation={7} className={classes.rootPaper}>
                <Box component="div" className={classes.headerPaper}>
                  <Typography className={classes.headerTitle}>
                    ATTACHMENTS
                  </Typography>
                </Box>

                {data.files.length > 0 && (
                  <List style={{ marginTop: 5 }}>
                    {data.files.map((file, i) => (
                      <Paper elevation={2}>
                        <ListItem
                          style={{
                            marginTop: 10,
                            background: "rgba(122, 122, 122, 0.08)"
                          }}
                          divider={i < data.files.length - 1}
                          key={uuid()}
                        >
                          <ListItemIcon>
                            <FileCopyIcon style={{ color: "#25828b" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Tooltip title={file.name}>
                                <Typography
                                  style={{
                                    color: "red",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                  }}
                                  //noWrap={true}
                                  paragraph={true}
                                >
                                  {file.name}
                                </Typography>
                              </Tooltip>
                            }
                            disableTypography
                          />

                          <Tooltip title="Download">
                            <IconButton edge="end">
                              <GetAppIcon style={{ color: "#4a4a4a" }} />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Remove">
                            <IconButton edge="end">
                              <ClearIcon style={{ color: "#c4737d" }} />
                            </IconButton>
                          </Tooltip>
                        </ListItem>
                      </Paper>
                    ))}
                  </List>
                )}
              </Paper>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={6}>
            {/*TASKS*/}
            <Grid item xs={12}>
              <Paper elevation={7} className={classes.rootPaper}>
                <Box component="div" className={classes.headerPaper}>
                  <Typography className={classes.headerTitle}>
                    {`TASKS (${data.task.length})`}
                  </Typography>
                  <Button
                    className={classes.viewAll}
                    // onClick={() =>
                    //   alert(`/Main/Project/${match.params.id}/AllTask`)
                    // }
                    component={NavLink}
                    to={`/Main/Project/${id}/AllTasks`}
                  >
                    View all
                  </Button>
                </Box>
                {data.task.map((item) => (
                  <Box component="div" className={classes.rootTaskItem}>
                    <Grid item xs={5}>
                      <Typography className={classes.titleTaskItem}>
                        {item.taskTile}
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <Grid
                        container
                        style={{
                          alignItems: "center",
                          justifyContent: "space-between"
                        }}
                      >
                        <Rating
                          name="read-only"
                          value={item.process}
                          readOnly
                          // onChange={(event, newValue) => {
                          //   setValue(newValue);
                          // }}
                          icon={<AppleIcon fontSize="inherit" />}
                        />
                        <Typography className={classes.timeTaskItem}>
                          {`(${item.dayLeft} days late)`}
                        </Typography>
                        <Avatar alt="User" src={item.avatar} />
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </Paper>
            </Grid>
            {/*MEMBER*/}
            <Grid item xs={12}>
              <Paper elevation={7} className={classes.rootPaper}>
                <Box component="div" className={classes.headerPaper}>
                  <Typography className={classes.headerTitle}>
                    {`MEMBER (${data.members.length})`}
                  </Typography>
                  <Button className={classes.viewAll}>View all</Button>
                </Box>
                {data.members.map((item) => (
                  <Box component="div" className={classes.rootMember}>
                    <Grid container item xs={2}>
                      <Avatar alt="User" src={item.avatar} />
                    </Grid>
                    <Grid
                      item
                      xs={9}
                      style={{ marginLeft: 20, alignItems: "center" }}
                    >
                      <Typography
                        style={{
                          fontSize: 16,
                          fontWeight: 500,
                          lineHeight: 0.88,
                          color: "#25828b"
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: 14,
                          lineHeight: 1.44,
                          color: " #828296"
                        }}
                      >
                        {item.position}
                      </Typography>
                    </Grid>
                  </Box>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectDetail;
