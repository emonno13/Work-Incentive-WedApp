import React, { useState, Fragment, useCallback } from "react";
import {
  FormControl,
  Button,
  Paper,
  Typography,
  Checkbox,
  Grid,
  TextField,
  List,
  ListItem,
  Tooltip,
  IconButton,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import EventNoteIcon from "@material-ui/icons/EventNote";
import { openProjectForm } from "../../../../../redux/actions/index";
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import PublishIcon from "@material-ui/icons/Publish";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import MoreIcon from "@material-ui/icons/MoreVert";
import useStyles, { CssAutocomplete, CssTextField } from "./styleFormikForm";
import uuid from "uuid/v1";
import { useDropzone } from "react-dropzone";
import PerfectScrollbar from "react-perfect-scrollbar";
import bytesToSize from "../../../../../utils/bytesToSize";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" color="primary" />;

const members = [
  {
    value: "1"
  },
  {
    value: "2"
  },
  {
    value: "3"
  },
  {
    value: "4"
  },
  {
    value: "5"
  },
  {
    value: "6"
  },
  {
    value: "7"
  },
  {
    value: "9"
  }
];

const CreateProjectForm = () => {
  const classes = useStyles();
  const [member, setMember] = useState([]);
  const [startDate, handleStartDateChange] = useState(new Date());
  const [endDate, handleEndDateChange] = useState(new Date());
  //console.log(selectedDate.toISOString());
  const dispatch = useDispatch();

  const [files, setFiles] = useState([]);

  const handleDrop = useCallback((acceptedFiles) => {
    setFiles((files) => [...files].concat(acceptedFiles));
  }, []);

  const handleRemoveAll = () => {
    setFiles([]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop
  });
  //console.log(files);
  return (
    <Grid container justify="center" alignContent="center">
      <Grid item xs={12} xl={12} sm={12} md={12} wrap>
        <Paper elevation={7} className={classes.rootPaper}>
          {" "}
          {/* <FormControl fullWidth margin="normal">
            <Grid container justify="flex-end">
              <IconButton onClick={() => dispatch(openProjectForm(false))}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </FormControl> */}
          {""}
          <Typography
            variant="headline"
            gutterBottom
            color="primary"
            className={classes.projectTitle}
          >
            Project
          </Typography>
          <FormControl fullWidth margin="normal">
            <CssTextField
              id="outlined-search"
              label="Project Name"
              type="search"
              variant="outlined"
            />
          </FormControl>
          <FormControl
            fullWidth
            margin="normal"
            required={true}
            variant="filled"
          >
            <CssTextField
              id="outlined-search"
              label="Description"
              type="search"
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <CssAutocomplete
              onChange={(event, value) => setMember(value)}
              multiple
              id="checkboxes-tags-demo"
              options={members}
              disableCloseOnSelect
              getOptionLabel={(option) => option.value}
              renderOption={(option, { selected }) => (
                <React.Fragment>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 2 }}
                    checked={selected}
                  />

                  {option.value}
                </React.Fragment>
              )}
              style={{ width: "100%" }}
              renderInput={(data) => (
                <TextField
                  {...data}
                  variant="outlined"
                  label="Member"
                  placeholder="Pick members"
                />
              )}
            />
          </FormControl>
          <Grid container>
            <Grid
              item
              xs={12}
              xl={12}
              sm={12}
              md={6}
              wrap
              style={{ padding: 3 }}
            >
              <FormControl fullWidth margin="normal">
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardDateTimePicker
                    variant="dialog"
                    ampm={true}
                    label={<Typography>Start date</Typography>}
                    value={startDate}
                    onChange={handleStartDateChange}
                    onError={console.log}
                    disablePast
                    allowKeyboardControl
                    animateYearScrolling={true}
                    format="MMMM DD, YYYY HH:mm A"
                    style={{ fontSize: 5 }}
                    keyboardIcon={
                      <EventNoteIcon style={{ color: "#005f9c" }} />
                    }
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              xl={12}
              sm={12}
              md={6}
              wrap
              style={{ padding: 3 }}
            >
              <FormControl fullWidth margin="normal">
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardDateTimePicker
                    variant="dialog"
                    ampm={true}
                    label={<Typography>End date</Typography>}
                    value={endDate}
                    onChange={handleEndDateChange}
                    onError={console.log}
                    disablePast
                    allowKeyboardControl
                    animateYearScrolling={true}
                    format="MMMM DD, YYYY HH:mm A"
                    keyboardIcon={
                      <EventNoteIcon style={{ color: "#005f9c" }} />
                    }
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
            </Grid>
          </Grid>
          {""}
          <FormControl fullWidth margin="normal">
            <Grid container xs={12} className={classes.rootFileUpload}>
              <Grid item xs={6} sm={4}>
                <Button
                  {...getRootProps()}
                  variant="contained"
                  className={classes.fileUploadButton}
                  startIcon={<PublishIcon style={{ color: "#ffffff" }} />}
                >
                  <input {...getInputProps()} />
                  <Typography className={classes.fileUploadButtonText}>
                    Upload
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={6} sm={8} className={classes.fileUploadDetail}>
                <Typography className={classes.fileUploadDetailText}>
                  doc,docx,pdf, 5mb maximum
                </Typography>
              </Grid>
            </Grid>
          </FormControl>
          {""}
          <Grid item xs={12}>
            {files.length > 0 && (
              <Fragment>
                <PerfectScrollbar options={{ suppressScrollX: true }}>
                  <List className={classes.groupFileUploaded}>
                    {files.map((file, i) => (
                      <Paper elevation={5}>
                        <ListItem
                          style={{ margin: 5 }}
                          divider={i < files.length - 1}
                          key={uuid()}
                        >
                          <ListItemIcon>
                            <FileCopyIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={file.name}
                            style={{ color: "black" }}
                            //primaryTypographyProps={{ variant: "h5" }}
                            secondary={bytesToSize(file.size)}
                          />
                          <Tooltip title="More options">
                            <IconButton edge="end">
                              <MoreIcon />
                            </IconButton>
                          </Tooltip>
                        </ListItem>
                      </Paper>
                    ))}
                  </List>
                </PerfectScrollbar>
                <div>
                  <Button
                    className={classes.removeAllButton}
                    onClick={handleRemoveAll}
                    size="small"
                  >
                    <Typography className={classes.removeAllButtonText}>
                      Remove All
                    </Typography>
                  </Button>
                </div>
              </Fragment>
            )}
          </Grid>
          {""}
          {/* <FormControlLabel control={<Checkbox />} label="Receive new letter" /> */}
          <FormControl fullWidth margin="normal">
            <Grid container justify="flex-end" spacing={1}>
              <Grid item xs={3}>
                <Button
                  variant="extendedFab"
                  type="submit"
                  className={classes.cancelButton}
                  onClick={() => dispatch(openProjectForm(false))}
                >
                  <Typography className={classes.createButtonText}>
                    Cancel
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="extendedFab"
                  type="submit"
                  className={classes.createButton}
                  onClick={() => dispatch(openProjectForm(false))}
                >
                  <Typography className={classes.createButtonText}>
                    Create
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CreateProjectForm;
