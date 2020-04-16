import styled from 'styled-components';

export const DocContainerWrapper = styled.div`
  position: relative;
  top: 10px;
  left: 0;
  width: 100%;
  height: calc(100% - 40px);
  z-index: 10;

  &.empty-state {
    display: flex;
    align-items: center;
    justify-content: center;

    & span.message {
      color: var(--placeholder-color);
      text-align: center;
    }
  }

  & svg {
    color: var(--placeholder-color);
  }

  & .add-option,
  .full-screen-option {
    position: absolute;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 5px -2px;
    opacity: 0;
    transition: 0.2s ease-in-out;
    z-index: 10;
    background: var(--white-color);

    & svg {
      color: inherit;
    }
  }

  & .add-option {
    top: 0;
    right: 30px;
  }

  & .full-screen-option {
    top: 0;
    right: 0;
  }

  &:hover .add-option,
  &:hover .full-screen-option {
    opacity: 1;
  }

  & .add-option:hover,
  & .full-screen-option:hover {
    color: var(--link-hover-color);
  }
`;
