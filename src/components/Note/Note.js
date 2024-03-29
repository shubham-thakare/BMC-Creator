import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  Popover,
  Intent,
  PopoverPosition,
  PopoverInteractionKind,
} from '@blueprintjs/core';
import {
  NoteWrapper,
  NoteTitle,
  NoteDescription,
  NoteMenuIcon,
} from './styles/Note.style';
import { trimString, AppContext } from '../../utils';
import { DELETE_NOTE, EDIT_NOTE } from '../../actions';
import cmsData from '../../cms';

export const NoteMenu = ({ noteKey, activeKey }) => {
  const { dispatch } = useContext(AppContext);
  const { b_edit, b_delete } = cmsData;

  return (
    <Menu>
      <Menu.Item
        text={b_edit}
        icon="edit"
        onClick={() => {
          dispatch({ action: EDIT_NOTE, payload: { noteKey, activeKey } });
        }}
      />
      <Menu.Item
        text={b_delete}
        icon="trash"
        intent={Intent.DANGER}
        onClick={() => {
          dispatch({ action: DELETE_NOTE, payload: { noteKey, activeKey } });
        }}
      />
    </Menu>
  );
};

const Note = ({ item, activeKey, ...props }) => {
  return (
    <>
      {(trimString(item.title).length > 0 ||
        trimString(item.description).length > 0) && (
        <Popover
          content={<NoteMenu noteKey={item.key} activeKey={activeKey} />}
          position={PopoverPosition.RIGHT_BOTTOM}
          interactionKind={PopoverInteractionKind.CLICK}
          targetClassName="full-width"
        >
          <NoteWrapper
            bgColor={item.background}
            color={item.color}
            {...props}
            className={`${props.className} print-item`}
          >
            <NoteMenuIcon
              color={item.color}
              className="note-menu-icon"
            ></NoteMenuIcon>
            {item.title && item.title.length > 0 && (
              <NoteTitle>{item.title}</NoteTitle>
            )}
            {item.description && item.description.length > 0 && (
              <NoteDescription>{item.description}</NoteDescription>
            )}
          </NoteWrapper>
        </Popover>
      )}
    </>
  );
};

Note.propTypes = {
  item: PropTypes.object.isRequired,
  activeKey: PropTypes.string.isRequired,
};

export default Note;
