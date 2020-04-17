import React from 'react';
import { NoteWrapper, NoteTitle, NoteDescription } from './styles/Note.style';

const Note = ({ item }) => {
  return (
    <NoteWrapper bgColor={item.background} color={item.color}>
      <NoteTitle>{item.title}</NoteTitle>
      <NoteDescription>{item.description}</NoteDescription>
    </NoteWrapper>
  );
};

export default Note;
