import ACTIONS_TYPES from "./actionsTypes";


export const getAllStudiosAction = () => {
    return {
        type: ACTIONS_TYPES.GET_STUDIOS_ACTION,
    }
}
export const getAllStudiosRequest = () => {
    return {
        type: ACTIONS_TYPES.GET_STUDIOS_REQUEST,
    }
}
export const getAllStudiosSuccess = (payload) => {
    return {
        type: ACTIONS_TYPES.GET_STUDIOS_SUCCESS,
        payload
    }
}
export const getAllStudiosError = (payload) => {
    return {
        type: ACTIONS_TYPES.GET_STUDIOS_ERROR,
        payload
    }
}

export const getStudioAction = (id) => {
    return {
        type: ACTIONS_TYPES.GET_STUDIO_ACTION,
        payload: id
    }
}
export const getStudioRequest = () => {
    return {
        type: ACTIONS_TYPES.GET_STUDIO_REQUEST,
    }
}
export const getStudioSuccess = (payload) => {
    return {
        type: ACTIONS_TYPES.GET_STUDIO_SUCCESS,
        payload
    }
}
export const getStudioError = (payload) => {
    return {
        type: ACTIONS_TYPES.GET_STUDIO_ERROR,
        payload
    }
}


export const createStudioAction = (studio) => {
    return {
        type: ACTIONS_TYPES.POST_STUDIO_ACTION,
        payload: studio
    }
}
export const createStudioRequest = () => {
    return {
        type: ACTIONS_TYPES.POST_STUDIO_REQUEST,
    }
}
export const createStudioSuccess = (payload) => {
    return {
        type: ACTIONS_TYPES.POST_STUDIO_SUCCESS,
        payload
    }
}
export const createStudioError = (payload) => {
    return {
        type: ACTIONS_TYPES.POST_STUDIO_ERROR,
        payload
    }
}


export const updateStudioAction = (studio) => {
    return {
        type: ACTIONS_TYPES.PUT_STUDIO_ACTION,
        payload: studio
    }
}
export const updateStudioRequest = () => {
    return {
        type: ACTIONS_TYPES.PUT_STUDIO_REQUEST,
    }
}
export const updateStudioSuccess = (payload) => {
    return {
        type: ACTIONS_TYPES.PUT_STUDIO_SUCCESS,
        payload
    }
}
export const updateStudioError = (payload) => {
    return {
        type: ACTIONS_TYPES.PUT_STUDIO_ERROR,
        payload
    }
}


export const deleteStudioAction = (id) => {
    return {
        type: ACTIONS_TYPES.DELETE_STUDIO_ACTION,
        payload: id
    }
}
export const deleteStudioRequest = () => {
    return {
        type: ACTIONS_TYPES.DELETE_STUDIO_REQUEST,
    }
}
export const deleteStudioSuccess = (payload) => {
    return {
        type: ACTIONS_TYPES.DELETE_STUDIO_SUCCESS,
        payload
    }
}
export const deleteStudioError = (payload) => {
    return {
        type: ACTIONS_TYPES.DELETE_STUDIO_ERROR,
        payload
    }
}
