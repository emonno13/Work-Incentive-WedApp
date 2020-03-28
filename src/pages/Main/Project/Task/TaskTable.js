import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
  Paper,
  Box,
  Avatar,
  Grid
} from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import Rating from "@material-ui/lab/Rating";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
const StyledRating = withStyles({
  iconFilled: {
    color: "#ff4757"
  }
})(Rating);

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

const headCells = [
  {
    id: "status",
    numeric: true,
    disablePadding: true,
    label: "Status"
  },
  {
    id: "task",
    numeric: true,
    disablePadding: false,
    label: "Task"
  },
  { id: "progress", numeric: true, disablePadding: false, label: "Progress" },
  { id: "dueDate", numeric: true, disablePadding: false, label: "Due date" },
  { id: "inCharge", numeric: true, disablePadding: false, label: "In charge" },
  { id: "result", numeric: false, disablePadding: false, label: "Result" }
];

const EnhancedTableHead = (props) => {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" />
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            //stickyHeader
            //align={headCell.numeric ? "right" : "left"}
            align={headCell.numeric ? "left" : "center"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography
                style={{
                  color: "#25252a",
                  lineHeight: 0.88,
                  fontSize: 16,
                  fontWeight: 600
                }}
              >
                {headCell.label}
              </Typography>
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  textTask: {
    color: "#25252a",
    lineHeight: 1.63,
    fontWeight: 600
  },
  textName: {
    color: "#25828b",
    lineHeight: 0.88,
    fontSize: 16,
    fontWeight: 500
    //alignSelf: "flex-start"
  },
  textContent: {
    color: "#828296",
    lineHeight: 1.63,
    fontSize: 16
  },
  textContentDaysLate: {
    color: "#f05666",
    lineHeight: 1.63,
    fontSize: 16,
    marginLeft: 4
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 10,
    width: 1
  },
  doingStatus: {
    background: "#25828b",
    borderRadius: 23,
    padding: 2,
    color: "#ffffff"
  },
  pauseStatus: {
    background: "#6f6f6f",
    borderRadius: 23,
    padding: 2,
    color: "#ffffff"
  },
  doneStatus: {
    background: "#bfda8d",
    borderRadius: 23,
    padding: 2,
    color: "#ffffff"
  }
}));

export default function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  //const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const rows = props.data;
  let { id } = useParams();

  return (
    <Box component="div" className={classes.root}>
      <Paper className={classes.paper}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            //size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      component={NavLink}
                      style={{ textDecoration: "none" }}
                      to={{
                        pathname: `${id}/TaskDetail`,
                        state: {
                          taskName: `${row.task}`
                        }
                      }}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.task}
                      selected={isItemSelected}
                      //onClick={(event) => handleClick(event, row.name)}
                      //onClick={() => alert("hi")}
                      //onDoubleClick={() => alert("hi")}
                    >
                      <TableCell padding="checkbox" />
                      {/**/}
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        alignItems="left"
                      >
                        {/**/}
                        {row.status === "Doing" && (
                          <Typography
                            align="center"
                            className={classes.doingStatus}
                          >
                            {row.status}
                          </Typography>
                        )}
                        {row.status === "Done" && (
                          <Typography
                            align="center"
                            className={classes.doneStatus}
                          >
                            {row.status}
                          </Typography>
                        )}
                        {row.status === "Pause" && (
                          <Typography
                            align="center"
                            className={classes.pauseStatus}
                          >
                            {row.status}
                          </Typography>
                        )}
                      </TableCell>
                      {/**/}
                      <TableCell align="left" width={250}>
                        <Typography className={classes.textTask}>
                          {row.task}
                        </Typography>
                      </TableCell>
                      {/**/}
                      <TableCell align="center">
                        <StyledRating
                          name="read-only"
                          value={row.progress}
                          readOnly
                          // onChange={(event, newValue) => {
                          //   setValue(newValue);
                          // }}
                          icon={<AppleIcon fontSize="inherit" />}
                        />
                      </TableCell>
                      {/**/}
                      <TableCell align="left">
                        <Box component="div" display="flex" direction="row">
                          <Typography className={classes.textContent}>
                            {row.duoDate}
                          </Typography>
                          <Typography className={classes.textContentDaysLate}>
                            {` ${row.daysLate} `}
                          </Typography>
                        </Box>
                      </TableCell>
                      {/**/}
                      <TableCell align="left">
                        <Grid
                          container
                          alignItems="center"
                          justify="space-between"
                        >
                          <Grid item xs={12} lg={2}>
                            <Avatar src={row.avatar} alt="User" />
                          </Grid>
                          <Grid item xs={12} lg={8}>
                            <Typography className={classes.textName}>
                              {row.name}
                            </Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                      {/**/}

                      <TableCell align="left">
                        <Typography className={classes.textContent}>
                          {`${row.result}`}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component={"div"}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
