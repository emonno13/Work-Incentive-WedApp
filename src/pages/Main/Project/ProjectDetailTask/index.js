import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  IconButton,
  InputBase,
  TextField,
  Button
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import { useParams, useHistory } from "react-router-dom";
import useStyles from "./style";
import TaskTable from "./TaskTable";
const dataApi = {
  tasks: [
    {
      status: "Done",
      task: `[Content] Project A1`,
      progress: 5,
      duoDate: "14 Feb 2020",
      daysLate: "( 2 days late )",
      avatar:
        "https://allaboutkpop.net/wp-content/uploads/2019/08/1566532453-irene-1.jpg",
      name: "Michael Brown",
      result: "Good"
    },
    {
      status: "Doing",
      task: `[Content] "Đăng ký" tại Home Guest và error message tại đăng kí tiện ích`,
      progress: 5,
      duoDate: "14 Feb 2020",
      daysLate: "",
      avatar:
        "https://allaboutkpop.net/wp-content/uploads/2019/08/1566532453-irene-1.jpg",
      name: "Michael Brown",
      result: "Good"
    }
  ],
  members: [
    {
      id: 1,
      avatar:
        "https://allaboutkpop.net/wp-content/uploads/2019/08/1566532453-irene-1.jpg",
      name: "Khanh",
      task:
        "In Vinhomes residencial projects, cultural and sports activities are widely made and developed with exciting atmosphere, contributing to the creation of a civilized and class community, creating relationships among family members as well as building relationships in the neighborhood. Show less",
      difficulty: "Medium",
      time: 4,
      result: 2,
      total: 5
    },
    {
      id: 2,
      avatar:
        "https://allaboutkpop.net/wp-content/uploads/2019/08/1566532453-irene-1.jpg",
      name: "Khanh",
      task: "In Vinhomes residencial projectss",
      difficulty: "Medium",
      time: 4,
      result: 2,
      total: 5
    }
  ]
};

const ProjectDetailTask = () => {
  const { id } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [data] = useState(dataApi);
  // Search
  const [search, setSearch] = useState(""); // const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  // Filter Status
  const optionsStatus = ["All Status", "Doing", "Pause", "Done"];
  const [optionStatus, setOptionStatus] = useState(optionsStatus[0]);
  const handleChangeStatus = (event) => {
    event.persist();
    setOptionStatus(event.target.value);
  };
  // Filter Charge
  const optionsCharge = ["All in charge (135)", "None"];
  const [optionCharge, setOptionCharge] = useState(optionsCharge[0]);
  const handleChangeCharge = (event) => {
    event.persist();
    setOptionCharge(event.target.value);
  };

  return (
    <>
      <Box className={classes.root}>
        <Grid container className={classes.groupHeader}>
          <Grid item xs={"auto"}>
            <IconButton onClick={() => history.goBack()}>
              <ArrowBackIcon className={classes.backButton} />
            </IconButton>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h4" component="h1">
              {`${id.substr(0, 3)} ${id.substr(3)}`}
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.groupFilter}>
          <Grid item xs={12} lg={4}>
            <Box component="div" className={classes.groupSearch}>
              <Box component="div" className={classes.search}>
                <Box component="div" className={classes.searchIcon}>
                  <SearchIcon />
                </Box>
                <InputBase
                  placeholder="Search…"
                  //value={search}
                  onChange={handleSearch}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{
                    "aria-label": "search"
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid container item xs={12} lg={2}>
            <TextField
              name="option"
              onChange={handleChangeStatus}
              style={{ marginTop: 10, marginLeft: 15 }}
              select
              SelectProps={{ native: true }}
              value={optionStatus}
              variant="outlined"
              color="primary"
              size="small"
            >
              {optionsStatus.map((optionStatus) => (
                <option key={optionStatus} value={optionStatus}>
                  {optionStatus}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid container item xs={10} lg={2} style={{ marginLeft: 12 }}>
            <TextField
              name="option"
              onChange={handleChangeCharge}
              style={{ marginTop: 10 }}
              select
              SelectProps={{ native: true }}
              value={optionCharge}
              variant="outlined"
              color="primary"
              size="small"
              fullWidth
            >
              {optionsCharge.map((optionCharge) => (
                <option key={optionCharge} value={optionCharge}>
                  {optionCharge}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid container item xs={12} lg={"true"} justify="flex-end">
            <Button
              variant="outlined"
              style={{
                background: "#25828b",
                width: 100,
                borderRadius: 8,
                marginTop: 10
              }}
              onClick={() => alert("Create")}
            >
              <Typography
                style={{
                  fontSize: 10,
                  color: "#ffffff",
                  textAlign: "center",
                  fontWeight: 500
                }}
              >
                Create
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Box component="div" style={{ marginTop: 30 }}>
          <TaskTable data={data.tasks} />
        </Box>
      </Box>
    </>
  );
};
export default ProjectDetailTask;
