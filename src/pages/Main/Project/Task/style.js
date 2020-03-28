import { makeStyles, fade } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  },
  groupHeader: {
    marginTop: 15
  },
  backButton: {
    color: "#25828b"
  },
  groupFilter: {
    marginTop: 10
  },
  filterStatusInput: {
    marginTop: 10,
    marginLeft: 15
  },
  filterChargeInput: { marginTop: 10 },
  createButton: {
    background: "#25828b",
    width: 100,
    borderRadius: 8,
    marginTop: 10
  },
  createButtonText: {
    fontSize: 10,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: 500
  },
  ///SEARCH BUTTON
  groupSearch: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 10,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start"
    }
  },
  search: {
    borderRadius: 20,
    position: "relative",
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
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
