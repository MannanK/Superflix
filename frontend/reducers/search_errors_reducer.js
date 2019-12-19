import {
  RECEIVE_VIDEOS,
  RECEIVE_SEARCH_ERRORS
} from "../actions/video_actions";
import { merge } from 'lodash';

const searchErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_ERRORS:
      return action.errors;
    case RECEIVE_VIDEOS:
      return [];
    default:
      return state;
  }
};

export default searchErrorsReducer;