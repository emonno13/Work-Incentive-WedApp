import {OPEN_PROJECT_FORM} from './type'

export const openProjectForm = (data) => {
    return {
        type: OPEN_PROJECT_FORM,
        data,
    }
}

