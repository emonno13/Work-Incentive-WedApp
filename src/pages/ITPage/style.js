import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    justifyItems: "center"
  },
  title: {
    fontSize: 30,
    color: "#25252a",
    spacing: 3
  },
  groupCard: {},

  addProjectCard: {
    display: "flex",
    backgroundColor: "#f7f8fa",
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#25828b"
  },
  addProjectIcon: {
    color: "#25828b",
    fontSize: 40
  },
  addProjectTitle: {
    fontSize: 14,
    color: "#25828b"
  }
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     justifyItems: "center"
//     //backgroundColor:'red',
//   },
//   title: {
//     fontSize: 30,
//     color: "#25252a",
//     spacing: 3
//   },
//   groupCard: {
//     display: "flex-inline",
//     flexGrow: 1,
//     flexWrap: "wrap",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     [theme.breakpoints.up("md")]: {
//       justifyContent: "unset", //or initial
//       alignItems: "center",
//       flexDirection: "row"
//       //background: "black"
//     },
//     [theme.breakpoints.down("xs")]: {
//       justifyContent: "center", //or initial
//       alignItems: "center",
//       flexDirection: "row"
//     }
//     [theme.breakpoints.between('145', '1345')]: {
//       backgroundColor: 'puple',
//     },
//     '@media (orientation: landscape)': {
//       alignItems: 'center'
//     },
//     [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
//       justifyContent: 'center'
//     },
//   },

//   addProjectCard: {
//     display: "flex",
//     backgroundColor: "#f7f8fa",
//     width: 300,
//     height: 240,
//     margin: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     borderWidth: 2,
//     borderStyle: "dashed",
//     borderColor: "#25828b",
//     [theme.breakpoints.down("xs")]: {
//       width: 250
//       margin: 20,
//     }
//   },
//   addProjectIcon: {
//     color: "#25828b",
//     fontSize: 40
//   },
//   addProjectTitle: {
//     fontSize: 14,
//     color: "#25828b"
//   }
// }));
