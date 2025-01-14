import ACTIONS_TYPES from "./actionsTypes";

export const getAllDirectorsAction = () => {
    return {
        type: ACTIONS_TYPES.GET_DIRECTORS_ACTION,

    }
}
export const getAllDirectorsRequest = () => {
    return {
        type: ACTIONS_TYPES.GET_DIRECTORS_REQUEST,
        
    }
}
export const getAllDirectorsSuccess = (payload) => {
    return {
        type: ACTIONS_TYPES.GET_DIRECTORS_SUCCESS,
        payload
    }
}
export const getAllDirectorsError = (payload) => {
    return {
        type: ACTIONS_TYPES.GET_DIRECTORS_ERROR,
        payload
    }
}

export const createDirectorAction = (payload) => {
    return {
        type: ACTIONS_TYPES.POST_DIRECTOR_ACTION,
payload
    }
}
export const createDirectorRequest = () => {
    return {
        type: ACTIONS_TYPES.POST_DIRECTOR_REQUEST,
        
    }
}
export const createDirectorSuccess = (payload) => {
    return {
        type: ACTIONS_TYPES.POST_DIRECTOR_SUCCESS,
        payload
    }
}
export const createDirectorError = (payload) => {
    return {
        type: ACTIONS_TYPES.POST_DIRECTOR_ERROR,
        payload
    }
}

export const updateDirectorAction = (payload) => {
    return {
        type: ACTIONS_TYPES.PUT_DIRECTOR_ACTION,
payload
    }
}
export const updateDirectorRequest = () => {
    return {
        type: ACTIONS_TYPES.PUT_DIRECTOR_REQUEST,
        
    }
}
export const updateDirectorSuccess = (payload) => {
    return {
        type: ACTIONS_TYPES.PUT_DIRECTOR_SUCCESS,
        payload
    }
}
export const updateDirectorError = (payload) => {
    return {
        type: ACTIONS_TYPES.PUT_DIRECTOR_ERROR,
        payload
    }
}

export const deleteDirectorAction = (payload) => {
    return {
        type: ACTIONS_TYPES.DELETE_DIRECTOR_ACTION,
payload
    }
}
export const deleteDirectorRequest = () => {
    return {
        type: ACTIONS_TYPES.DELETE_DIRECTOR_REQUEST,
        
    }
}
export const deleteDirectorSuccess = (payload) => {
    return {
        type: ACTIONS_TYPES.DELETE_DIRECTOR_SUCCESS,
        payload
    }
}
export const deleteDirectorError = (payload) => {
    return {
        type: ACTIONS_TYPES.DELETE_DIRECTOR_ERROR,
        payload
    }
}