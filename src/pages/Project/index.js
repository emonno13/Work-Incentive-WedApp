import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ProjectAll from "./ProjectAll/ProjectAll";
import ProjectDetail from "./ProjectDetail/ProjectDetail";
const ProjectPage = (props) => {
  let { url } = useRouteMatch();
  console.log(url);
  return (
    <div>
      <Switch>
        <Route path={`${url}`} exact component={ProjectAll} />
        <Route path={`${url}/:id`} component={ProjectDetail} />
        {/* <Route path="/Project/:id" component={ProjectDetail} /> */}
      </Switch>
    </div>
  );
};

export default ProjectPage;
