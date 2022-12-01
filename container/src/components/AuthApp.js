import { mount } from 'auth/AuthApp';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const AuthApp = props => {
  const appRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(appRef.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location === nextPathname) {
          return;
        }

        history.push(nextPathname);
      },
      onSignin: props.onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={appRef}></div>;
};

export default AuthApp;
