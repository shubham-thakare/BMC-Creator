import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DocContainerWrapper } from './styles/DocContainer.style';
import { Icon } from '@blueprintjs/core';
import { AppContext } from '../../utils';
import { OPEN_DIALOG } from '../../actions/actions';

const DocContainer = ({
  children,
  activeKey,
  message,
  isEmpty,
  hasEditOption = true,
  allowFullScreen = true,
}) => {
  const { dispatch } = useContext(AppContext);

  return (
    <DocContainerWrapper className={isEmpty && 'empty-state'}>
      {hasEditOption && (
        <Icon
          icon="plus"
          iconSize={15}
          className="add-option"
          onClick={() => dispatch({ action: OPEN_DIALOG, payload: { activeKey } })}
        />
      )}
      {allowFullScreen && (
        <Icon icon="fullscreen" iconSize={15} className="full-screen-option" />
      )}
      {isEmpty && <span className="message">{message}</span>}
      {children}
    </DocContainerWrapper>
  );
};

DocContainer.propTypes = {
  key: PropTypes.string,
  message: PropTypes.string,
  isEmpty: PropTypes.bool,
  hasEditOption: PropTypes.bool,
  allowFullScreen: PropTypes.bool,
};

export default DocContainer;
