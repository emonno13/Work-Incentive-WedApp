import { OPEN_PROJECT_FORM, IS_LOGIN } from "../actions/type";

const initialState = {
  createProjectForm: false,
  authLogin: false
};

export default function(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case OPEN_PROJECT_FORM:
      return {
        ...state,
        createProjectForm: action.data
      };
    case IS_LOGIN:
      return {
        ...state,
        authLogin: action.data
      };

    default:
      return state;
  }
}
