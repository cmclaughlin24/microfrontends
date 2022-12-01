import { createBrowserHistory, createMemoryHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (element, { onNavigate, onSignin, defaultHistory, initialPath }) => {
  const memoryHistory =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    memoryHistory.listen(onNavigate);
  }

  ReactDOM.render(<App onSignin={onSignin} history={memoryHistory} />, element);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      if (memoryHistory.location.pathname === nextPathname) {
        return;
      }
      memoryHistory.push(nextPathname);
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRootElement = document.getElementById('_auth-dev-root');

  if (devRootElement) {
    mount(devRootElement, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
