/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Icon, Divider } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import {
  SideNavbar,
  AppTitle,
  Link,
  ToggleHide,
  Footer,
} from './styles/SideNav.style';
import { AppContext } from '../../utils';
import { OPEN_NAV, CLOSE_NAV, EXPORT_IMAGE } from '../../actions';
import cmsData from '../../cms';

const SideNav = () => {
  const { dispatch } = useContext(AppContext);
  const {
    l_app_title,
    l_app_version,
    l_save,
    l_open,
    l_export_to_svg,
    l_presentation_mode,
    l_view_on_github,
    url_app_github,
  } = cmsData;

  return (
    <>
      <SideNavbar id="sidebar">
        <Link
          href="javascript:void(0)"
          id="open-button"
          className="openbtn"
          onClick={() => dispatch({ action: OPEN_NAV })}
        >
          <Icon icon={IconNames.MENU} iconSize={30} />
        </Link>
        <Link
          href="javascript:void(0)"
          id="close-button"
          className="closebtn"
          onClick={() => dispatch({ action: CLOSE_NAV })}
        >
          <Icon icon={IconNames.CHEVRON_LEFT} iconSize={30} />
        </Link>

        <ToggleHide id="toggle-hide">
          <Divider />
          <AppTitle><b>{l_app_title}</b> <i>{l_app_version}</i></AppTitle>
          <Divider />
          <Link href="javascript:void(0)">
            <Icon icon={IconNames.DOCUMENT} iconSize={20} /> {l_save}
          </Link>
          <Link href="javascript:void(0)">
            <Icon icon={IconNames.DOCUMENT_OPEN} iconSize={20} /> {l_open}
          </Link>
          <Link href="javascript:void(0)" onClick={() => dispatch({ action: EXPORT_IMAGE })}>
            <Icon icon={IconNames.EXPORT} iconSize={20} /> {l_export_to_svg}
          </Link>
          <Link href="javascript:void(0)">
            <Icon icon={IconNames.PRESENTATION} iconSize={20} /> {l_presentation_mode}
          </Link>

          <Footer>
            <Divider />
            <Link href={url_app_github} target="_blank" rel="noopener noreferrer">
              {l_view_on_github} <Icon icon={IconNames.SHARE} iconSize={14} />
            </Link>
          </Footer>
        </ToggleHide>
      </SideNavbar>
    </>
  );
};

export default SideNav;
