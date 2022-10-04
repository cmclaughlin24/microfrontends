import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/pricing" exact>
            <Pricing />
          </Route>
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
