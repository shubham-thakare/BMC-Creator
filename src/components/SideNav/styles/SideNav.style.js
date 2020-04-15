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
`;

export const StyledAppTitle = styled.div`
  padding: 8px 8px;
`;

export const StyledLink = styled.a`
  padding: 8px 8px 20px 15px;
  text-decoration: none !important;
  font-size: var(--navbar-link-font-size);
  color: var(--link-color);
  display: block;
  transition: 0.2s;
  outline: none;  

  &:hover {
    color: var(--link-hover-color);
  }
`;

export const StyledToggleHide = styled.div`
  display: none;
`;

export const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  
  & a {
    padding: 8px;
    font-size: var(--navbar-link-font-size-smaller);
  }
`;