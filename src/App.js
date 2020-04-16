import React, { useReducer } from 'react';
import { BMCScreen, SideNav } from './components';
import { ContextProvider } from './utils';
import { reducer, appState } from './reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, appState);

  return (
    <ContextProvider value={{ state, dispatch }}>
      <SideNav />
      <BMCScreen />
    </ContextProvider>
  );
};

export default App;
