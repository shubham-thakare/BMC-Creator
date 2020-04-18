import styled from 'styled-components';

const animateFadeIn = `
  @keyframes slideInY {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
      transform: translateY(100%);
    }
  }
  @-webkit-keyframes slideInY {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
      transform: translateY(100%);
    }
  }

  -webkit-animation-name: slideInY;
  animation-name: slideInY;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-direction: reverse;
  animation-direction: reverse;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
`;

export const NoteWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    props.bgColor ? props.bgColor : 'var(--app-background-color)'};
  color: ${(props) => props.color && props.color};
  box-shadow: var(--elevation-2);
  ${animateFadeIn}
`;

export const NoteTitle = styled.span`
  padding: 5px;
  font-weight: bold;
  user-select: text;
`;

export const NoteDescription = styled.span`
  padding: 5px;
  user-select: text;
`;
