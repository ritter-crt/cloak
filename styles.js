import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {

  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: auto;
    font-family: system-ui;
  }
`;
