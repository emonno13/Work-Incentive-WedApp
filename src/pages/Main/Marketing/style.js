import { makeStyles, fade } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    justifyItems: "center",
    minHeight: 0,
    padding: theme.spacing(5)
  },
  title: {
    fontSize: 30,
    color: "#25252a",
    spacing: 3
  },
  managerTitle: {
    marginTop: 20,
    fontSize: 20,
    color: "#25252a"
  },
  rootMember: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  ///SEARCH BUTTON
  groupSearch: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start"
    }
  },
  search: {
    borderRadius: 20,
    position: "relative",
    //borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },
    //marginLeft: 20,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      //marginLeft: theme.spacing(2),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "30ch"
      }
    },
    [theme.breakpoints.down("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));
