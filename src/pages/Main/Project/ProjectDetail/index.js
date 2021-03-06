import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
import Task from "../Task";

const ProjectIn = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${path}`} exact component={ProjectDetail} />
        <Route path={`${path}/:id`} component={Task} />
      </Switch>
    </div>
  );
};

export default ProjectIn;
