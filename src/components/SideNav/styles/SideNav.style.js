import styled from 'styled-components';

export const StyledSideNavbar = styled.div`
  height: 100%;
  width: 220px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: -170px;
  background-color: var(--white-color);
  overflow-x: hidden;
  padding-top: 65px;
  transition: 0.5s;

  .bmc-title {
    padding-left: 15px;
    padding: 8px 15px;
  }

  & a {
    padding: 8px 8px 20px 15px;
    text-decoration: none;
    font-size: var(--navbar-link-font-size);
    color: var(--link-color);
    display: block;
    transition: 0.2s;
    outline: none;
  }

  & a:hover {
    color: var(--link-hover-color);
  }

  .closebtn {
    position: absolute;
    top: -2px;
    left: -5px;
    font-size: 36px;
    margin-left: 0px;
  }

  .openbtn {
    position: absolute;
    top: -2px;
    right: 5px;
    font-size: 36px;
    margin-left: 50px;
  }

  #toggle-hide {
    display: none;
  }

  .side-bar--footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }

  .side-bar--footer a {
    padding: 8px;
    font-size: var(--navbar-link-font-size-smaller);
  }
`;
