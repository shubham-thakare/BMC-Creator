import React, { useReducer } from 'react';
import { SideNav } from './components';
import { BMCScreen } from './screens';
import { ContextProvider } from './utils';
import { reducer, appState } from './reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, appState);

  return (
    <ContextProvider value={{ state, dispatch }}>
      <SideNav hasSaveFileOption hasOpenFileOption hasFooter />
      <BMCScreen />
    </ContextProvider>
  );
};

export default App;
