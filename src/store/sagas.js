import { all, takeLatest } from 'redux-saga/effects';
import ACTIONS_TYPES from './actions/actionsTypes';
import { 
  getAllStudiosSaga, 
  getStudioSaga, 
  createStudioSaga, 
  updateStudioSaga, 
  deleteStudioSaga 
} from '../Components/sagas/studiosSagas';
import { 
  createMovieSaga, 
  deleteMovieSaga, 
  getAllMoviesSaga, 
  updateMovieSaga 
} from '../Components/sagas/moviesSagas';
import { 
  createActorSaga, 
  deleteActorSaga, 
  getAllActorsSaga, 
  updateActorSaga 
} from '../Components/sagas/actorsSagas';
import { 
  createDirectorSaga, 
  deleteDirectorSaga, 
  getAllDirectorsSaga, 
  updateDirectorSaga 
} from '../Components/sagas/directorSagas';

function* rootSaga() {
  yield all([
  
    takeLatest(ACTIONS_TYPES.GET_STUDIOS_ACTION, getAllStudiosSaga),
    takeLatest(ACTIONS_TYPES.GET_STUDIO_ACTION, getStudioSaga),
    takeLatest(ACTIONS_TYPES.POST_STUDIO_ACTION, createStudioSaga),
    takeLatest(ACTIONS_TYPES.PUT_STUDIO_ACTION, updateStudioSaga),
    takeLatest(ACTIONS_TYPES.DELETE_STUDIO_ACTION, deleteStudioSaga),
    

    takeLatest(ACTIONS_TYPES.GET_MOVIES_ACTION, getAllMoviesSaga),
    takeLatest(ACTIONS_TYPES.POST_MOVIE_ACTION, createMovieSaga),
    takeLatest(ACTIONS_TYPES.PUT_MOVIE_ACTION, updateMovieSaga),
    takeLatest(ACTIONS_TYPES.DELETE_MOVIE_ACTION, deleteMovieSaga),
    

    takeLatest(ACTIONS_TYPES.GET_ACTORS_ACTION, getAllActorsSaga),
    takeLatest(ACTIONS_TYPES.POST_ACTOR_ACTION, createActorSaga),
    takeLatest(ACTIONS_TYPES.PUT_ACTOR_ACTION, updateActorSaga),
    takeLatest(ACTIONS_TYPES.DELETE_ACTOR_ACTION, deleteActorSaga),

    takeLatest(ACTIONS_TYPES.GET_DIRECTORS_ACTION, getAllDirectorsSaga),
    takeLatest(ACTIONS_TYPES.POST_DIRECTOR_ACTION, createDirectorSaga),
    takeLatest(ACTIONS_TYPES.PUT_DIRECTOR_ACTION, updateDirectorSaga),
    takeLatest(ACTIONS_TYPES.DELETE_DIRECTOR_ACTION, deleteDirectorSaga),
  ]);
}

export default rootSaga;
