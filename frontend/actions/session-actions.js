import sessionAPIUtil from '../util/session-api-util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = user => dispatch => (
  // user is { username, password }
  // post the credentials to api
  sessionAPIUtil.login(user)
    .then(
      user   => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors))
    )
);

export const logout = () => dispatch => (
  sessionAPIUtil.logout()
    .then(
      () => dispatch(receiveCurrentUser(null)),
      errors => dispatch(receiveErrors(errors))
    )
);

export const signup = user => dispatch => (
  sessionAPIUtil.signup(user)
    .then(
      user   => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors))
    )
);
