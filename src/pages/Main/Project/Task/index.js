import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Task from "./Task";
import TaskDetail from "../TaskDetail";

const ProjectIn = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${path}`} exact component={Task} />
        <Route path={`${path}/:id`} component={TaskDetail} />
      </Switch>
    </div>
  );
};

export default ProjectIn;
