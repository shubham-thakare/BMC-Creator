import React from 'react';
import { SideNav } from './components';
import { BMCScreen } from './screens';
import { ContextProviderWrapper } from './utils';

const App = () => {
  return (
    <ContextProviderWrapper>
      <SideNav hasSaveFileOption hasOpenFileOption hasFooter />
      <BMCScreen />
    </ContextProviderWrapper>
  );
};

export default App;
