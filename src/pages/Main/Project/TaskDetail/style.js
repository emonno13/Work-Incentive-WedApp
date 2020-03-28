import { makeStyles } from "@material-ui/core/styles";
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
  statusButton: {
    color: "#25828b",
    width: 100,
    height: 50,
    borderRadius: 8,
    border: "solid 1px rgba(37, 130, 139, 0.5)",
    marginTop: 10
  },
  statusButonText: {
    fontSize: 15,
    color: "#25828b",
    textAlign: "center",
    fontWeight: 500
  }
}));
