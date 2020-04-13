import React, { useState, createContext } from "react";
import htmlToImage from "html-to-image";
import wait from "waait";
import cmsData from "./cms";
import { BMCScreen, SideNav } from "./components";

export const AppContext = createContext({});

const App = () => {
  const { Provider } = AppContext;

  const [title, setTitle] = useState();
  const [version, setVersion] = useState();
  const [date, setDate] = useState();

  function filter(node) {
    return node.tagName !== "i";
  }

  const exportImage = async () => {
    hideNav();
    await wait(500);
    const node = document.getElementById("canvas-screen");
    closeNav();
    htmlToImage.toSvgDataURL(node, { filter: filter }).then(dataUrl => {
      var link = document.createElement("a");
      link.download = "my-image-name.svg";
      link.href = dataUrl;
      link.click();
    });
  };

  const hideNav = () => {
    document.getElementById("sidebar").style.left = "-220px";
    document.getElementById("canvas-screen").style.paddingLeft = "10px";
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

  const contextValues = {
    cmsData,
    title,
    setTitle,
    version,
    setVersion,
    date,
    setDate,
    exportImage,
    openNav,
    closeNav
  };

  return (
    <Provider value={contextValues}>
      <SideNav />
      <BMCScreen />
    </Provider>
  );
};

export default App;
