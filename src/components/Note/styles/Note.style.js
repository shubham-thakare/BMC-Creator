import styled from 'styled-components';

export const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    props.bgColor ? props.bgColor : 'var(--app-background-color)'};
  color: ${(props) => props.color && props.color};
  margin-bottom: var(--spacing-scale-1);
`;

export const NoteTitle = styled.span`
  padding: 5px 10px 5px 5px;
  font-weight: bold;
`;

export const NoteDescription = styled.span`
  padding: 0 10px 5px 5px;
  text-align: justify;
`;
