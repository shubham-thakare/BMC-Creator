import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { ContextProvider } from '.';
import { reducer, appState } from '../reducer';
import { mockState } from '../mock';

export const ContextProviderWrapper = ({ children, useMockState }) => {
  const [state, dispatch] = useReducer(
    reducer,
    useMockState ? mockState : appState,
  );

  return (
    <ContextProvider value={{ state, dispatch }}>{children}</ContextProvider>
  );
};

ContextProviderWrapper.propTypes = {
  useMockState: PropTypes.bool,
};
