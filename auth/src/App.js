import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

const App = props => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={props.history}>
        <Switch>
          <Route path="/auth/signin">
            <Signin onSignIn={props.onSignin} />
          </Route>
          <Route path="/auth/signup">
            <Signup onSignIn={props.onSignin} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
