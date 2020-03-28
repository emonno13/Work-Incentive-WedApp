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
      id: 1,
      status: "Doing",
      task: `[Content] Project A1`,
      progress: 2,
      duoDate: "14 Feb 2020",
      daysLate: "(12 days late)",
      avatar:
        "https://allaboutkpop.net/wp-content/uploads/2019/08/1566532453-irene-1.jpg",
      name: "Chris Evan Hall ",
      result: "Good"
    },
    {
      id: 2,
      status: "Done",
      task: `[Content] "Đăng ký" tại Home Guest và error message tại đăng kí tiện ích`,
      progress: 5,
      duoDate: "14 Feb 2020",
      daysLate: "",
      avatar:
        "https://allaboutkpop.net/wp-content/uploads/2019/08/1566532453-irene-1.jpg",
      name: "Michael Brown",
      result: "Excellent"
    },
    {
      id: 3,
      status: "Pause",
      task: `[Content] Tìm kiếm khách hàng tiềm năng`,
      progress: 2,
      duoDate: "15 Feb 2020",
      daysLate: "",
      avatar:
        "https://allaboutkpop.net/wp-content/uploads/2019/08/1566532453-irene-1.jpg",
      name: "Kuana",
      result: "Excellent"
    },
    {
      id: 4,
      status: "Pause",
      task: `[Content] Tìm kiếm khách hàng tiềm năng`,
      progress: 2,
      duoDate: "15 Feb 2020",
      daysLate: "",
      avatar:
        "https://allaboutkpop.net/wp-content/uploads/2019/08/1566532453-irene-1.jpg",
      name: "Kuana",
      result: "Excellent"
    }
  ]
};

const Task = () => {
  const { id } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [data] = useState(dataApi);
  // Search
  const [search, setSearch] = useState(""); // const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    const { value } = event.target;
    console.log(search);
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
            className={classes.filterStatusInput}
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
            className={classes.filterChargeInput}
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
            className={classes.createButton}
            onClick={() => alert("Create")}
          >
            <Typography className={classes.createButtonText}>Create</Typography>
          </Button>
        </Grid>
      </Grid>
      <Box component="div" className={classes.taskTable}>
        <TaskTable data={data.tasks} />
      </Box>
    </Box>
  );
};
export default Task;
