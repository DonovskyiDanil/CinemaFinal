import { put } from 'redux-saga/effects';
import {
    getAllActorsRequest,
    getAllActorsError,
    getAllActorsSuccess,
    createActorRequest,
    createActorSuccess,
    createActorError,
    updateActorRequest,
    updateActorSuccess,
    updateActorError,
    deleteActorRequest,
    deleteActorSuccess,
    deleteActorError
} from '../../store/actions/actorActions';
import cinemaService from '../../cinema-service';

export function* getAllActorsSaga() {
    yield put(getAllActorsRequest());
    try {
        const { data: actors } = yield cinemaService.get('/actors');
        yield put(getAllActorsSuccess(actors));
    } catch (error) {
        yield put(getAllActorsError(error));
    }
}

export function* createActorSaga({ payload }) {
    yield put(createActorRequest());
    try {
        const { data: newActor } = yield cinemaService.post('/actors', payload);
        yield put(createActorSuccess(newActor));
    } catch (error) {
        yield put(createActorError(error));
    }
}

export function* updateActorSaga({ payload }) {
    yield put(updateActorRequest());
    try {
        const { data: updatedActor } = yield cinemaService.put(`/actors/${payload.id}`, payload);
        yield put(updateActorSuccess(updatedActor));
    } catch (error) {
        yield put(updateActorError(error));
    }
}

export function* deleteActorSaga({ payload }) {
    yield put(deleteActorRequest());
    try {
        yield cinemaService.delete(`/actors/${payload}`);
        yield put(deleteActorSuccess(payload));
    } catch (error) {
        yield put(deleteActorError(error));
    }
}
