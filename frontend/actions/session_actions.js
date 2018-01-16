import * as ApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = ({username, password}) => (dispatch) => {

    return ApiUtil.login(username, password).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser))
  );
};

export const receiveCurrentUser = (currentUser) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const logout = () => (dispatch) => {
  return ApiUtil.logout().then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser))
  );
};

export const signup = (username, password) => (dispatch) => {

  return ApiUtil.signup(username, password).then(
    (response) => dispatch(receiveCurrentUser(null))
  );
};

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors
  });
};
