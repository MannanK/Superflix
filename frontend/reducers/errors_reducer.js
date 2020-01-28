import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import searchErrorsReducer from './search_errors_reducer';
import listErrorsReducer from './list_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  search: searchErrorsReducer,
  list: listErrorsReducer
});

export default errorsReducer;