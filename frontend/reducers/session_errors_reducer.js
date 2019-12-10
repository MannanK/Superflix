import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  DELETE_SESSION_ERRORS
} from "../actions/session_actions";
import { merge } from 'lodash';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case DELETE_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;