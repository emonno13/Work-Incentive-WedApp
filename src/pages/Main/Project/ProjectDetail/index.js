import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
import ProjectDetailTask from "../ProjectDetailTask";

const ProjectIn = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${path}`} exact component={ProjectDetail} />
        <Route path={`${path}/:id`} component={ProjectDetailTask} />
      </Switch>
    </div>
  );
};

export default ProjectIn;
