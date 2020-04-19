import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DocContainerWrapper, TipsWrapper } from './styles/DocContainer.style';
import { Icon } from '@blueprintjs/core';
import { AppContext } from '../../utils';
import { OPEN_DIALOG } from '../../actions/actions';
import Note from '../Note';
import cmsData from '../../cms';

const Tips = () => {
  const {
    l_useful_tips,
    l_tip,
    l_tip_1,
    l_tip_2_1,
    l_tip_2_2,
    l_tip_3,
    l_tip_4,
    l_tip_menu_option_1,
    l_tip_menu_option_2,
    l_tip_menu_option_3,
  } = cmsData;

  return (
    <TipsWrapper>
      <span className="message text-bold text-italic">{l_useful_tips}</span>
      <ul>
        <li>
          <span className="message">{l_tip}</span>
        </li>
        <li>
          <span className="message">{l_tip_1}</span>
        </li>
        <li>
          <span className="message">
            {l_tip_2_1} <code>+</code> {l_tip_2_2}
          </span>
        </li>
        <li>
          <span className="message">{l_tip_3}</span>
        </li>
        <li>
          <span className="message">{l_tip_4}</span>
          <ul>
            <li>{l_tip_menu_option_1}</li>
            <li>{l_tip_menu_option_2}</li>
            <li>{l_tip_menu_option_3}</li>
          </ul>
        </li>
      </ul>
    </TipsWrapper>
  );
};

const DocContainer = ({
  activeKey,
  message,
  isEmpty,
  hasEditOption,
  hasAddOption,
  allowFullScreen,
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
      {isEmpty && <Tips />}
      {state[activeKey].notes.map((item) => (
        <Note item={item} key={item.key} activeKey={activeKey} />
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
