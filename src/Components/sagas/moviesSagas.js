import { takeLatest, call, put } from 'redux-saga/effects';
import {
    createMovieRequest,
    createMovieSuccess,
    createMovieError,
    getAllMoviesRequest,
    getAllMoviesSuccess,
    getAllMoviesError,
    getMovieRequest,
    getMovieSuccess,
    getMovieError,
    updateMovieRequest,
    updateMovieSuccess,
    updateMovieError,
    deleteMovieRequest,
    deleteMovieSuccess,
    deleteMovieError,
} from '../../store/actions/movieActions';
import ACTIONS_TYPES from '../../store/actions/actionsTypes';
import cinemaService from '../../cinema-service';


export function* getAllMoviesSaga() {
    yield put(getAllMoviesRequest());
    try {
        const movies = yield call(cinemaService.get, '/movies');
        yield put(getAllMoviesSuccess(movies.data));
    } catch (error) {
        yield put(getAllMoviesError(error));
    }
}


export function* getMovieSaga(action) {
    yield put(getMovieRequest());
    try {
        const movie = yield call(cinemaService.get, `/movies/${action.payload}`);
        yield put(getMovieSuccess(movie.data));
    } catch (error) {
        yield put(getMovieError(error));
    }
}


export function* createMovieSaga(action) {
    yield put(createMovieRequest());
    try {
        const movie = yield call(cinemaService.post, '/movies', action.payload);
        yield put(createMovieSuccess(movie.data));
    } catch (error) {
        yield put(createMovieError(error));
    }
}


export function* updateMovieSaga(action) {
    yield put(updateMovieRequest());
    try {
        const movie = yield call(cinemaService.put, `/movies/${action.payload.id}`, action.payload);
        yield put(updateMovieSuccess(movie.data));
    } catch (error) {
        yield put(updateMovieError(error));
    }
}

export function* deleteMovieSaga(action) {
    yield put(deleteMovieRequest());
    try {
        yield call(cinemaService.delete, `/movies/${action.payload}`);
        yield put(deleteMovieSuccess(action.payload));
    } catch (error) {
        yield put(deleteMovieError(error));
    }
}

export default function* moviesSagas() {
    yield takeLatest(ACTIONS_TYPES.GET_MOVIES_ACTION, getAllMoviesSaga);
    yield takeLatest(ACTIONS_TYPES.GET_MOVIE_ACTION, getMovieSaga);
    yield takeLatest(ACTIONS_TYPES.POST_MOVIE_ACTION, createMovieSaga);
    yield takeLatest(ACTIONS_TYPES.PUT_MOVIE_ACTION, updateMovieSaga);
    yield takeLatest(ACTIONS_TYPES.DELETE_MOVIE_ACTION, deleteMovieSaga);
}
