/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import htmlToImage from "html-to-image";
import wait from 'waait';
import { Icon, Divider } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { StyledSideNavbar } from "./styles/SideNav.style";

const SideNav = () => {
  function filter(node) {
    return node.tagName !== "i";
  }
  
  const exportImage = async () => {
    closeNav();
    await wait(500);
    const node = document.getElementById("canvas-screen");
    htmlToImage.toSvgDataURL(node, { filter: filter }).then(dataUrl => {
      var link = document.createElement("a");
      link.download = "my-image-name.svg";
      link.href = dataUrl;
      link.click();
    });
  };

  const openNav = () => {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("canvas-screen").style.paddingLeft = "230px";
    document.getElementById("open-button").style.display = "none";
    document.getElementById("toggle-hide").style.display = "block";
  };

  const closeNav = () => {
    document.getElementById("sidebar").style.left = "-170px";
    document.getElementById("canvas-screen").style.paddingLeft = "60px";
    document.getElementById("open-button").style.display = "block";
    document.getElementById("toggle-hide").style.display = "none";
  };

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
          <div className="bmc-title">Business Model Canvas</div>
          <Divider />
          <a href="javascript:void(0)">
            <Icon icon={IconNames.DOCUMENT} iconSize={20} />
            &nbsp;Save
          </a>
          <a href="javascript:void(0)">
            <Icon icon={IconNames.DOCUMENT_OPEN} iconSize={20} />
            &nbsp;Open
          </a>
          <a href="javascript:void(0)" onClick={() => exportImage()}>
            <Icon icon={IconNames.EXPORT} iconSize={20} />
            &nbsp;Export to SVG
          </a>
          <a href="javascript:void(0)">
            <Icon icon={IconNames.PRESENTATION} iconSize={20} />
            &nbsp;Presentation Mode
          </a>

          <div className="side-bar--footer">
            <Divider />
            <a
              href="https://github.com/shubham-thakare/BMC-Creator"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub &nbsp;
              <Icon icon={IconNames.SHARE} iconSize={14} />
            </a>
          </div>
        </div>
      </StyledSideNavbar>
    </>
  );
};

export default SideNav;
