import React from 'react';
import { Spinner } from '@blueprintjs/core';
import { Loader } from './styles/Loading.style';

const Loading = () => {
  return (
    <Loader>
      <Spinner />
    </Loader>
  );
};

export default Loading;
