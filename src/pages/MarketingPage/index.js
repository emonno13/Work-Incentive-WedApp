import React from "react";
import {
  Typography,
  Box,
  Grid,
  Avatar,
  Toolbar,
  InputBase
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MemberTable from "./components/MemberTable";
import useStyles from "./style";

const data = {
  manager: [
    {
      avatar:
        "https://allaboutkpop.net/wp-content/uploads/2019/08/1566532453-irene-1.jpg",
      name: "Michael Brown",
      position: "Marketing manager"
    },
    {
      avatar:
        "https://allaboutkpop.net/wp-content/uploads/2019/08/1566532453-irene-1.jpg",
      name: "Michael Brown",
      position: "VP of Marketing"
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

const MarketingPage = (props) => {
  const classes = useStyles(props);
  return (
    <Box component="div" className={classes.root}>
      <Typography className={classes.title}> MARKETING DEPARTMENT </Typography>
      <Typography className={classes.managerTitle}>
        {`MANAGER (${data.manager.length})`}
      </Typography>
      {/*MANAGERS ROW */}
      <Grid container alignItems="flex-start">
        <Grid container xs={12} sm={8}>
          {data.manager.map((item) => (
            <Box component="div" className={classes.rootMember}>
              <Grid item xs={2}>
                <Avatar alt="User" src={item.avatar} />
              </Grid>
              <Grid
                item
                xs={10}
                style={{
                  margin: 20,
                  alignItems: "center"
                }}
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
        </Grid>

        <Grid item xs={12} lg={4}>
          <Box component="div" className={classes.groupSearch}>
            <Box component="div" className={classes.search}>
              <Box component="div" className={classes.searchIcon}>
                <SearchIcon />
              </Box>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/*TABLE ROW */}
      <Box component="div" style={{ marginTop: 20 }}>
        <MemberTable data={data.members} />
      </Box>
    </Box>
  );
};

export default MarketingPage;
