import styled from 'styled-components';

export const TipsWrapper = styled.div`
  & span.message {
    color: var(--placeholder-color);
    text-align: center;

    code {
      padding: 0 5px;
      border-radius: 3px;
      background: var(--app-background-color);
      box-shadow: var(--elevation-1);
    }
  }

  & ul {
    padding-left: 20px;
    color: var(--placeholder-color);

    & li {
      margin-bottom: 8px;

      & ul li {
        margin-bottom: 0;
      }
    }
  }
`;

export const DocContainerWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  position: relative;
  top: 10px;
  left: 0;
  width: 100%;
  z-index: 10;
  margin-bottom: 10px;

  &.empty-state {
    height: calc(100% - 55px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  & svg {
    color: var(--placeholder-color);
  }

  & .add-option,
  .edit-option,
  .full-screen-option {
    position: absolute;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: var(--elevation-1);
    opacity: 0;
    transition: 0.1s ease-in-out;
    z-index: 10;
    background: var(--black-color);
    color: var(--white-color);

    & svg {
      color: var(--white-color);
    }
  }

  & .edit-option {
    top: -40px;
    right: 60px;
  }

  & .add-option {
    top: -40px;
    right: 0;
  }

  & .full-screen-option {
    top: -40px;
    right: 0;
  }

  &:hover .add-option,
  &:hover .edit-option,
  &:hover .full-screen-option {
    opacity: 1;
  }

  & .add-option:hover,
  & .add-edit:hover,
  & .full-screen-option:hover {
    color: var(--white-color);
  }
`;
