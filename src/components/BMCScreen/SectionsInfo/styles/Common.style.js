import styled from 'styled-components';

export const StyledPopoverBody = styled.div`
  padding: 10px;
  max-height: 300px;
  overflow: auto;
  user-select: none;
  -webkit-user-drag: none;

  & table {
    min-width: 700px;
  }

  & table thead {
    text-align: left;
    text-transform: uppercase;
  }
`;

export const StyledPopoverQuestionWrapper = styled.div`
  margin-bottom: 10px;
`;

export const StyledPopoverHintTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-style: ${(props) => props.isItalic && 'italic'};
`;

export const StyledPopoverHintText = styled.div`
  font-style: normal;
`;
