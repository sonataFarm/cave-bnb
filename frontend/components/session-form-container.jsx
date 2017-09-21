import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SessionForm from './session-form';
import { login, signup } from '../actions/session-actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: ownProps.location.pathname.slice(1)
  };
}


const mapDispatchToProps = (dispatch, ownProps) => {
  let action;

  if (ownProps.location.pathname === '/login') {
    action = login;
  } else {
    action = signup;
  }

  return { processForm: (user) => dispatch(action(user)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
