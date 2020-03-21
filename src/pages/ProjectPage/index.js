import React from "react";
import { Switch, Route } from "react-router-dom";
import ProjectAll from "./ProjectAll/ProjectAll";
import ProjectDetail from "./ProjectDetail/ProjectDetail";
const ProjectPage = (props) => {
  return (
    <>
      <Switch>
        <Route path="/Project" exact component={ProjectAll} />
        <Route path="/Project/:id" component={ProjectDetail} />
      </Switch>
    </>
  );
};

export default ProjectPage;
