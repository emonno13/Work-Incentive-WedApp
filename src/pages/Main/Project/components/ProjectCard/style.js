import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    height: 240,
    //width: 300,
    //margin: 20,
    boxShadow:
      " inset 0 -3em 3em rgba(0,0,0,0.1), 0.3em 0.3em 1em rgba(0,0,0,0.5)"
    // [theme.breakpoints.up("md")]: {
    //   //minWidth: 250,
    //   margin: 20,
    //   boxShadow:
    //     " inset 0 -3em 3em rgba(0,0,0,0.1), 0.3em 0.3em 1em rgba(0,0,0,0.5)"
    // },
    // [theme.breakpoints.down("xs")]: {
    //   //width: 250,
    //   //margin: 20,
    //   boxShadow:
    //     " inset 0 -3em 3em rgba(0,0,0,0.1), 0.3em 0.3em 1em rgba(0,0,0,0.5)"
    // }
  },
  media: {
    height: 170
  },
  title: {
    fontSize: 15,
    fontWeight: 700,
    lineHeight: "normal"
  },
  month: {
    flexDirection: "row",
    flexWrap: "wrap",
    color: "#828296",
    fontSize: 12,
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}));
