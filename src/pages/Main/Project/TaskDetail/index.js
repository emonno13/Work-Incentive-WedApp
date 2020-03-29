import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  IconButton,
  Button,
  Avatar,
  Paper,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  InputBase
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AppleIcon from "@material-ui/icons/Apple";
import EditIcon from "@material-ui/icons/Edit";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ShowMoreText from "../../../../components/ShowMoreText";
import GetAppIcon from "@material-ui/icons/GetApp";
import ClearIcon from "@material-ui/icons/Clear";
import useStyles, { StyledRating } from "./style";
import { useHistory } from "react-router-dom";
import uuid from "uuid/v1";
const dataApi = {
  taskDescription: `Thay đổi content của "Đăng ký" tại Home Guest và error message tại đăng kí tiện ích
                    Đăng ký --> Đăng ký ngay
                    Error message: không hiển thị số người vì nhiều BQL thiết lập không thống nhất
                    Bạn là cư dân Vinhomes? Xác nhận bên dưới để bắt đầu trải nghiệm.</string>`,
  files: [
    {
      name: "file_number_onedf-dsfds_afda-sfad_fsdaf-dsaf_djfdfs-fsdfsd-fsdklf"
    },
    {
      name: "file_number_onefdfdsafdsafdsafsadfasfasdfsadfafdfdsffdsfs"
    }
  ],
  comments: [
    {
      avatar:
        "https://image.gala.de/22093444/uncropped-0-0/cbea3dbd6c31ff33fee4c7be3800f24e/kS/jessica-alba-teaser.jpg",
      name: "Nam Dang",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
      time: "14 Mar 2018 - 14:50"
    },
    {
      avatar:
        "https://image.gala.de/22093444/uncropped-0-0/cbea3dbd6c31ff33fee4c7be3800f24e/kS/jessica-alba-teaser.jpg",
      name: "Hai Anh",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      time: "14 Mar 2018 - 14:50"
    }
  ]
};

const TaskDetail = (props) => {
  const classes = useStyles();
  //const { id } = useParams();
  const history = useHistory();
  const {
    task,
    status,
    progress,
    duoDate,
    name,
    avatar
  } = props.location.state;
  //console.log(id);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
            <Grid item xs={"auto"}>
              <Avatar
                src={
                  "https://www.imore.com/sites/imore.com/files/field/image/2014/03/topic_steve_jobs.png"
                }
                alt="User"
              />
            </Grid>
            <Grid item xs={"true"}>
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
            <Grid item xs={"auto"}>
              <Avatar src={avatar} alt="User" />
            </Grid>
            <Grid item xs={"true"}>
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

      {/*                            TABS                             */}
      <Grid container direction="row" justify="space-between">
        <Grid item xs={12} lg={6}>
          <Grid item xs={12}>
            <Paper elevation={7} className={classes.rootPaper}>
              <Box component="div" className={classes.headerPaper}>
                <Typography className={classes.headerTitle}>
                  TASK DESCRIPTION
                </Typography>
                <IconButton>
                  <EditIcon className={classes.iconEditButton} />
                </IconButton>
              </Box>
              <ShowMoreText
                children={<Typography>{dataApi.taskDescription}</Typography>}
                className={classes.textDescription}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={7} className={classes.rootPaper}>
              <Box component="div" className={classes.headerPaper}>
                <Typography className={classes.headerTitle}>
                  ATTACHMENTS
                </Typography>
              </Box>
              {dataApi.files.length > 0 && (
                <List className={classes.rootFile}>
                  {dataApi.files.map((file, i) => (
                    <Paper elevation={2}>
                      <ListItem
                        className={classes.file}
                        divider={i < dataApi.files.length - 1}
                        key={uuid()}
                      >
                        <ListItemIcon>
                          <FileCopyIcon className={classes.fileIcon} />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Tooltip title={file.name}>
                              <Typography
                                className={classes.fileText}
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
                            <GetAppIcon className={classes.fileIconDownLoad} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Remove">
                          <IconButton edge="end">
                            <ClearIcon className={classes.fileIconRemove} />
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
          <Paper elevation={7} className={classes.rootPaper}>
            <Box component="div" className={classes.headerPaper}>
              <Typography className={classes.headerTitle}>REVIEWS</Typography>
            </Box>
            <Grid container item className={classes.groupWriteComment}>
              <Grid item xs={"auto"}>
                <Avatar
                  src={avatar}
                  alt="User"
                  className={classes.commentAvatar}
                />
              </Grid>
              <Grid item xs={"true"}>
                <InputBase
                  id="outlined-textarea"
                  fullWidth
                  multiline
                  value={value}
                  onChange={handleChange}
                  size="small"
                  className={classes.commentInput}
                  //label="Multiline Placeholder"
                  //placeholder="Placeholder"
                />
              </Grid>
            </Grid>
            <Grid container xs={12} justify="flex-end">
              <Button
                variant="outlined"
                className={classes.commentPostButton}
                onClick={() => alert("Post")}
              >
                <Typography className={classes.commentPostButtonText}>
                  Post
                </Typography>
              </Button>
            </Grid>
            {/**/}
            <Grid item xs={12}>
              {dataApi.comments.map((item) => (
                <Box
                  component="div"
                  display="flex"
                  flexDirection="row"
                  className={classes.rootItemComment}
                >
                  <Avatar
                    src={item.avatar}
                    alt="User"
                    className={classes.avatarItemComment}
                  />
                  <Box component="div">
                    <Typography className={classes.nameItemComment}>
                      {item.name}
                    </Typography>
                    <Typography className={classes.contentItemComment}>
                      {item.content}
                    </Typography>
                    <Typography className={classes.timeItemComment}>
                      {item.time}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Grid>
            {/**/}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskDetail;
