import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import actorsReducer from './actorsReducer';
import directorsReducer from './directorsReducer';
import studiosReducer from './studiosReducer';

export default combineReducers({
  moviesList: moviesReducer,
  actorsList: actorsReducer,
  directorsList: directorsReducer,
  studiosList: studiosReducer,
});

