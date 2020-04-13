/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Icon, Divider } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { StyledSideNavbar } from "./styles/SideNav.style";
import { AppContext } from "../../App";

const SideNav = () => {
  const { exportImage, openNav, closeNav, cmsData } = useContext(AppContext);
  const {
    l_app_title,
    l_save,
    l_open,
    l_export_to_svg,
    l_presentation_mode,
    l_view_on_github,
    url_app_github
  } = cmsData;

  return (
    <>
      <StyledSideNavbar id="sidebar">
        <a
          href="javascript:void(0)"
          id="open-button"
          className="openbtn"
          onClick={() => openNav()}
        >
          <Icon icon={IconNames.MENU} iconSize={30} />
        </a>
        <a
          href="javascript:void(0)"
          id="close-button"
          className="closebtn"
          onClick={() => closeNav()}
        >
          <Icon icon={IconNames.CHEVRON_LEFT} iconSize={30} />
        </a>
        <div id="toggle-hide">
          <Divider />
          <div className="bmc-title">{l_app_title}</div>
          <Divider />
          <a href="javascript:void(0)">
            <Icon icon={IconNames.DOCUMENT} iconSize={20} />
            &nbsp;{l_save}
          </a>
          <a href="javascript:void(0)">
            <Icon icon={IconNames.DOCUMENT_OPEN} iconSize={20} />
            &nbsp;{l_open}
          </a>
          <a href="javascript:void(0)" onClick={() => exportImage()}>
            <Icon icon={IconNames.EXPORT} iconSize={20} />
            &nbsp;{l_export_to_svg}
          </a>
          <a href="javascript:void(0)">
            <Icon icon={IconNames.PRESENTATION} iconSize={20} />
            &nbsp;{l_presentation_mode}
          </a>

          <div className="side-bar--footer">
            <Divider />
            <a href={url_app_github} target="_blank" rel="noopener noreferrer">
              {l_view_on_github} &nbsp;
              <Icon icon={IconNames.SHARE} iconSize={14} />
            </a>
          </div>
        </div>
      </StyledSideNavbar>
    </>
  );
};

export default SideNav;
