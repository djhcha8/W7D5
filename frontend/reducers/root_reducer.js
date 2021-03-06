import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';


const rootReducer = combineReducers({
  errors: errorsReducer,
  session: sessionReducer
});

export default rootReducer;
