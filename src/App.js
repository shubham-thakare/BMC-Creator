import React, { useState } from 'react';
import { BMCScreen, SideNav } from './components';
import { AppContext, contextWithoutState } from './utils/Context';

const App = () => {
  const { Provider } = AppContext;

  const [title, setTitle] = useState();
  const [version, setVersion] = useState();
  const [date, setDate] = useState();

  const contextWithState = {
    ...contextWithoutState,
    title,
    setTitle,
    version,
    setVersion,
    date,
    setDate,
  };

  return (
    <Provider value={contextWithState}>
      <SideNav />
      <BMCScreen />
    </Provider>
  );
};

export default App;
