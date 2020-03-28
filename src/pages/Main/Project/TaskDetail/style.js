import { Rating } from "@material-ui/lab";
import { makeStyles, withStyles } from "@material-ui/core/styles";
export const StyledRating = withStyles({
  iconFilled: {
    color: "#25828b"
  }
})(Rating);
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
    height: 40,
    borderRadius: 8,
    border: "solid 1px rgba(37, 130, 139, 0.5)",
    marginTop: 10
  },
  statusButonText: {
    fontSize: 15,
    color: "#25828b",
    textAlign: "center",
    fontWeight: 500
  },
  groupBasicInfo: {
    marginLeft: 50,
    marginTop: 10,
    [theme.breakpoints.down("lg")]: {
      alignItems: "space-between"
    }
  },
  groupItemBasicInfo: {
    marginTop: 5,
    marginRight: 20,
    [theme.breakpoints.down("lg")]: {
      marginTop: 20
    }
  },
  titleBasicInfo: {
    color: "#25252a",
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 10
  },
  textName: {
    marginLeft: 5,
    color: "#25828b",
    lineHeight: 0.88,
    fontWeight: 500
  },
  textProgress: {
    color: "#828296",
    fontSize: 16,
    lineHeight: 1.63,
    marginLeft: 5
  },
  textDate: {
    color: "#828296",
    lineHeight: 1.63,
    fontSize: 16
  },
  rootPaper: {
    padding: theme.spacing(5),
    marginLeft: 50,
    marginTop: 50
  },
  headerPaper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5
  },
  headerTitle: {
    fontWeight: 500,
    fontSize: "1rem",
    color: "#25252a"
  },
  iconEditButton: {
    color: "#25828b"
  },
  textDescription: {
    fontSize: 16,
    lineHeight: 1.63,
    color: "#828296"
  },
  rootFile: {
    marginTop: 5
  },
  file: {
    marginTop: 10,
    background: "rgba(122, 122, 122, 0.08)"
  },
  fileIcon: {
    color: "#25828b"
  },
  fileText: { color: "#25828b", overflow: "hidden", textOverflow: "ellipsis" },
  fileIconDownLoad: { color: "#4a4a4a" },
  fileIconRemove: { color: "#c4737d" },
  commentAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  commentPostButton: {
    background: "#25828b",
    width: 50,
    borderRadius: 8,
    marginTop: 10,
    padding: 5
  },
  commentPostButtonText: {
    fontSize: 10,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: 500
  },
  groupWriteComment: {
    marginTop: 20
  }
}));
