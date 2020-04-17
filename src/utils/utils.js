import { createContext } from 'react';
import htmlToImage from 'html-to-image';
import wait from 'waait';

export const AppContext = createContext({});
export const ContextProvider = AppContext.Provider;
export const ContextConsumer = AppContext.Consumer;

const filter = (node) => {
  return node.tagName !== 'i';
};

export const exportImage = async (fileName, mode = 'svg') => {
  hideNav();
  await wait(500);
  const node = document.getElementById('canvas-screen');
  closeNav();

  switch (mode) {
    case 'jpeg':
      htmlToImage.toJpeg(node, { quality: 0.95 }).then((dataUrl) => {
        var link = document.createElement('a');
        link.download = fileName + '.jpeg';
        link.href = dataUrl;
        link.click();
      });
    break;
    
    default:
      htmlToImage.toSvgDataURL(node, { filter: filter }).then((dataUrl) => {
        var link = document.createElement('a');
        link.download = fileName + '.svg';
        link.href = dataUrl;
        link.click();
      });
    break;
  }
};

export const hideNav = () => {
  document.getElementById('sidebar').style.left = '-220px';
  document.getElementById('canvas-screen').style.paddingLeft = '10px';
};

export const openNav = () => {
  document.getElementById('sidebar').style.left = '0';
  document.getElementById('canvas-screen').style.paddingLeft = '230px';
  document.getElementById('open-button').style.display = 'none';
  document.getElementById('toggle-hide').style.display = 'block';
};

export const closeNav = () => {
  document.getElementById('sidebar').style.left = '-170px';
  document.getElementById('canvas-screen').style.paddingLeft = '60px';
  document.getElementById('open-button').style.display = 'block';
  document.getElementById('toggle-hide').style.display = 'none';
};
