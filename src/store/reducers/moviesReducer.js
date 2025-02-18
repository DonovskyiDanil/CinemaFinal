import ACTIONS_TYPES from "../actions/actionsTypes.js";

const initialState = {
    movies: [],
    error: null,
    isFetching: false
};

export default function moviesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTIONS_TYPES.GET_MOVIE_SUCCESS:
        case ACTIONS_TYPES.GET_MOVIES_SUCCESS: 
            return { ...state, movies: payload, isFetching: false };
        
        case ACTIONS_TYPES.POST_MOVIE_SUCCESS: 
            return { ...state, movies: [...state.movies, payload], isFetching: false };
        
        case ACTIONS_TYPES.PUT_MOVIE_SUCCESS: 
            return { 
                ...state,
                movies: state.movies.map((movie) => movie.id === payload.id ? payload : movie),
                isFetching: false 
            };
        
        case ACTIONS_TYPES.DELETE_MOVIE_SUCCESS: 
            return { 
                ...state,
                movies: state.movies.filter((movie) => movie.id !== payload),
                isFetching: false 
            };
        
        case ACTIONS_TYPES.GET_MOVIE_REQUEST:
        case ACTIONS_TYPES.POST_MOVIE_REQUEST:
        case ACTIONS_TYPES.PUT_MOVIE_REQUEST:
        case ACTIONS_TYPES.DELETE_MOVIE_REQUEST: 
            return { ...state, isFetching: true };
        
        case ACTIONS_TYPES.GET_MOVIE_ERROR:
        case ACTIONS_TYPES.POST_MOVIE_ERROR:
        case ACTIONS_TYPES.PUT_MOVIE_ERROR:
        case ACTIONS_TYPES.DELETE_MOVIE_ERROR: 
            return { ...state, isFetching: false, error: payload };
        
        default: 
            return state;
    }
}
