import React from 'react';
import { Spinner } from '@blueprintjs/core';
import { LoaderWrapper } from './styles/Loading.style';

const Loading = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};

export default Loading;
