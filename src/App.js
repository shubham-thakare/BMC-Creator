import React from 'react';
import { SideNav } from './components';
import { BMCScreen } from './screens';
import { ContextProviderWrapper, userVisitedBefore } from './utils';
import Joyride from 'react-joyride';
import { Colors } from '@blueprintjs/core';
import cmsData from './cms';

const App = () => {
  const { joyrideSteps } = cmsData;
  const isFirstVisit = !userVisitedBefore();

  return (
    <ContextProviderWrapper>
      {isFirstVisit && (
        <Joyride
          steps={joyrideSteps}
          continuous
          showProgress
          showSkipButton
          disableOverlayClose
          disableCloseOnEsc
          styles={{
            buttonNext: {
              background: Colors.BLUE3,
              outline: 'none',
            },
            buttonBack: {
              color: Colors.BLUE3,
              outline: 'none',
            },
            buttonSkip: {
              outline: 'none',
            },
          }}
        />
      )}
      <SideNav hasSaveFileOption hasOpenFileOption hasPrintOption hasFooter />
      <BMCScreen />
    </ContextProviderWrapper>
  );
};

export default App;
