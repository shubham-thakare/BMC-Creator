import React from 'react';
import { DocContainerWrapper } from './styles/DocContainer.style';
import { Icon } from '@blueprintjs/core';

const DocContainer = ({
  children,
  message,
  isEmpty,
  hasEditOption = true,
  allowFullScreen = true,
}) => {
  return (
    <DocContainerWrapper className={isEmpty && 'empty-state'}>
      {hasEditOption && (
        <Icon icon="plus" iconSize={15} className="add-option" />
      )}
      {allowFullScreen && (
        <Icon icon="fullscreen" iconSize={15} className="full-screen-option" />
      )}
      {isEmpty && <span className="message">{message}</span>}
      {children}
    </DocContainerWrapper>
  );
};

export default DocContainer;
