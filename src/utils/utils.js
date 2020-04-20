import { createContext } from 'react';
import htmlToImage from 'html-to-image';
import wait from 'waait';
import { UPDATE_STATE_FROM_FILE_DATA } from '../actions';

export const AppContext = createContext({});
export const ContextProvider = AppContext.Provider;
export const ContextConsumer = AppContext.Consumer;

const filter = (node) => {
  return node.tagName !== 'i';
};

export const exportImage = async (fileName) => {
  hideNav();
  await wait(500);
  const node = document.getElementById('canvas-screen');
  closeNav();
  htmlToImage.toSvgDataURL(node, { filter: filter }).then((dataUrl) => {
    const link = document.createElement('a');
    link.download = fileName + '.svg';
    link.href = dataUrl;
    link.click();
  });
};

export const hideNav = () => {
  try {
    document.getElementById('sidebar').style.left = '-220px';
    document.getElementById('canvas-screen').style.paddingLeft = '10px';
  } catch (ex) {}
};

export const openNav = () => {
  try {
    document.getElementById('sidebar').style.left = '0';
    document.getElementById('canvas-screen').style.paddingLeft = '230px';
    document.getElementById('open-button').style.display = 'none';
    document.getElementById('toggle-hide').style.display = 'block';
  } catch (ex) {}
};

export const closeNav = () => {
  try {
    document.getElementById('sidebar').style.left = '-170px';
    document.getElementById('canvas-screen').style.paddingLeft = '60px';
    document.getElementById('open-button').style.display = 'block';
    document.getElementById('toggle-hide').style.display = 'none';
  } catch (ex) {}
};

export const saveFile = (currentState, fileName) => {
  try {
    const pom = document.createElement('a');
    const blob = new Blob([JSON.stringify(currentState)], { type: 'text/xml' });
    pom.setAttribute('href', window.URL.createObjectURL(blob));
    pom.setAttribute('download', fileName + '.bmc');
    pom.dataset.downloadurl = ['text/xml', pom.download, pom.href].join(':');
    pom.draggable = true;
    pom.classList.add('dragout');
    pom.click();
  } catch (ex) {}
};

export const openFile = (dispatch) => {
  try {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = '.bmc';
    inputElement.addEventListener('change', (event) => {
      const input = event.target;
      const reader = new FileReader();
      reader.onload = () => {
        const data = reader.result;
        dispatch({ action: UPDATE_STATE_FROM_FILE_DATA, payload: data });
      };
      reader.readAsText(input.files[0]);
    });
    inputElement.dispatchEvent(new MouseEvent('click'));
  } catch (ex) {}
};

export const trimString = (string) => {
  return string ? string.toString().trim() : '';
};

export const userVisitedBefore = () => {
  const userVisitedBefore = getCookie('userVisitedBefore');
  setCookie('userVisitedBefore', true, 365);

  return userVisitedBefore;
};

const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};

const getCookie = (cname) => {
  const name = cname + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
