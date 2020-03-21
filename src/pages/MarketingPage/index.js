import React from "react";
import { Typography, Box, Grid, Avatar } from "@material-ui/core";
import MemberTable from "./components/MemberTable";
import useStyles from "./style";

const data = {
  manager: [
    {
      name: "Michael Brown",
      position: "Marketing manager"
    },
    {
      name: "Michael Brown",
      position: "VP of Marketing"
    }
  ]
};

const MarketingPage = (props) => {
  const classes = useStyles(props);
  return (
    <Box component="div" className={classes.root}>
      <Typography className={classes.title}> MARKETING DEPARTMENT </Typography>
      <Typography className={classes.managerTitle}>
        {`MANAGER ${data.manager.length}`}
      </Typography>
      {/*MANAGERS ROW */}
      <Grid container>
        <Grid container xs={8}>
          {data.manager.map((item) => (
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
        </Grid>

        <Grid item xs={4}>
          <Box
            component="div"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <p>search</p>
          </Box>
        </Grid>
      </Grid>
      {/*TABLE ROW */}
      <Box component="div" style={{ marginTop: 20 }}>
        <MemberTable />
      </Box>
    </Box>
  );
};

export default MarketingPage;
