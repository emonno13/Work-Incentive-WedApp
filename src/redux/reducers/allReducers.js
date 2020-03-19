import { OPEN_PROJECT_FORM } from '../actions/type'

const initialState = {
    createProjectForm: false
}

export default function (state = initialState, action) {
    console.log(action)
    switch (action.type) {

        case OPEN_PROJECT_FORM:
            return {
                ...state,
                createProjectForm: action.data
            }



        default:
            return state;
    }
}