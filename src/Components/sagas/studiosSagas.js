import { call, put } from 'redux-saga/effects';
import {
    getAllStudiosRequest,
    getAllStudiosSuccess,
    getAllStudiosError,
    getStudioRequest,
    getStudioSuccess,
    getStudioError,
    createStudioRequest,
    createStudioSuccess,
    createStudioError,
    updateStudioRequest,
    updateStudioSuccess,
    updateStudioError,
    deleteStudioRequest,
    deleteStudioSuccess,
    deleteStudioError
} from '../../store/actions/studiosActions';

import cinemaService from '../../cinema-service';

export function* getAllStudiosSaga() {
    try {
        yield put(getAllStudiosRequest());
        const response = yield call(cinemaService.get, '/studios');
        yield put(getAllStudiosSuccess(response.data));
    } catch (error) {
        yield put(getAllStudiosError(error.message));
    }
}

export function* getStudioSaga(action) {
    try {
        yield put(getStudioRequest());
        const response = yield call(cinemaService.get, `/studios/${action.payload}`);
        yield put(getStudioSuccess(response.data));
    } catch (error) {
        yield put(getStudioError(error.message));
    }
}

export function* createStudioSaga(action) {
    try {
        yield put(createStudioRequest());
        const response = yield call(cinemaService.post, '/studios', action.payload);
        yield put(createStudioSuccess(response.data));
    } catch (error) {
        yield put(createStudioError(error.message));
    }
}

export function* updateStudioSaga(action) {
    try {
        yield put(updateStudioRequest());
        const response = yield call(cinemaService.put, `/studios/${action.payload.id}`, action.payload);
        yield put(updateStudioSuccess(response.data));
    } catch (error) {
        yield put(updateStudioError(error.message));
    }
}

export function* deleteStudioSaga(action) {
    try {
        yield put(deleteStudioRequest());
        yield call(cinemaService.delete, `/studios/${action.payload}`);
        yield put(deleteStudioSuccess(action.payload));
    } catch (error) {
        yield put(deleteStudioError(error.message));
    }
}
