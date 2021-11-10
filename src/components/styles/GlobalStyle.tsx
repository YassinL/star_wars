import { createGlobalStyle } from "styled-components";
import StarsImage from "../../assets/stars.png";
import PolloOneFont from "../../assets/fonts/Poller_One/PollerOne-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${StarsImage});
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  @font-face {
    font-family: poloOne;
    src: url(${PolloOneFont}) format("truetype");
  }
`;
