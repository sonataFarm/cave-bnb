/*
  state is
  {
    currentUser: ...
    errors: [...]
  }
*/

export const _nullUser = {
  currentUser: null,
}

import { RECEIVE_CURRENT_USER } from '../actions/session-actions';

export default (state = _nullUser, action) => {
  Object.freeze(state);
  const { currentUser } = action;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser };
    default:
      return state;
  }
};
