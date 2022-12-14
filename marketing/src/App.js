import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

const App = props => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={props.history}>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/pricing" exact>
            <Pricing />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
