import { mount } from 'marketing/MarketingApp';
import React, { useEffect, useRef } from 'react';

const MarketingApp = () => {
  const appRef = useRef(null);

  useEffect(() => {
    mount(appRef.current);
  }, []);

  return <div ref={appRef}></div>;
};

export default MarketingApp;
