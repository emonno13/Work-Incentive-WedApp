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
  useTheme
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Switch, Route, NavLink } from "react-router-dom";
import useStyles, { StyledBadge } from "./style";
import ITPage from "../pages/ITPage/index";
import SalePage from "../pages/SalePage/index";
import ProjectPage from "../pages/ProjectPage/index";
import ProjectDetail from "../pages/ProjectPage/ProjectDetail/ProjectDetail";
import MarketingPage from "../pages/MarketingPage/index";
//import ProjectAll from "../pages/ProjectPage/ProjectAll/ProjectAll";

const MainTab = (props) => {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

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

        {["Project", "IT", "Sales", "Marketing"].map((text) => (
          <ListItem
            button
            key={text}
            className={classes.nonActiveNav}
            component={NavLink}
            to={"/" + text}
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
      </List>

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
            to={"/" + text}
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
            <Typography variant="h6" noWrap className={classes.nameAppBar}>
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
      <nav className={classes.drawer} aria-label="mailbox folders">
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
      </nav>

      <Box component="main" className={classes.content} overflow="hidden">
        <Box component="div" className={classes.toolbar} />

        <Switch onClick={handleDrawerToggle}>
          <Route exact path="/Project" component={ProjectPage} />
          <Route path="/Project/:id" component={ProjectDetail} />
          <Route path="/IT" component={ITPage} />
          <Route path="/Sales" component={SalePage} />
          <Route path="/Marketing" component={MarketingPage} />
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
