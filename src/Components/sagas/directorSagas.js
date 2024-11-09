import { put } from 'redux-saga/effects';
import {
    getAllDirectorsRequest,
    getAllDirectorsError,
    getAllDirectorsSuccess,
    createDirectorRequest,
    createDirectorSuccess,
    createDirectorError,
    updateDirectorRequest,
    updateDirectorSuccess,
    updateDirectorError,
    deleteDirectorRequest,
    deleteDirectorSuccess,
    deleteDirectorError
} from '../../store/actions/directorActions';
import cinemaService from '../../cinema-service';

export function* getAllDirectorsSaga() {
    yield put(getAllDirectorsRequest());
    try {
        const { data: directors } = yield cinemaService.get('/directors');
        yield put(getAllDirectorsSuccess(directors));
    } catch (error) {
        yield put(getAllDirectorsError(error));
    }
}

export function* createDirectorSaga({ payload }) {
    yield put(createDirectorRequest());
    try {
        const { data: newDirector } = yield cinemaService.post('/directors', payload);
        yield put(createDirectorSuccess(newDirector));
    } catch (error) {
        yield put(createDirectorError(error));
    }
}

export function* updateDirectorSaga({ payload }) {
    yield put(updateDirectorRequest());
    try {
        const { data: updatedDirector } = yield cinemaService.put(`/directors/${payload.id}`, payload);
        yield put(updateDirectorSuccess(updatedDirector));
    } catch (error) {
        yield put(updateDirectorError(error));
    }
}

export function* deleteDirectorSaga({ payload }) {
    yield put(deleteDirectorRequest());
    try {
        yield cinemaService.delete(`/directors/${payload}`);
        yield put(deleteDirectorSuccess(payload));
    } catch (error) {
        yield put(deleteDirectorError(error));
    }
}
