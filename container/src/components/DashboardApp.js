import { mount } from 'dashboard/DashboardApp';
import React, { useEffect, useRef } from 'react';

const DashboardApp = () => {
  const appRef = useRef(null);

  useEffect(() => {
    mount(appRef.current);
  }, []);

  return <div ref={appRef}></div>;
};

export default DashboardApp;
