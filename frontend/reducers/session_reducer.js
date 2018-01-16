import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

// const defaultState = {
//   session: {
//     currentUser: null
//   },
//   errors: {
//     session: []
//   }
// };

const sessionReducer = (state = {currentUser: null}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, {currentUser: action.currentUser});
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
