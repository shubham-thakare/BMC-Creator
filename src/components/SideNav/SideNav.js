/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Icon, Divider } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import {
  StyledSideNavbar,
  StyledAppTitle,
  StyledLink,
  StyledToggleHide,
  StyledFooter,
} from './styles/SideNav.style';
import { AppContext } from '../../utils/Context';

const SideNav = () => {
  const { exportImage, openNav, closeNav, cmsData } = useContext(AppContext);
  const {
    l_app_title,
    l_save,
    l_open,
    l_export_to_svg,
    l_presentation_mode,
    l_view_on_github,
    url_app_github,
  } = cmsData;

  return (
    <>
      <StyledSideNavbar id="sidebar">
        <StyledLink
          href="javascript:void(0)"
          id="open-button"
          className="openbtn"
          onClick={() => openNav()}
        >
          <Icon icon={IconNames.MENU} iconSize={30} />
        </StyledLink>
        <StyledLink
          href="javascript:void(0)"
          id="close-button"
          className="closebtn"
          onClick={() => closeNav()}
        >
          <Icon icon={IconNames.CHEVRON_LEFT} iconSize={30} />
        </StyledLink>

        <StyledToggleHide id="toggle-hide">
          <Divider />
          <StyledAppTitle><b>{l_app_title}</b> <i>v1.0.0</i></StyledAppTitle>
          <Divider />
          <StyledLink href="javascript:void(0)">
            <Icon icon={IconNames.DOCUMENT} iconSize={20} /> {l_save}
          </StyledLink>
          <StyledLink href="javascript:void(0)">
            <Icon icon={IconNames.DOCUMENT_OPEN} iconSize={20} /> {l_open}
          </StyledLink>
          <StyledLink href="javascript:void(0)" onClick={() => exportImage()}>
            <Icon icon={IconNames.EXPORT} iconSize={20} /> {l_export_to_svg}
          </StyledLink>
          <StyledLink href="javascript:void(0)">
            <Icon icon={IconNames.PRESENTATION} iconSize={20} /> {l_presentation_mode}
          </StyledLink>

          <StyledFooter>
            <Divider />
            <StyledLink href={url_app_github} target="_blank" rel="noopener noreferrer">
              {l_view_on_github} <Icon icon={IconNames.SHARE} iconSize={14} />
            </StyledLink>
          </StyledFooter>
        </StyledToggleHide>
      </StyledSideNavbar>
    </>
  );
};

export default SideNav;
