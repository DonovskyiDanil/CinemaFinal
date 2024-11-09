import ACTIONS_TYPES from './actionsTypes.js';


export const getAllActorsAction = () => ({ type: ACTIONS_TYPES.GET_ACTORS_ACTION });
export const getAllActorsRequest = () => ({ type: ACTIONS_TYPES.GET_ACTORS_REQUEST });
export const getAllActorsSuccess = (payload) => ({ type: ACTIONS_TYPES.GET_ACTORS_SUCCESS, payload });
export const getAllActorsError = (payload) => ({ type: ACTIONS_TYPES.GET_ACTORS_ERROR, payload });


export const getActorAction = (payload) => ({ type: ACTIONS_TYPES.GET_ACTOR_ACTION, payload });
export const getActorRequest = () => ({ type: ACTIONS_TYPES.GET_ACTOR_REQUEST });
export const getActorSuccess = (payload) => ({ type: ACTIONS_TYPES.GET_ACTOR_SUCCESS, payload });
export const getActorError = (payload) => ({ type: ACTIONS_TYPES.GET_ACTOR_ERROR, payload });


export const createActorAction = (payload) => ({ type: ACTIONS_TYPES.POST_ACTOR_ACTION, payload });
export const createActorRequest = () => ({ type: ACTIONS_TYPES.POST_ACTOR_REQUEST });
export const createActorSuccess = (payload) => ({ type: ACTIONS_TYPES.POST_ACTOR_SUCCESS, payload });
export const createActorError = (payload) => ({ type: ACTIONS_TYPES.POST_ACTOR_ERROR, payload });


export const updateActorAction = (payload) => ({ type: ACTIONS_TYPES.PUT_ACTOR_ACTION, payload });
export const updateActorRequest = () => ({ type: ACTIONS_TYPES.PUT_ACTOR_REQUEST });
export const updateActorSuccess = (payload) => ({ type: ACTIONS_TYPES.PUT_ACTOR_SUCCESS, payload });
export const updateActorError = (payload) => ({ type: ACTIONS_TYPES.PUT_ACTOR_ERROR, payload });


export const deleteActorAction = (payload) => ({ type: ACTIONS_TYPES.DELETE_ACTOR_ACTION, payload });
export const deleteActorRequest = () => ({ type: ACTIONS_TYPES.DELETE_ACTOR_REQUEST });
export const deleteActorSuccess = (payload) => ({ type: ACTIONS_TYPES.DELETE_ACTOR_SUCCESS, payload });
export const deleteActorError = (payload) => ({ type: ACTIONS_TYPES.DELETE_ACTOR_ERROR, payload });
