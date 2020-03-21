import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Badge } from "@material-ui/core";

const drawerWidth = 240;
export const StyledBadge = withStyles((theme) => ({
  badge: {
    background: "#25828b",
    right: 20,
    top: 50,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 1px",
    height: 30,
    width: 30,
    borderRadius: 15,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}))(Badge);

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "#f7f8fa"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },

  appBar: {
    //backgroundColor:'red',
    display: "flex",
    background:
      "linear-gradient(to right, #9fa1be,#b6b2c8,#dbced6,#efd3cb,#e9b4a7,#b1949d,#a2909c)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "white",
      background: "white",
      display: "flex",
      alignItems: "flex-end"
    }
  },
  menuButton: {
    //marginRight: theme.spacing(20),
    //backgroundColor:'pink',
    color: "grey",
    fontSize: 30,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  groupAvatar: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    width: "100%"
  },
  avatarAppBar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    borderStyle: "none",
    // borderColor:'white',
    // borderWidth:1,
    boxShadow:
      " inset 0 -3em 3em rgba(0,0,0,0.1), 0.3em 0.3em 1em rgba(0,0,0,0.3)"
  },
  nameAppBar: {
    color: "#f7f8fa",
    fontSize: 25,
    marginRight: 10,
    [theme.breakpoints.up("sm")]: {
      color: "grey",
      marginRight: 10
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background:
      "linear-gradient(#9fa1be,#b6b2c8,#dbced6,#efd3cb,#e9b4a7,#b1949d,#a2909c)"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0)
  },
  logoArea: {
    display: "flex",
    height: 100,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  logoText: {
    color: "#f7f8fa",
    alignItems: "center",
    fontSize: 30
  },
  topSectionText: {
    color: "#25252a",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 2.57,
    marginLeft: "12%",
    letterSpacing: 1.17
  },
  nonActiveNav: {
    color: "#25252a",
    fontSize: 16,
    lineHeight: 2.25,
    opacity: 0.6,
    letterSpacing: 0.5
  },
  nonActiveText: {
    marginLeft: "5%"
  }
}));

// @media screen and (max-width: 992px) {
//     .column {
//       flex: 50%;
//     }
//   }

//   @media screen and (max-width: 600px) {
//     .row {
//       flex-direction: column;
//     }
//   }

//   @media only screen and (max-width: 600px) {
//     .content {
//       background-color: red;
//       flex-grow: 1;
//       padding: 30px 20px 10px 25px;
//     }
// }
