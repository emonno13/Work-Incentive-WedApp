import React, { useMemo } from "react";
import { Grid, Typography, CardActionArea, Box } from "@material-ui/core";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import { openProjectForm } from "../../../../redux/actions/index";
import { useDispatch } from "react-redux";
import ProjectCard from "../components/ProjectCard/index";
import ProjectForm from "../components/ProjectForm/index";
import useStyles from "./style";

const projects = [
  {
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    title: "Vinhomes project",
    month: "15 Mar 2018 - present"
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    title: "Vinhomes project is just a outstanding performance in USA",
    month: "15 Mar 2018 - present"
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    title:
      "Vinhomes projectfdsfsdafdsafsadfsafsafdasdfsafsdafadsfasdfasdfasfdsfdsaffdsafsf",
    month: "15 Mar 2018 - present"
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    title: "Vinhomes project",
    month: "15 Mar 2018 - present"
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    title: "Vinhomes project",
    month: "15 Mar 2018 - present"
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    title: "Vinhomes project",
    month: "15 Mar 2018 - present"
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    title: "Vinhomes project",
    month: "15 Mar 2018 - present"
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    title: "Vinhomes project",
    month: "15 Mar 2018 - present"
  }
];

const ProjectAll = (props) => {
  const classes = useStyles(props);

  const dispatch = useDispatch();
  //const open = useSelector((state) => state.reduce.createProjectForm);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => {
    //console.log(open);
    return (
      <Box component="div" className={classes.root}>
        <ProjectForm />
        <Typography className={classes.title}> Projects </Typography>
        <Grid container spacing={3}>
          <Grid item md={4} sm={6} xs={12}>
            <CardActionArea
              className={classes.addProjectCard}
              onClick={() => dispatch(openProjectForm(true))}
            >
              <WorkOutlineIcon className={classes.addProjectIcon} />
              <Typography className={classes.addProjectTitle}>
                New project
              </Typography>
            </CardActionArea>
          </Grid>

          {projects.map((item, index) => (
            <ProjectCard
              key={index}
              image={item.image}
              title={item.title}
              month={item.month}
            />
          ))}
        </Grid>
      </Box>
    );
  });
};

export default ProjectAll;
