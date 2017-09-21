import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
import React from 'react';

const Auth = ({ component: Component, path, loggedIn }) => {

  return (
    <Route path={path} render={props => (
      !loggedIn ? (
        <Component { ...props } />
      ) : ( <Redirect to='/' />
      )
    )} />
  );
}
// const Auth = ({ component: Component, path, loggedIn }) => (
//   <Route path={path} render={props => (
//     !loggedIn ? (
//       <Component { ...props } />
//     ) : ( <Redirect to='/' />
//     )
//   )} />
// );

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

export const AuthRoute = connect(mapStateToProps)(Auth);
