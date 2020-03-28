import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Collapse,
  useTheme
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import useStyles, { StyledBadge } from "./style";
import ITPage from "./IT/index";
import SalePage from "./Sale/index";
import ProjectPage from "./Project/index";
import MarketingPage from "./Marketing/index";

//import ProjectAll from "../pages/ProjectPage/ProjectAll/ProjectAll";

const MainTab = (props) => {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openList, setOpenList] = React.useState(false);

  let { path } = useRouteMatch();
  const handleClickTab = () => {
    setOpenList(!openList);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box component="div">
      <Box component="div" className={classes.logoArea}>
        <Typography className={classes.logoText}>Logo</Typography>
      </Box>

      <List>
        <Typography type="body3" className={classes.topSectionText}>
          Result
        </Typography>
        {/*ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd*/}
        <ListItem
          button
          key={"Project"}
          className={classes.nonActiveNav}
          component={NavLink}
          to={`${path}/${"Project"}`}
          activeStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            color: "white",
            fontSize: 20
          }}
          onClick={() => setMobileOpen(false)}
        >
          <Box component="div" className={classes.nonActiveText}>
            {"Project"}
          </Box>
        </ListItem>

        {/*ddddddddddddddddddddddddddddd DEPARTMENT dddddddddddddddddddddddddddddddddddddd*/}
        <ListItem
          button
          key={"Department"}
          className={classes.nonActiveNav}
          activeStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            color: "white",
            fontSize: 20
          }}
          onClick={handleClickTab}
          style={{ justifyContent: "space-between" }}
        >
          <Box component="div" className={classes.nonActiveText}>
            {"Department"}
          </Box>
          {openList ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openList} timeout="auto" unmountOnExit>
          {["IT", "Sales", "Marketing"].map((text) => (
            <ListItem
              button
              key={text}
              className={classes.nonActiveNav}
              component={NavLink}
              to={`${path}/${text}`}
              activeStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                color: "white",
                fontSize: 20
              }}
              onClick={() => setMobileOpen(false)}
            >
              <Box component="div" className={classes.nonActiveText}>
                {text}
              </Box>
            </ListItem>
          ))}
        </Collapse>
      </List>
      {/*ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd*/}
      <Divider />

      <List>
        <Typography type="body3" className={classes.topSectionText}>
          Working time
        </Typography>
        {["This week", "This month", "This year"].map((text) => (
          <ListItem
            button
            key={text}
            className={classes.nonActiveNav}
            component={NavLink}
            to={`${path}/${text}`}
            activeStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.04)",
              color: "red",
              fontSize: 20
            }}
          >
            <Box component="div" className={classes.nonActiveText}>
              {text}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="div" className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden smUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              size="medium"
              onClick={handleDrawerToggle}
            >
              <MenuIcon className={classes.menuButton} />
            </IconButton>
          </Hidden>
          <Box component="div" className={classes.groupAvatar} m={1}>
            <Typography variant="h5" noWrap className={classes.nameAppBar}>
              Chipu
            </Typography>
            <Divider orientation="vertical" flexItem />
            <StyledBadge badgeContent={6} color="primary">
              <Avatar
                alt="User"
                className={classes.avatarAppBar}
                src={
                  "https://kenh14cdn.com/thumb_w/640/2019/4/25/hai9398-15561851877211598194299-crop-15561853627471592918271.jpg"
                }
              />
            </StyledBadge>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        className={classes.drawer}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </Box>

      <Box component="main" className={classes.content} overflow="hidden">
        <Box component="div" className={classes.toolbar} />

        <Switch onClick={handleDrawerToggle}>
          <Route path={`${path}/Project`} component={ProjectPage} />
          <Route path={`${path}/IT`} component={ITPage} />
          <Route path={`${path}/Sales`} component={SalePage} />
          <Route path={`${path}/Marketing`} component={MarketingPage} />
        </Switch>
      </Box>
    </Box>
  );
};

MainTab.propTypes = {
  container: PropTypes.any
};

export default MainTab;

//   const match =  window.matchMedia("(min-width: 768px)").matches
//   const [matches,setMatches]=useState(match)

//   useEffect (() => {
//     // Update the document title using the browser API
//     const handler = e => setMatches( e.matches)
//     window.matchMedia("(min-width: 768px)").addListener(handler);
//   });

//           <div >
//             {matches && (<h1>Big Screen fdsf fdsfsdf fdsfsd fsdfsd fsdfsdf fsdfdsf fdsfsd fsdfsd fsdfsdf fsdfsd</h1>)}
//             {!matches && (<h3>Small Screen fdsf fdsfsdf fdsfsd fsdfsd fsdfsdf fsdfdsf fdsfsd fsdfsd fsdfsdf fsdfsd</h3>)}
//           </div>
//    {/* <Route path={`${url}/Project/:id`} component={ProjectDetail} /> */}
