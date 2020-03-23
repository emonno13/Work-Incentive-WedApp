import React from "react";
import { Box } from "@material-ui/core";
import MainTab from "./parts/MainTab";
import HomePage from "./pages/Home/index";
import ProjectPage from "./pages/Project/index";
import { Switch, Route } from "react-router-dom";

//import CreateProjectForm from "../src/components/ProjectForm/FormikForm";
//import { Formik } from "formik";

const App = () => {
  return (
    <Box component="div">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Main" component={MainTab} />
      </Switch>
    </Box>
  );
};

export default App;
