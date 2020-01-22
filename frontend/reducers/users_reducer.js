import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';
import { RECEIVE_LIST_VIDEOS } from '../actions/list_video_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { [action.user.id]: action.user });
    case RECEIVE_LIST_VIDEOS:
      let newState = merge({}, state);
      newState[Object.keys(newState)[0]].listVideoIds = action.payload.listVideoIds;

      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default usersReducer;