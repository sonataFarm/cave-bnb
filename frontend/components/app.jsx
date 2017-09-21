import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session-form-container';

import { AuthRoute } from '../util/route-util';
import GreetingContainer from './greeting-container';

const App = () => (
  <div>
    <header>
      <h1>Cave BnB</h1>
    </header>

    <Route exact path="/" component={GreetingContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
