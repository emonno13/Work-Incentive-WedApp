import { Rating } from "@material-ui/lab";
import { makeStyles, withStyles } from "@material-ui/core/styles";
export const StyledRating = withStyles({
  iconFilled: {
    color: "#ff4757"
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
    marginTop: 15,
    // [theme.breakpoints.up("lg")]: {
    //   justifyContent: "space-between"
    // },
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
    fontWeight: 600
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
  }
}));
