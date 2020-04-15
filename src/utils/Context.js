import { createContext } from 'react';
import htmlToImage from 'html-to-image';
import wait from 'waait';
import cmsData from '../cms';

export const AppContext = createContext({});

const filter = (node) => {
  return node.tagName !== 'i';
};

const exportImage = async () => {
  hideNav();
  await wait(500);
  const node = document.getElementById('canvas-screen');
  closeNav();
  htmlToImage.toSvgDataURL(node, { filter: filter }).then((dataUrl) => {
    var link = document.createElement('a');
    link.download = 'my-image-name.svg';
    link.href = dataUrl;
    link.click();
  });
};

const hideNav = () => {
  document.getElementById('sidebar').style.left = '-220px';
  document.getElementById('canvas-screen').style.paddingLeft = '10px';
};

const openNav = () => {
  document.getElementById('sidebar').style.left = '0';
  document.getElementById('canvas-screen').style.paddingLeft = '230px';
  document.getElementById('open-button').style.display = 'none';
  document.getElementById('toggle-hide').style.display = 'block';
};

const closeNav = () => {
  document.getElementById('sidebar').style.left = '-170px';
  document.getElementById('canvas-screen').style.paddingLeft = '60px';
  document.getElementById('open-button').style.display = 'block';
  document.getElementById('toggle-hide').style.display = 'none';
};

export const contextWithoutState = {
  cmsData,
  exportImage,
  openNav,
  closeNav,
};
