import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videosReducer from './videos_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  videos: videosReducer
});

export default entitiesReducer;