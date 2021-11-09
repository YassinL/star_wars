import { createGlobalStyle } from "styled-components";
import StarsImage from "../../assets/stars.png";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${StarsImage});
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
