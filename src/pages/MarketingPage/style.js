import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    justifyItems: "center",
    minHeight: 0,
    padding: theme.spacing(2)
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
  }
}));
