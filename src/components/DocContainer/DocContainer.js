import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DocContainerWrapper } from './styles/DocContainer.style';
import { Icon } from '@blueprintjs/core';
import { AppContext } from '../../utils';
import { OPEN_DIALOG } from '../../actions/actions';
import Note from '../Note';

const DocContainer = ({
  activeKey,
  message,
  isEmpty,
  hasEditOption = false,
  hasAddOption = true,
  allowFullScreen = true,
  ...props
}) => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <DocContainerWrapper className={isEmpty && 'empty-state'} {...props}>
      {hasEditOption && (
        <Icon icon="edit" iconSize={15} className="edit-option" />
      )}
      {hasAddOption && (
        <Icon
          icon="plus"
          iconSize={15}
          className="add-option"
          onClick={() =>
            dispatch({ action: OPEN_DIALOG, payload: { activeKey } })
          }
        />
      )}
      {allowFullScreen && (
        <Icon icon="fullscreen" iconSize={15} className="full-screen-option" />
      )}
      {isEmpty && <span className="message">{message}</span>}
      {state[activeKey].notes.map((item) => (
        <Note item={item} key={item.key} />
      ))}
    </DocContainerWrapper>
  );
};

DocContainer.propTypes = {
  key: PropTypes.string,
  message: PropTypes.string,
  isEmpty: PropTypes.bool,
  hasAddOption: PropTypes.bool,
  hasEditOption: PropTypes.bool,
  allowFullScreen: PropTypes.bool,
};

export default DocContainer;
