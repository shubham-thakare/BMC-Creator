import React from 'react';
import PropTypes from 'prop-types';
import { NoteWrapper, NoteTitle, NoteDescription } from './styles/Note.style';
import { trimString } from '../../utils';

const Note = ({ item, ...props }) => {
  return (
    <>
      {(trimString(item.title).length > 0 ||
        trimString(item.description).length > 0) && (
        <NoteWrapper bgColor={item.background} color={item.color} {...props}>
          {item.title && item.title.length > 0 && (
            <NoteTitle>{item.title}</NoteTitle>
          )}
          {item.description && item.description.length > 0 && (
            <NoteDescription>{item.description}</NoteDescription>
          )}
        </NoteWrapper>
      )}
    </>
  );
};

Note.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Note;
