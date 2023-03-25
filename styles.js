import { createGlobalStyle } from "styled-components";
import { keyframes } from "styled-components";

export default createGlobalStyle`
:root {

  --first-color:rgb(40,116,252);
  ${"" /* --first-color: #bbf726; */}
  ${"" /* --first-color: #db6589; */}
  --second-color: rgba(0,123,255,1);
  --background-color: rgba(253, 251, 248, 1)

  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: auto;
    font-family: sans-serif;
    background-color: #FDFBF8;
  }
`;

export const changeOpacity = keyframes`
  0%   { opacity: 0.5; }
  100% { opacity: 1; }
`;

export const getBigger = keyframes`
  60% {font-size: 40pt;}
`;

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
