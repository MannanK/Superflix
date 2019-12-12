import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from '../actions/video_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const genresReducer = (state = {}, action) => {
  Object.freeze(action);

  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.payload.genres;
    case RECEIVE_VIDEO:
      return action.payload.genres;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default genresReducer;