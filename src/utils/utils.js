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
    var link = document.createElement('a');
    link.download = fileName + '.svg';
    link.href = dataUrl;
    link.click();
  });
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

export const saveFile = (currentState, fileName) => {
  var pom = document.createElement('a');
  var blob = new Blob([JSON.stringify(currentState)], { type: 'text/xml' });
  pom.setAttribute('href', window.URL.createObjectURL(blob));
  pom.setAttribute('download', fileName + '.bmc');
  pom.dataset.downloadurl = ['text/xml', pom.download, pom.href].join(':');
  pom.draggable = true;
  pom.classList.add('dragout');
  pom.click();
};

export const openFile = (dispatch) => {
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
};

export const trimString = (string) => {
  return string ? string.toString().trim() : '';
};
