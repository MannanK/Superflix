import {
  RECEIVE_VIDEOS,
  RECEIVE_LIST_ERRORS
} from "../actions/video_actions";
import { merge } from 'lodash';

const listErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIST_ERRORS:
      return action.errors;
    case RECEIVE_VIDEOS:
      return [];
    default:
      return state;
  }
};

export default listErrorsReducer;