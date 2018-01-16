import RECEIVE_ERRORS from '../actions/session_actions';
import RECEIVE_CURRENT_USER from '../actions/session_actions';
import { merge } from 'lodash';

// const defaultState = {
//   session: {
//     currentUser: null
//   },
//   errors: {
//     session: []
//   }
// };
const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ERRORS:
      newState = merge({}, state, {errors: action.errors});
      return newState;
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state, {errors: []});
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
