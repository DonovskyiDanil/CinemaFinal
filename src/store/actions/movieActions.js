import ACTIONS_TYPES from './actionsTypes';


export const getAllMoviesAction = () => ({ type: ACTIONS_TYPES.GET_MOVIES_ACTION });
export const getAllMoviesRequest = () => ({ type: ACTIONS_TYPES.GET_MOVIES_REQUEST });
export const getAllMoviesSuccess = (payload) => ({ type: ACTIONS_TYPES.GET_MOVIES_SUCCESS, payload });
export const getAllMoviesError = (payload) => ({ type: ACTIONS_TYPES.GET_MOVIES_ERROR, payload });


export const getMovieAction = (id) => ({ type: ACTIONS_TYPES.GET_MOVIE_ACTION, payload: id });
export const getMovieRequest = () => ({ type: ACTIONS_TYPES.GET_MOVIE_REQUEST });
export const getMovieSuccess = (payload) => ({ type: ACTIONS_TYPES.GET_MOVIE_SUCCESS, payload });
export const getMovieError = (payload) => ({ type: ACTIONS_TYPES.GET_MOVIE_ERROR, payload });


export const createMovieAction = (movie) => ({ type: ACTIONS_TYPES.POST_MOVIE_ACTION, payload: movie });
export const createMovieRequest = () => ({ type: ACTIONS_TYPES.POST_MOVIE_REQUEST });
export const createMovieSuccess = (payload) => ({ type: ACTIONS_TYPES.POST_MOVIE_SUCCESS, payload });
export const createMovieError = (payload) => ({ type: ACTIONS_TYPES.POST_MOVIE_ERROR, payload });


export const updateMovieAction = (movie) => ({ type: ACTIONS_TYPES.PUT_MOVIE_ACTION, payload: movie });
export const updateMovieRequest = () => ({ type: ACTIONS_TYPES.PUT_MOVIE_REQUEST });
export const updateMovieSuccess = (payload) => ({ type: ACTIONS_TYPES.PUT_MOVIE_SUCCESS, payload });
export const updateMovieError = (payload) => ({ type: ACTIONS_TYPES.PUT_MOVIE_ERROR, payload });


export const deleteMovieAction = (id) => ({ type: ACTIONS_TYPES.DELETE_MOVIE_ACTION, payload: id });
export const deleteMovieRequest = () => ({ type: ACTIONS_TYPES.DELETE_MOVIE_REQUEST });
export const deleteMovieSuccess = (payload) => ({ type: ACTIONS_TYPES.DELETE_MOVIE_SUCCESS, payload });
export const deleteMovieError = (payload) => ({ type: ACTIONS_TYPES.DELETE_MOVIE_ERROR, payload });
