import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  background: {
    height: 0,
    paddingTop: "15%"
  },
  root: {
    padding: theme.spacing(2)
  },
  backButton: {
    color: "#25828b"
  },
  iconEditButton: {
    color: "#25828b"
  },
  textEditButton: {
    color: "#25828b"
  },
  textTime: {
    marginLeft: 50,
    marginBottom: 20
  },
  rootPaper: {
    padding: theme.spacing(5),
    margin: 20
  },
  headerPaper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5
  },
  headerTitle: {
    fontWeight: "500",
    fontSize: 20,
    color: "#25252a"
  },
  textDescription: {
    fontSize: 16,
    lineHeight: 1.63,
    color: "#8282,96"
  },
  viewAll: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 0.88,
    color: "#25828b"
  },
  rootTaskItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderBottomWidth: 20,

    marginTop: 10
  },
  titleTaskItem: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#25252a",
    lineHeight: 1.63
  },
  timeTaskItem: {
    color: "#828296",
    lineHeight: 1.44,
    fontSize: 12
  },
  rootMember: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  }
}));
