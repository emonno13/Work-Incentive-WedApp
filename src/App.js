import React from "react";
import { Box } from "@material-ui/core";
import Main from "./pages/Main/index";
import Home from "./pages/Auth/Home/index";
import Login from "./pages/Auth/SignIn/index";
//import Auth from "./pages/Auth/index";
import { Switch, Route } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import { isLogin } from "./redux/actions/index";
//import CreateProjectForm from "../src/components/ProjectForm/FormikForm";
//import { Formik } from "formik";

const App = () => {
  return (
    <Box component="div">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Main" component={Main} />
      </Switch>
    </Box>
  );
};

export default App;
