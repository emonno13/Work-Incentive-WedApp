import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ProjectAll from "./ProjectAll/ProjectAll";
import ProjectDetail from "./ProjectDetail/index";
//import ProjectDetail from "./ProjectDetail/ProjectDetail";
//import ProjectDetailTask from "./ProjectDetailTask/index";

const ProjectPage = (props) => {
  let { path } = useRouteMatch();
  //console.log(url);
  //console.log(`${path}/:id`);
  return (
    <div>
      <Switch>
        <Route path={`${path}`} exact component={ProjectAll} />
        <Route path={`${path}/:id`} component={ProjectDetail} />
      </Switch>
    </div>
  );
};

export default ProjectPage;

//    to={`/Main/Project/${props.title}`}  : page 1 to 2  ở 2 nhận param tên id ( title)
//    to={`/Main/Project/${id}/AllTask`}  : page 2 tỏ 3
