import React, { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grow
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style";
import { NavLink } from "react-router-dom";
export default function ProjectCard(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  //const { setOpenProject } = props;
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Grow
      in={checked}
      style={{ transformOrigin: "0 0 0 " }}
      {...(checked ? { timeout: 1000 } : {})}
    >
      <Grid item md={4} sm={6} xs={12}>
        <Card className={classes.root}>
          <CardActionArea
            component={NavLink}
            to={`/Main/Project/${props.title}`}
          >
            <CardMedia
              className={classes.media}
              image={props.image}
              title={props.title}
            />
            <CardContent>
              <Typography
                gutterBottom
                component="h2"
                className={classes.title}
                noWrap={true}
              >
                {props.title}
              </Typography>
              <Typography className={classes.month} noWrap={true}>
                {props.month}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grow>
  );
}
