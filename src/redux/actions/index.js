import { OPEN_PROJECT_FORM, IS_LOGIN } from "./type";

export const openProjectForm = (data) => {
  return {
    type: OPEN_PROJECT_FORM,
    data
  };
};
export const isLogin = (data) => {
  return {
    type: IS_LOGIN,
    data
  };
};
